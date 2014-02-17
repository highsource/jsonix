/**
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

package org.hisrc.jsonix.test;

import java.util.Date;

import javax.xml.datatype.DatatypeConfigurationException;
import javax.xml.datatype.DatatypeFactory;

import org.junit.Test;

public class CalendarTest {

	private static DatatypeFactory DATATYPE_FACTORY;

	static {
		try {
			DATATYPE_FACTORY = DatatypeFactory.newInstance();
		} catch (DatatypeConfigurationException dcex) {
			throw new ExceptionInInitializerError(dcex);
		}
	}

	@Test
	public void offset() {
		final Date date = new Date(70, 0, 1, 10, 0, 0);
		System.out.println(date.getTimezoneOffset());
		System.out.println(date.getTime());

		System.out.println(DATATYPE_FACTORY
				.newXMLGregorianCalendar("1970-01-01T10:00:00")
				.toGregorianCalendar().getTime().getTime());
		System.out.println(DATATYPE_FACTORY
				.newXMLGregorianCalendar("1970-01-01T10:00:00Z")
				.toGregorianCalendar().getTime().getTime());
		System.out.println(DATATYPE_FACTORY
				.newXMLGregorianCalendar("1970-01-01T10:00:00+01:00")
				.toGregorianCalendar().getTime().getTime());
		System.out.println(DATATYPE_FACTORY
				.newXMLGregorianCalendar("00:00:00.5+10:00")
				.toGregorianCalendar().getTime().getTime());

	}

}
