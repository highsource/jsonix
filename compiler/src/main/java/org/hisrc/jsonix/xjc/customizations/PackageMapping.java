/**
 * Jsonix is a JavaScript library which allows you to convert between XML
 * and JavaScript object structures.
 *
 * Copyright (c) 2010 - 2014, Alexey Valikov, Highsource.org
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *
 * * Redistributions of source code must retain the above copyright notice, this
 *   list of conditions and the following disclaimer.
 *
 * * Redistributions in binary form must reproduce the above copyright notice, this
 *   list of conditions and the following disclaimer in the documentation and/or
 *   other materials provided with the distribution.
 *
 * * Neither the name of the copyright holder nor the names of its
 *   contributors may be used to endorse or promote products derived from
 *   this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR
 * ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON
 * ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

package org.hisrc.jsonix.xjc.customizations;

import javax.xml.bind.annotation.XmlAttribute;
import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement(name = "packageMapping")
public class PackageMapping {

	private String packageName;

	@XmlAttribute
	public String getPackageName() {
		return packageName;
	}

	public void setPackageName(String name) {
		this.packageName = name;
	}

	private String outputPackageName;

	@XmlAttribute
	public String getOutputPackageName() {
		return outputPackageName;
	}

	public void setOutputPackageName(String name) {
		this.outputPackageName = name;
	}

	private String spaceName;

	@XmlAttribute
	public String getSpaceName() {
		return spaceName;
	}

	public void setSpaceName(String space) {
		this.spaceName = space;
	}

	private String defaultElementNamespaceURI = null;

	@XmlAttribute
	public String getDefaultElementNamespaceURI() {
		return defaultElementNamespaceURI;
	}

	public void setDefaultElementNamespaceURI(String namespaceURI) {
		this.defaultElementNamespaceURI = namespaceURI;
	}

	private String defaultAttributeNamespaceURI = null;

	@XmlAttribute
	public String getDefaultAttributeNamespaceURI() {
		return defaultAttributeNamespaceURI;
	}

	public void setDefaultAttributeNamespaceURI(String namespaceURI) {
		this.defaultAttributeNamespaceURI = namespaceURI;
	}

	private String defaultPrefix;

	@XmlAttribute
	public String getDefaultPrefix() {
		return defaultPrefix;
	}

	public void setDefaultPrefix(String defaultPrefix) {
		this.defaultPrefix = defaultPrefix;
	}

	private String directory;

	@XmlAttribute
	public String getDirectory() {
		return directory;
	}

	public void setDirectory(String directory) {
		this.directory = directory;
	}

	private String fileName;

	@XmlAttribute
	public String getFileName() {
		return fileName;
	}

	public void setFileName(String file) {
		this.fileName = file;
	}

	@Deprecated
	private String declarationsFileName;

	@Deprecated
	@XmlAttribute
	public String getDeclarationsFileName() {
		return declarationsFileName;
	}

	@Deprecated
	public void setDeclarationsFileName(String declarationsFile) {
		this.declarationsFileName = declarationsFile;
	}

	@Deprecated
	private String structuresFileName;

	@Deprecated
	@XmlAttribute
	public String getStructuresFileName() {
		return structuresFileName;
	}

	@Deprecated
	public void setStructuresFileName(String structuresFile) {
		this.structuresFileName = structuresFile;
	}

}
