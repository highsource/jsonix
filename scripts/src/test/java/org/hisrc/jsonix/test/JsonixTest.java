package org.hisrc.jsonix.test;

import net.disy.legato.testing.script.AbstractJsUnitScriptTest;

import com.gargoylesoftware.htmlunit.BrowserVersion;

public class JsonixTest extends AbstractJsUnitScriptTest {

	@Override
	public BrowserVersion getBrowserVersion() {
		return BrowserVersion.FIREFOX_3;
	}

}
