package org.hisrc.jsonix.xml.datatype.test;

import static org.junit.Assert.assertEquals;

import java.io.StringReader;

import javax.xml.bind.JAXBContext;
import javax.xml.bind.JAXBException;
import javax.xml.bind.Unmarshaller;
import javax.xml.datatype.DatatypeConfigurationException;
import javax.xml.datatype.DatatypeFactory;
import javax.xml.transform.stream.StreamSource;

import org.junit.Assert;
import org.junit.Test;

public class GTypesTest {

	// @formatter:off
	private static String xmlHead = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>";

	// @formatter:on

	private static <T> T unmarshal(Class<T> t, String xml) {
		JAXBContext jc;
		T genericType = null;
		try {
			jc = JAXBContext.newInstance(t);
			Unmarshaller u = jc.createUnmarshaller();
			StringBuffer xmlBuffer = new StringBuffer(xml);
			genericType = (T) u.unmarshal(new StreamSource(new StringReader(
					xmlBuffer.toString())));
		} catch (JAXBException e) {
			e.printStackTrace();
		}

		return genericType;
	}

	@Test
	public void init() {
		GTypesType dateType = null;
		String dateTypeXml;

		dateTypeXml = "<DateType day=\"---01+05:00\" month=\"--01+01:00\" year=\"0001+05:00\" yearMonth=\"1984-01-02:00\" monthDay=\"--02-01Z\"/> ";

		assertEquals(1, (unmarshal(GTypesType.class, /* xmlHead + */dateTypeXml)
				.getMonth().getMonth()));
		assertEquals(60, (unmarshal(GTypesType.class, /* xmlHead + */dateTypeXml)
				.getMonth().getTimezone()));

		dateType = unmarshal(GTypesType.class, /* xmlHead + */dateTypeXml);
		System.out.println(dateType.getMonth());
		System.out.println(dateType.getMonth().getTimezone());

		System.out.println(dateType.getMonth().toGregorianCalendar().getTime()
				.getMonth());
		System.out.println(dateType.getMonth().toGregorianCalendar().getTime()
				.getTimezoneOffset());
	}

	@Test
	public void checksGYear() throws DatatypeConfigurationException {
		DatatypeFactory datatypeFactory = DatatypeFactory.newInstance();

		Assert.assertEquals(101, datatypeFactory
				.newXMLGregorianCalendar("0101").getYear());
		Assert.assertEquals(-1234567,
				datatypeFactory.newXMLGregorianCalendar("-1234567").getYear());

		Assert.assertEquals(2013,
				datatypeFactory.newXMLGregorianCalendar("2013-05:00").getYear());
		Assert.assertEquals(-300,
				datatypeFactory.newXMLGregorianCalendar("2013-05:00")
						.getTimezone());

	}

	@Test
	public void checksGMonth() throws DatatypeConfigurationException {
		DatatypeFactory datatypeFactory = DatatypeFactory.newInstance();

		Assert.assertEquals(01, datatypeFactory.newXMLGregorianCalendar("--01")
				.getMonth());
		Assert.assertEquals(12,
				datatypeFactory.newXMLGregorianCalendar("--12-05:00")
						.getMonth());
		Assert.assertEquals(-300,
				datatypeFactory.newXMLGregorianCalendar("--12-05:00")
						.getTimezone());
	}

	@Test
	public void checksGDay() throws DatatypeConfigurationException {
		DatatypeFactory datatypeFactory = DatatypeFactory.newInstance();

		Assert.assertEquals(01, datatypeFactory
				.newXMLGregorianCalendar("---01").getDay());

		Assert.assertEquals(31, datatypeFactory
				.newXMLGregorianCalendar("---31").getDay());

		Assert.assertEquals(31,
				datatypeFactory.newXMLGregorianCalendar("---31-05:00").getDay());
		Assert.assertEquals(-300,
				datatypeFactory.newXMLGregorianCalendar("---31-05:00")
						.getTimezone());
	}

	@Test
	public void checksGYearMonth() throws DatatypeConfigurationException {
		DatatypeFactory datatypeFactory = DatatypeFactory.newInstance();

		Assert.assertEquals(-13,
				datatypeFactory.newXMLGregorianCalendar("-0013-01").getYear());
		Assert.assertEquals(2013,
				datatypeFactory.newXMLGregorianCalendar("2013-01").getYear());
		Assert.assertEquals(01,
				datatypeFactory.newXMLGregorianCalendar("2013-01").getMonth());

		Assert.assertEquals(12345,
				datatypeFactory.newXMLGregorianCalendar("12345-01").getYear());

		Assert.assertEquals(01,
				datatypeFactory.newXMLGregorianCalendar("12345-01").getMonth());

		Assert.assertEquals(-300,
				datatypeFactory.newXMLGregorianCalendar("2013-01-05:00")
						.getTimezone());
		Assert.assertEquals(0,
				datatypeFactory.newXMLGregorianCalendar("2013-01Z")
						.getTimezone());
	}

	public void checksGMonthDay() throws DatatypeConfigurationException {
		DatatypeFactory datatypeFactory = DatatypeFactory.newInstance();

		Assert.assertEquals(3,
				datatypeFactory.newXMLGregorianCalendar("--03-01").getMonth());
		Assert.assertEquals(1,
				datatypeFactory.newXMLGregorianCalendar("--03-01").getDay());
		Assert.assertEquals(-300,
				datatypeFactory.newXMLGregorianCalendar("--02-01-05:00")
						.getTimezone());
		Assert.assertEquals(0,
				datatypeFactory.newXMLGregorianCalendar("--03-01Z")
						.getTimezone());
		Assert.assertEquals(29,
				datatypeFactory.newXMLGregorianCalendar("--02-29").getDay());
		Assert.assertEquals(31,
				datatypeFactory.newXMLGregorianCalendar("--02-31").getDay());
	}

	public void checksDateTime() throws DatatypeConfigurationException {
		DatatypeFactory datatypeFactory = DatatypeFactory.newInstance();

		Assert.assertEquals(
				-300,
				datatypeFactory.newXMLGregorianCalendar(
						"2013-05-07T08:09:10-05:00").getTimezone());
		Assert.assertEquals(
				123456,
				datatypeFactory.newXMLGregorianCalendar(
						"123456-05-07T08:09:10-05:00").getYear());
	}
}
