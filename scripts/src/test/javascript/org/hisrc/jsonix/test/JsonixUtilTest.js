/*
 * Jsonix is a JavaScript library which allows you to convert between XML
 * and JavaScript object structures.
 *
 * Copyright (c) 2010 - 2014, Alexey Valikov, Highsource.org
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *     * Redistributions of source code must retain the above copyright
 *       notice, this list of conditions and the following disclaimer.
 *     * Redistributions in binary form must reproduce the above copyright
 *       notice, this list of conditions and the following disclaimer in the
 *       documentation and/or other materials provided with the distribution.
 *     * Neither the name of the Alexey Valikov nor the
 *       names of contributors may be used to endorse or promote products
 *       derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL ALEXEY VALIKOV BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

function testUtilType() {
	assertTrue(Jsonix.Util.Type.isString('abc'));
	assertFalse(Jsonix.Util.Type.isString(1));
	assertFalse(Jsonix.Util.Type.isString(null));
	assertFalse(Jsonix.Util.Type.isString(undefined));
	//
	assertTrue(Jsonix.Util.Type.isBoolean(true));
	assertTrue(Jsonix.Util.Type.isBoolean(true));
	assertFalse(Jsonix.Util.Type.isBoolean('true'));
	//
	assertTrue(Jsonix.Util.Type.isNumber(0));
	assertTrue(Jsonix.Util.Type.isNumber(1.2));
	assertFalse(Jsonix.Util.Type.isNumber(Number('1..2')));
	assertFalse(Jsonix.Util.Type.isNumber('1.2'));

	assertTrue(Jsonix.Util.Type.isArray([]));
	assertTrue(Jsonix.Util.Type.isArray([0]));
	assertFalse(Jsonix.Util.Type.isArray(0));
	
	assertTrue(Jsonix.Util.Type.isNumberOrNaN(Number.NaN));
	assertTrue(Jsonix.Util.Type.isNaN(Number.NaN));
	assertFalse(Jsonix.Util.Type.isNumber(Number.NaN));
}
function testUtilStringUtils() {
	assertEquals('a b c', Jsonix.Util.StringUtils.trim('  a b c  '));
	assertTrue(Jsonix.Util.StringUtils.isEmpty('    '));
	assertTrue(Jsonix.Util.StringUtils.isEmpty(Jsonix.Util.StringUtils.whitespaceCharacters));
	
}