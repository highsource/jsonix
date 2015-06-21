package org.hisrc.jsonix.xml.bind.test;

import java.math.BigDecimal;
import java.util.Calendar;
import java.util.Date;
import java.util.GregorianCalendar;

import javax.xml.bind.DatatypeConverter;
import javax.xml.datatype.DatatypeConfigurationException;
import javax.xml.datatype.DatatypeFactory;
import javax.xml.datatype.XMLGregorianCalendar;

import org.junit.Assert;
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
	public void factionalSeconds() {

		Assert.assertEquals(new BigDecimal("0.1"), DATATYPE_FACTORY
				.newXMLGregorianCalendar("1970-01-01T00:00:00.1")
				.getFractionalSecond());
		Assert.assertEquals(new BigDecimal("0.12"), DATATYPE_FACTORY
				.newXMLGregorianCalendar("1970-01-01T00:00:00.12")
				.getFractionalSecond());
		Assert.assertEquals(new BigDecimal("0.123"), DATATYPE_FACTORY
				.newXMLGregorianCalendar("1970-01-01T00:00:00.123")
				.getFractionalSecond());
		Assert.assertEquals(new BigDecimal("0.1234"), DATATYPE_FACTORY
				.newXMLGregorianCalendar("1970-01-01T00:00:00.1234")
				.getFractionalSecond());
		Assert.assertEquals(new BigDecimal("0.12345"), DATATYPE_FACTORY
				.newXMLGregorianCalendar("1970-01-01T00:00:00.12345")
				.getFractionalSecond());
	}

	@Test
	public void offset() {
		System.out.println(DATATYPE_FACTORY
				.newXMLGregorianCalendar("1970-01-01T00:00:00")
				.toGregorianCalendar().getTime().getTime());

		System.out.println(DATATYPE_FACTORY
				.newXMLGregorianCalendar("1970-01-01T00:00:00Z")
				.toGregorianCalendar().getTime().getTime());

		final Date date = new Date(70, 0, 1, 10, 0, 0);

		System.out.println("Timezone offset:" + date.getTimezoneOffset());
		System.out.println(date.getTime());

		System.out.println(DATATYPE_FACTORY
				.newXMLGregorianCalendar("1970-01-01T00:00:00")
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

		{
			final Date d0 = DATATYPE_FACTORY
					.newXMLGregorianCalendar("1970-01-01T00:00:00")
					.toGregorianCalendar().getTime();

			GregorianCalendar c = new GregorianCalendar();
			c.setTime(d0);
			XMLGregorianCalendar date2 = DATATYPE_FACTORY
					.newXMLGregorianCalendar(c);
			System.out.println(date2.toXMLFormat());
			System.out.println(d0.getTime());
		}
		{
			final GregorianCalendar g0 = DATATYPE_FACTORY
					.newXMLGregorianCalendar("1970-01-01T00:00:00")
					.toGregorianCalendar();
			System.out.println(DatatypeConverter.printDateTime(g0));
			System.out.println(g0.getTimeInMillis());
			System.out.println(g0.getTime().getTime());
		}
		{
			final Calendar c0 = DatatypeConverter
					.parseDateTime("1970-01-01T00:00:00");
			System.out.println(DatatypeConverter.printDateTime(c0));
			System.out.println(c0.getTimeInMillis());
			System.out.println(c0.getTime().getTime());
		}
		{
			final XMLGregorianCalendar g = DATATYPE_FACTORY
					.newXMLGregorianCalendar("1970-01-01T00:00:00");
			System.out.println(g.toXMLFormat());
			System.out.println(g.toGregorianCalendar().getTimeInMillis());
			System.out.println(g.toGregorianCalendar().getTime().getTime());
		}

	}
}
