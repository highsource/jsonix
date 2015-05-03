package org.hisrc.jsonix.xml.datatype.test;

import static org.junit.Assert.assertEquals;

import java.io.StringReader;

import javax.xml.bind.JAXBContext;
import javax.xml.bind.JAXBException;
import javax.xml.bind.Unmarshaller;
import javax.xml.transform.stream.StreamSource;

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
}
