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

Jsonix.Schema.XSD.Calendar = Jsonix
		.Class(
				Jsonix.Schema.XSD.AnySimpleType,
				{
					name : 'Calendar',
					typeName : Jsonix.Schema.XSD.qname('calendar'),
					parse : function(text) {
						Jsonix.Util.Ensure.ensureString(text);
						var negative = (text.charAt(0) === '-');
						var sign = negative ? -1 : 1;
						var data = negative ? text.substring(1) : text;

						// Detect pattern

						var result;
						if (data.length >= 19 && data.charAt(4) === '-' && data.charAt(7) === '-' && data.charAt(10) === 'T' && data.charAt(13) === ':' && data.charAt(16) === ':') {
							return this.parseDateTime(text);
						} else if (data.length >= 10 && data.charAt(4) === '-' && data.charAt(7) === '-') {
							return this.parseDate(text);
						} else if (data.length >= 8 && data.charAt(2) === ':' && data.charAt(5) === ':') {
							return this.parseTime(text);
						} else {
							throw new Error('Value [' + text + '] does not match dateTime, date or time patterns.');
						}
					},
					parseDateTime : function(text) {
						Jsonix.Util.Ensure.ensureString(text);
						var negative = (text.charAt(0) === '-');
						var sign = negative ? -1 : 1;

						var dateTimeWithTimeZone = negative ? text.substring(1) : text;

						if (dateTimeWithTimeZone.length < 19 || dateTimeWithTimeZone.charAt(4) !== '-' || dateTimeWithTimeZone.charAt(7) !== '-' || dateTimeWithTimeZone.charAt(10) !== 'T' || dateTimeWithTimeZone.charAt(13) !== ':' || dateTimeWithTimeZone.charAt(16) !== ':') {
							throw new Error('Date time string [' + dateTimeWithTimeZone + '] must be a string in format [\'-\'? yyyy \'-\' mm \'-\' dd \'T\' hh \':\' mm \':\' ss (\'.\' s+)? (zzzzzz)?].');
						}

						var timeZoneIndex;
						var plusIndex = dateTimeWithTimeZone.indexOf('+', 19);
						if (plusIndex >= 0) {
							timeZoneIndex = plusIndex;
						} else {
							var minusIndex = dateTimeWithTimeZone.indexOf('-', 19);
							if (minusIndex >= 0) {
								timeZoneIndex = minusIndex;
							} else {
								var zIndex = dateTimeWithTimeZone.indexOf('Z', 19);
								if (zIndex >= 0) {
									timeZoneIndex = zIndex;
								} else {
									timeZoneIndex = dateTimeWithTimeZone.length;
								}
							}
						}

						var validTimeZoneIndex = timeZoneIndex > 0 && timeZoneIndex < dateTimeWithTimeZone.length;

						var dateString = dateTimeWithTimeZone.substring(0, 10);
						var timeString = validTimeZoneIndex ? dateTimeWithTimeZone.substring(11, timeZoneIndex) : dateTimeWithTimeZone.substring(11);
						var timeZoneString = validTimeZoneIndex ? dateTimeWithTimeZone.substring(timeZoneIndex) : '';
						var date = this.parseDateString(dateString);
						var time = this.parseTimeString(timeString);
						var timezone = this.parseTimeZoneString(timeZoneString);

						return Jsonix.XML.Calendar.fromObject({
							year : sign * date.year,
							month : date.month,
							day : date.day,
							hour : time.hour,
							minute : time.minute,
							second : time.second,
							fractionalSecond : time.fractionalSecond,
							timezone : timezone
						});

					},
					parseDate : function(text) {
						Jsonix.Util.Ensure.ensureString(text);

						var negative = (text.charAt(0) === '-');
						var sign = negative ? -1 : 1;

						var dateWithTimeZone = negative ? text.substring(1) : text;

						var timeZoneIndex;
						var plusIndex = dateWithTimeZone.indexOf('+', 10);
						if (plusIndex >= 0) {
							timeZoneIndex = plusIndex;
						} else {
							var minusIndex = dateWithTimeZone.indexOf('-', 10);
							if (minusIndex >= 0) {
								timeZoneIndex = minusIndex;
							} else {
								var zIndex = dateWithTimeZone.indexOf('Z', 10);
								if (zIndex >= 0) {
									timeZoneIndex = zIndex;
								} else {
									timeZoneIndex = dateWithTimeZone.length;
								}
							}
						}
						var validTimeZoneIndex = timeZoneIndex > 0 && timeZoneIndex < dateWithTimeZone.length;
						var dateString = validTimeZoneIndex ? dateWithTimeZone.substring(0, timeZoneIndex) : dateWithTimeZone;

						var date = this.parseDateString(dateString);
						var timeZoneString = validTimeZoneIndex ? text.substring(timeZoneIndex) : '';
						var timezone = this.parseTimeZoneString(timeZoneString);

						return Jsonix.XML.Calendar.fromObject({
							year : sign * date.year,
							month : date.month,
							day : date.day,
							timezone : timezone
						});

					},
					parseTime : function(text) {
						Jsonix.Util.Ensure.ensureString(text);
						var timeZoneIndex;
						var plusIndex = text.indexOf('+', 7);
						if (plusIndex >= 0) {
							timeZoneIndex = plusIndex;
						} else {
							var minusIndex = text.indexOf('-', 7);
							if (minusIndex >= 0) {
								timeZoneIndex = minusIndex;
							} else {
								var zIndex = text.indexOf('Z', 7);
								if (zIndex >= 0) {
									timeZoneIndex = zIndex;
								} else {
									timeZoneIndex = text.length;
								}
							}
						}

						var validTimeZoneIndex = timeZoneIndex > 0 && timeZoneIndex < text.length;
						var timeString = validTimeZoneIndex ? text.substring(0, timeZoneIndex) : text;

						var time = this.parseTimeString(timeString);
						var timeZoneString = validTimeZoneIndex ? text.substring(timeZoneIndex) : '';
						var timezone = this.parseTimeZoneString(timeZoneString);

						return Jsonix.XML.Calendar.fromObject({
							hour : time.hour,
							minute : time.minute,
							second : time.second,
							fractionalSecond : time.fractionalSecond,
							timezone : timezone
						});

					},
					parseDateString : function(text) {
						Jsonix.Util.Ensure.ensureString(text);
						if (text.length !== 10) {
							throw new Error('Date string [' + text + '] must be 10 characters long.');
						}

						if (text.charAt(4) !== '-' || text.charAt(7) !== '-') {
							throw new Error('Date string [' + text + '] must be a string in format [yyyy \'-\' mm \'-\' ss ].');
						}

						var year = this.parseYear(text.substring(0, 4));
						var month = this.parseMonth(text.substring(5, 7));
						var day = this.parseDay(text.substring(8, 10));

						return {
							year : year,
							month : month,
							day : day
						};
					},
					parseTimeString : function(timeString) {
						Jsonix.Util.Ensure.ensureString(timeString);
						if (timeString.length < 8 || timeString.charAt(2) !== ':' || timeString.charAt(5) !== ':') {
							throw new Error('Time string [' + timeString + '] must be a string in format [hh \':\' mm \':\' ss (\'.\' s+)?].');
						}
						var hourString = timeString.substring(0, 2);
						var minuteString = timeString.substring(3, 5);
						var secondString = timeString.substring(6, 8);
						var fractionalSecondString = timeString.length >= 9 ? timeString.substring(8) : '';
						var hour = this.parseHour(hourString);
						var minute = this.parseHour(minuteString);
						var second = this.parseSecond(secondString);
						var fractionalSecond = this.parseFractionalSecond(fractionalSecondString);
						return {
							hour : hour,
							minute : minute,
							second : second,
							fractionalSecond : fractionalSecond
						};

					},
					parseTimeZoneString : function(text) {
						// (('+' | '-') hh ':' mm) | 'Z'
						Jsonix.Util.Ensure.ensureString(text);
						if (text === '') {
							return NaN;
						} else if (text === 'Z') {
							return 0;
						} else {
							if (text.length !== 6) {
								throw new Error('Time zone must be an empty string, \'Z\' or a string in format [(\'+\' | \'-\') hh \':\' mm].');
							}
							var signString = text.charAt(0);
							var sign;
							if (signString === '+') {
								sign = 1;
							} else if (signString === '-') {
								sign = -1;
							} else {
								throw new Error('First character of the time zone [' + text + '] must be \'+\' or \'-\'.');
							}
							var hour = this.parseHour(text.substring(1, 3));
							var minute = this.parseMinute(text.substring(4, 6));
							return -1 * sign * (hour * 60 + minute);
						}

					},
					parseYear : function(text) {
						Jsonix.Util.Ensure.ensureString(text);
						if (text.length !== 4) {
							throw new Error('Year [' + text + '] must be a four-digit number.');
						}
						var year = Number(text);
						// TODO message
						Jsonix.Util.Ensure.ensureInteger(year);
						return year;
					},
					parseMonth : function(text) {
						Jsonix.Util.Ensure.ensureString(text);
						if (text.length !== 2) {
							throw new Error('Month [' + text + '] must be a two-digit number.');
						}
						var month = Number(text);
						// TODO message
						Jsonix.Util.Ensure.ensureInteger(month);
						return month;
					},
					parseDay : function(text) {
						Jsonix.Util.Ensure.ensureString(text);
						if (text.length !== 2) {
							throw new Error('Day [' + text + '] must be a two-digit number.');
						}
						var day = Number(text);
						// TODO message
						Jsonix.Util.Ensure.ensureInteger(day);
						return day;
					},
					parseHour : function(text) {
						Jsonix.Util.Ensure.ensureString(text);
						if (text.length !== 2) {
							throw new Error('Hour [' + text + '] must be a two-digit number.');
						}
						var hour = Number(text);
						// TODO message
						Jsonix.Util.Ensure.ensureInteger(hour);
						return hour;
					},
					parseMinute : function(text) {
						Jsonix.Util.Ensure.ensureString(text);
						if (text.length !== 2) {
							throw new Error('Minute [' + text + '] must be a two-digit number.');
						}
						var minute = Number(text);
						// TODO message
						Jsonix.Util.Ensure.ensureInteger(minute);
						return minute;
					},
					parseSecond : function(text) {
						Jsonix.Util.Ensure.ensureString(text);
						if (text.length !== 2) {
							throw new Error('Second [' + text + '] must be a two-digit number.');
						}
						var second = Number(text);
						// TODO message
						Jsonix.Util.Ensure.ensureNumber(second);
						return second;
					},
					parseFractionalSecond : function(text) {
						Jsonix.Util.Ensure.ensureString(text);
						if (text === '') {
							return 0;
						} else {
							var fractionalSecond = Number(text);
							// TODO message
							Jsonix.Util.Ensure.ensureNumber(fractionalSecond);
							return fractionalSecond;
						}
					},
					print : function(value) {
						if (Jsonix.Util.Type.isString(value)) {
							return value;
						}
						Jsonix.Util.Ensure.ensureObject(value);
						if (Jsonix.Util.NumberUtils.isInteger(value.year) && Jsonix.Util.NumberUtils.isInteger(value.month) && Jsonix.Util.NumberUtils.isInteger(value.day) && Jsonix.Util.NumberUtils.isInteger(value.hour) && Jsonix.Util.NumberUtils.isInteger(value.minute) && Jsonix.Util.NumberUtils
								.isInteger(value.second)) {
							return this.printDateTime(value);
						} else if (Jsonix.Util.NumberUtils.isInteger(value.year) && Jsonix.Util.NumberUtils.isInteger(value.month) && Jsonix.Util.NumberUtils.isInteger(value.day)) {
							return this.printDate(value);
						} else if (Jsonix.Util.NumberUtils.isInteger(value.hour) && Jsonix.Util.NumberUtils.isInteger(value.minute) && Jsonix.Util.NumberUtils.isInteger(value.second)) {
							return this.printTime(value);
						} else {
							throw new Error('Value [' + value + '] is not recognized as dateTime, date or time.');
						}
					},
					printDateTime : function(value) {
						Jsonix.Util.Ensure.ensureObject(value);
						Jsonix.Util.Ensure.ensureInteger(value.year);
						Jsonix.Util.Ensure.ensureInteger(value.month);
						Jsonix.Util.Ensure.ensureInteger(value.day);
						Jsonix.Util.Ensure.ensureInteger(value.hour);
						Jsonix.Util.Ensure.ensureInteger(value.minute);
						Jsonix.Util.Ensure.ensureNumber(value.second);
						if (Jsonix.Util.Type.exists(value.fractionalString)) {
							Jsonix.Util.Ensure.ensureNumber(value.fractionalString);
						}
						if (Jsonix.Util.Type.exists(value.timezone) && !Jsonix.Util.Type.isNaN(value.timezone)) {
							Jsonix.Util.Ensure.ensureInteger(value.timezone);
						}
						var result = this.printDateString(value);
						result = result + 'T';
						result = result + this.printTimeString(value);
						if (Jsonix.Util.Type.exists(value.timezone)) {
							result = result + this.printTimeZoneString(value.timezone);
						}
						return result;
					},
					printDate : function(value) {
						Jsonix.Util.Ensure.ensureObject(value);
						Jsonix.Util.Ensure.ensureNumber(value.year);
						Jsonix.Util.Ensure.ensureNumber(value.month);
						Jsonix.Util.Ensure.ensureNumber(value.day);
						if (Jsonix.Util.Type.exists(value.timezone) && !Jsonix.Util.Type.isNaN(value.timezone)) {
							Jsonix.Util.Ensure.ensureInteger(value.timezone);
						}
						var result = this.printDateString(value);
						if (Jsonix.Util.Type.exists(value.timezone)) {
							result = result + this.printTimeZoneString(value.timezone);
						}
						return result;
					},
					printTime : function(value) {
						Jsonix.Util.Ensure.ensureObject(value);
						Jsonix.Util.Ensure.ensureNumber(value.hour);
						Jsonix.Util.Ensure.ensureNumber(value.minute);
						Jsonix.Util.Ensure.ensureNumber(value.second);
						if (Jsonix.Util.Type.exists(value.fractionalString)) {
							Jsonix.Util.Ensure.ensureNumber(value.fractionalString);
						}
						if (Jsonix.Util.Type.exists(value.timezone) && !Jsonix.Util.Type.isNaN(value.timezone)) {
							Jsonix.Util.Ensure.ensureInteger(value.timezone);
						}

						var result = this.printTimeString(value);
						if (Jsonix.Util.Type.exists(value.timezone)) {
							result = result + this.printTimeZoneString(value.timezone);
						}
						return result;
					},
					printDateString : function(value) {
						Jsonix.Util.Ensure.ensureObject(value);
						Jsonix.Util.Ensure.ensureInteger(value.year);
						Jsonix.Util.Ensure.ensureInteger(value.month);
						Jsonix.Util.Ensure.ensureInteger(value.day);
						return (value.year < 0 ? ('-' + this.printYear(-value.year)) : this.printYear(value.year)) + '-' + this.printMonth(value.month) + '-' + this.printDay(value.day);
					},
					printTimeString : function(value) {
						Jsonix.Util.Ensure.ensureObject(value);
						Jsonix.Util.Ensure.ensureInteger(value.hour);
						Jsonix.Util.Ensure.ensureInteger(value.minute);
						Jsonix.Util.Ensure.ensureInteger(value.second);
						if (Jsonix.Util.Type.exists(value.fractionalSecond)) {
							Jsonix.Util.Ensure.ensureNumber(value.fractionalSecond);
						}
						var result = this.printHour(value.hour);
						result = result + ':';
						result = result + this.printMinute(value.minute);
						result = result + ':';
						result = result + this.printSecond(value.second);
						if (Jsonix.Util.Type.exists(value.fractionalSecond)) {
							result = result + this.printFractionalSecond(value.fractionalSecond);
						}
						return result;
					},
					printTimeZoneString : function(value) {
						if (!Jsonix.Util.Type.exists(value) || Jsonix.Util.Type.isNaN(value)) {
							return '';
						} else {
							Jsonix.Util.Ensure.ensureInteger(value);

							var sign = value < 0 ? -1 : (value > 0 ? 1 : 0);
							var data = value * sign;
							var minute = data % 60;
							var hour = Math.floor(data / 60);

							var result;
							if (sign === 0) {
								return 'Z';
							} else {
								if (sign > 0) {
									result = '-';
								} else if (sign < 0) {
									result = '+';
								}
								result = result + this.printHour(hour);
								result = result + ':';
								result = result + this.printMinute(minute);
								return result;
							}
						}
					},
					printYear : function(value) {
						return this.printInteger(value, 4);
					},
					printMonth : function(value) {
						return this.printInteger(value, 2);
					},
					printDay : function(value) {
						return this.printInteger(value, 2);
					},
					printHour : function(value) {
						return this.printInteger(value, 2);
					},
					printMinute : function(value) {
						return this.printInteger(value, 2);
					},
					printSecond : function(value) {
						return this.printInteger(value, 2);
					},
					printFractionalSecond : function(value) {
						Jsonix.Util.Ensure.ensureNumber(value);
						if (value < 0 || value >= 1) {
							throw new Error('Fractional second [' + value + '] must be between 0 and 1.');
						} else if (value === 0) {
							return '';
						} else {
							var string = String(value);
							var dotIndex = string.indexOf('.');
							if (dotIndex < 0) {
								return '';
							} else {
								return string.substring(dotIndex);
							}
						}
					},
					printInteger : function(value, length) {
						Jsonix.Util.Ensure.ensureInteger(value);
						Jsonix.Util.Ensure.ensureInteger(length);
						if (length <= 0) {
							throw new Error('Length [' + value + '] must be positive.');
						}
						if (value < 0) {
							throw new Error('Value [' + value + '] must not be negative.');
						}
						if (value >= Math.pow(10, length)) {
							throw new Error('Value [' + value + '] must be less than [' + Math.pow(10, length) + '].');
						}
						var result = String(value);
						for ( var i = result.length; i < length; i++) {
							result = '0' + result;
						}
						return result;
					},
					isInstance : function(value) {
						return Jsonix.Util.Type.isObject(value) && ((Jsonix.Util.NumberUtils.isInteger(value.year) && Jsonix.Util.NumberUtils.isInteger(value.month) && Jsonix.Util.NumberUtils.isInteger(value.day)) || (Jsonix.Util.NumberUtils.isInteger(value.hour) && Jsonix.Util.NumberUtils.isInteger(value.minute) && Jsonix.Util.NumberUtils
								.isInteger(value.second)));
					},
					CLASS_NAME : 'Jsonix.Schema.XSD.Calendar'
				});
Jsonix.Schema.XSD.Calendar.INSTANCE = new Jsonix.Schema.XSD.Calendar();
Jsonix.Schema.XSD.Calendar.INSTANCE.LIST = new Jsonix.Schema.XSD.List(Jsonix.Schema.XSD.Calendar.INSTANCE);