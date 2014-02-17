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

Jsonix.Util.Ensure = {
	ensureBoolean : function(value) {
		if (!Jsonix.Util.Type.isBoolean(value)) {
			throw 'Argument [' + value + '] must be a boolean.';
		}
	},
	ensureString : function(value) {
		if (!Jsonix.Util.Type.isString(value)) {
			throw 'Argument [' + value + '] must be a string.';
		}
	},
	ensureNumber : function(value) {
		if (!Jsonix.Util.Type.isNumber(value)) {
			throw 'Argument [' + value + '] must be a number.';
		}
	},
	ensureNumberOrNaN : function(value) {
		if (!Jsonix.Util.Type.isNumberOrNaN(value)) {
			throw 'Argument [' + value + '] must be a number or NaN.';
		}
	},
	ensureInteger : function(value) {
		if (!Jsonix.Util.Type.isNumber(value)) {
			throw 'Argument must be an integer, but it is not a number.';
		} else if (!Jsonix.Util.NumberUtils.isInteger(value)) {
			throw 'Argument [' + value + '] must be an integer.';
		}
	},
	ensureDate : function(value) {
		if (!(value instanceof Date)) {
			throw 'Argument [' + value + '] must be a date.';
		}
	},
	ensureObject : function(value) {
		if (!Jsonix.Util.Type.isObject(value)) {
			throw 'Argument [' + value + '] must be an object.';
		}
	},
	ensureArray : function(value) {
		if (!Jsonix.Util.Type.isArray(value)) {
			throw 'Argument [' + value + '] must be an array.';
		}
	},
	ensureFunction : function(value) {
		if (!Jsonix.Util.Type.isFunction(value)) {
			throw 'Argument [' + value + '] must be a function.';
		}
	},
	ensureExists : function(value) {
		if (!Jsonix.Util.Type.exists(value)) {
			throw 'Argument [' + value + '] does not exist.';
		}
	}
};