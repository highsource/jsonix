package org.hisrc.jsonix.xml.datatype.test;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlAttribute;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlSchemaType;
import javax.xml.bind.annotation.XmlType;
import javax.xml.datatype.XMLGregorianCalendar;

@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "")
@XmlRootElement(name = "DateType")
public class GTypesType {

	@XmlAttribute(name = "day")
	@XmlSchemaType(name = "gDay")
	protected XMLGregorianCalendar day;
	@XmlAttribute(name = "month")
	@XmlSchemaType(name = "gMonth")
	protected XMLGregorianCalendar month;
	@XmlAttribute(name = "year")
	@XmlSchemaType(name = "gYear")
	protected XMLGregorianCalendar year;
	@XmlAttribute(name = "yearMonth")
	@XmlSchemaType(name = "gYearMonth")
	protected XMLGregorianCalendar yearMonth;
	@XmlAttribute(name = "monthDay")
	@XmlSchemaType(name = "gMonthDay")
	protected XMLGregorianCalendar monthDay;

	public XMLGregorianCalendar getDay() {
		return day;
	}

	public void setDay(XMLGregorianCalendar value) {
		this.day = value;
	}

	public XMLGregorianCalendar getMonth() {
		return month;
	}

	public void setMonth(XMLGregorianCalendar value) {
		this.month = value;
	}

	public XMLGregorianCalendar getYear() {
		return year;
	}

	public void setYear(XMLGregorianCalendar value) {
		this.year = value;
	}

	public XMLGregorianCalendar getYearMonth() {
		return yearMonth;
	}

	public void setYearMonth(XMLGregorianCalendar value) {
		this.yearMonth = value;
	}

	public XMLGregorianCalendar getMonthDay() {
		return monthDay;
	}

	public void setMonthDay(XMLGregorianCalendar value) {
		this.monthDay = value;
	}

}
