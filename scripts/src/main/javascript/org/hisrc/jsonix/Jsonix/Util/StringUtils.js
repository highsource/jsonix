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

Jsonix.Util.StringUtils = {
	trim : (!!String.prototype.trim) ?
	function(str) {
		Jsonix.Util.Ensure.ensureString(str);
		return str.trim();
	} :
	function(str) {
		Jsonix.Util.Ensure.ensureString(str);
		return str.replace(/^\s\s*/, '').replace(/\s\s*$/, '');
	},
	/* isEmpty : function(str) {
		var wcm = Jsonix.Util.StringUtils.whitespaceCharactersMap;
		for (var index = 0; index < str.length; index++)
		{
			if (!wcm[str[index]])
			{
				return false;
			}
		}
		return true;
	}, */
	isEmpty : function(str) {
		var length = str.length;
		if (!length) {
			return true;
		}
		for (var index = 0; index < length; index++)
		{
			var c = str[index];
			if (c === ' ')
			{
				// skip
			}
			else if (c > '\u000D' && c < '\u0085')
			{
				return false;
			}
			else if (c < '\u00A0')
			{
				if (c < '\u0009')
				{
					return false;
				}
				else if (c > '\u0085')
				{
					return false;
				}
			}
			else if (c > '\u00A0')
			{
				if (c < '\u2028')
				{
					if (c < '\u180E')
					{
						if (c < '\u1680')
						{
							return false;
						}
						else if(c > '\u1680')
						{
							return false;
						}
					}
					else if (c > '\u180E')
					{
						if (c < '\u2000')
						{
							return false;
						}
						else if (c > '\u200A')
						{
							return false;
						}
					}
				}
				else if (c > '\u2029')
				{
					if (c < '\u205F')
					{
						if (c < '\u202F')
						{
							return false;
						}
						else if (c > '\u202F')
						{
							return false;
						}
					}
					else if (c > '\u205F')
					{
						if (c < '\u3000')
						{
							return false;
						}
						else if (c > '\u3000')
						{
							return false;
						}
					}
				}
			}
		}
		return true;
	},
	isNotBlank : function(str) {
		return Jsonix.Util.Type.isString(str) && !Jsonix.Util.StringUtils.isEmpty(str);
	},
	whitespaceCharacters: '\u0009\u000A\u000B\u000C\u000D \u0085\u00A0\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u2028\u2029\u202F\u205F\u3000',
	whitespaceCharactersMap: {
		'\u0009' : true,
		'\u000A' : true,
		'\u000B' : true,
		'\u000C' : true,
		'\u000D' : true,
		' ' : true,
		'\u0085' : true,
		'\u00A0' : true,
		'\u1680' : true,
		'\u180E' : true,
		'\u2000' : true,
		'\u2001' : true,
		'\u2002' : true,
		'\u2003' : true,
		'\u2004' : true,
		'\u2005' : true,
		'\u2006' : true,
		'\u2007' : true,
		'\u2008' : true,
		'\u2009' : true,
		'\u200A' : true,
		'\u2028' : true,
		'\u2029' : true,
		'\u202F' : true,
		'\u205F' : true,
		'\u3000' : true
	},
	splitBySeparatorChars : function(str, separatorChars) {
		Jsonix.Util.Ensure.ensureString(str);
		Jsonix.Util.Ensure.ensureString(separatorChars);
		var len = str.length;
		if (len === 0) {
			return [];
		}
		if (separatorChars.length === 1)
		{
			return str.split(separatorChars);
		}
		else
		{
			var list = [];
			var sizePlus1 = 1;
			var i = 0;
			var start = 0;
			var match = false;
			var lastMatch = false;
			var max = -1;
			var preserveAllTokens = false;
			// standard case
				while (i < len) {
						if (separatorChars.indexOf(str.charAt(i)) >= 0) {
								if (match || preserveAllTokens) {
										lastMatch = true;
										if (sizePlus1++ == max) {
												i = len;
												lastMatch = false;
										}
										list.push(str.substring(start, i));
										match = false;
								}
								start = ++i;
								continue;
						}
						lastMatch = false;
						match = true;
						i++;
				}
				if (match || (preserveAllTokens && lastMatch)) {
					list.push(str.substring(start, i));
			}
			return list;
		}
	}
};