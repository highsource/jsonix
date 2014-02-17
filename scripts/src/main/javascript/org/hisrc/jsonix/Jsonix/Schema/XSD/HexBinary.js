/*
 * Jsonix is a JavaScript library which allows you to convert between XML
 * and JavaScript object structures.
 *
 * Copyright (c) 2010, Aleksei Valikov, Highsource.org
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *     * Redistributions of source code must retain the above copyright
 *       notice, this list of conditions and the following disclaimer.
 *     * Redistributions in binary form must reproduce the above copyright
 *       notice, this list of conditions and the following disclaimer in the
 *       documentation and/or other materials provided with the distribution.
 *     * Neither the name of the Aleksei Valikov nor the
 *       names of contributors may be used to endorse or promote products
 *       derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL ALEKSEI VALIKOV BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

Jsonix.Schema.XSD.HexBinary = Jsonix.Class(Jsonix.Schema.XSD.AnySimpleType, {
	name : 'HexBinary',
	typeName : Jsonix.Schema.XSD.qname('hexBinary'),
	charToQuartet : {},
	byteToDuplet : [],
	initialize : function() {
		Jsonix.Schema.XSD.AnySimpleType.prototype.initialize.apply(this);
		var charTableUpperCase = "0123456789ABCDEF";
		var charTableLowerCase = charTableUpperCase.toLowerCase();
		var i;
		for (i = 0; i < 16; i++) {
			this.charToQuartet[charTableUpperCase.charAt(i)] = i;
			if (i >= 0xA) {
				this.charToQuartet[charTableLowerCase.charAt(i)] = i;
			}
		}
		for (i = 0; i < 256; i++) {
			this.byteToDuplet[i] =
			//
			charTableUpperCase[i >> 4] + charTableUpperCase[i & 0xF];
		}
	},
	print : function(value) {
		Jsonix.Util.Ensure.ensureArray(value);
		return this.encode(value);
	},

	parse : function(text) {
		Jsonix.Util.Ensure.ensureString(text);
		return this.decode(text);
	},
	encode : function(uarray) {
		var output = "";
		for ( var i = 0; i < uarray.length; i++) {
			output = output + this.byteToDuplet[uarray[i] & 0xFF];
		}
		return output;
	},
	decode : function(text) {
		var input = text.replace(/[^A-Fa-f0-9]/g, "");
		// Round by two
		var length = input.length >> 1;
		var uarray = new Array(length);
		for ( var i = 0; i < length; i++) {
			var char0 = input.charAt(2 * i);
			var char1 = input.charAt(2 * i + 1);
			uarray[i] = this.charToQuartet[char0] << 4
					| this.charToQuartet[char1];
		}
		return uarray;
	},
	isInstance : function(value) {
		return Jsonix.Util.Type.isArray(value);
	},
	CLASS_NAME : 'Jsonix.Schema.XSD.HexBinary'
});
Jsonix.Schema.XSD.HexBinary.INSTANCE = new Jsonix.Schema.XSD.HexBinary();
Jsonix.Schema.XSD.HexBinary.INSTANCE.LIST = new Jsonix.Schema.XSD.List(
		Jsonix.Schema.XSD.HexBinary.INSTANCE);