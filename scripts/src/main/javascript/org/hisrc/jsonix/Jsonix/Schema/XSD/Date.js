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

Jsonix.Schema.XSD.Date = Jsonix.Class(Jsonix.Schema.XSD.Calendar, {
	name : 'Date',
	typeName : Jsonix.Schema.XSD.qname('date'),
	parse : function(value) {
		var calendar = this.parseDate(value);
		//		
		if (Jsonix.Util.NumberUtils.isInteger(calendar.timezone)) {
			var date = new Date();
			date.setFullYear(calendar.year);
			date.setMonth(calendar.month - 1);
			date.setDate(calendar.day);
			date.setHours(0);
			date.setMinutes(0);
			date.setSeconds(0);
			date.setMilliseconds(0);
			return new Date(date.getTime() - (60000 * date.getTimezoneOffset()) + (calendar.timezone * 60000));
		} else {
			var result = new Date();
			result.setFullYear(calendar.year);
			result.setMonth(calendar.month - 1);
			result.setDate(calendar.day);
			result.setHours(0);
			result.setMinutes(0);
			result.setSeconds(0);
			result.setMilliseconds(0);
			return result;
		}
	},
	print : function(value) {
		Jsonix.Util.Ensure.ensureDate(value);
		var localDate = new Date(value.getTime());
		localDate.setHours(0);
		localDate.setMinutes(0);
		localDate.setSeconds(0);
		localDate.setMilliseconds(0);

		var localTimezoneOffset = value.getTime() - localDate.getTime();
		if (localTimezoneOffset === 0) {
			return this.printDate(new Jsonix.XML.Calendar({
				year : value.getFullYear(),
				month : value.getMonth() + 1,
				day : value.getDate()
			}));
		} else {
			var timezoneOffset = localTimezoneOffset + (60000 * value.getTimezoneOffset());
			if (timezoneOffset <= 43200000) {
				return this.printDate(new Jsonix.XML.Calendar({
					year : value.getFullYear(),
					month : value.getMonth() + 1,
					day : value.getDate(),
					timezone : Math.floor(timezoneOffset / (60000))
				}));
			} else {
				var nextDay = new Date(value.getTime() + 86400000);
				return this.printDate(new Jsonix.XML.Calendar({
					year : nextDay.getFullYear(),
					month : nextDay.getMonth() + 1,
					day : nextDay.getDate(),
					timezone : (Math.floor(timezoneOffset / (60000)) - 1440)
				}));
			}
		}
	},
	isInstance : function(value) {
		return Jsonix.Util.Type.isDate(value);
	},
	CLASS_NAME : 'Jsonix.Schema.XSD.Date'
});
Jsonix.Schema.XSD.Date.INSTANCE = new Jsonix.Schema.XSD.Date();
Jsonix.Schema.XSD.Date.INSTANCE.LIST = new Jsonix.Schema.XSD.List(Jsonix.Schema.XSD.Date.INSTANCE);