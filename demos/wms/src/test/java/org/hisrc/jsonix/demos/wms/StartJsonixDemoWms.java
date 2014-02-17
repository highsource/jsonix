package org.hisrc.jsonix.demos.wms;

import net.disy.legato.testing.server.testing.AbstractJettyRunWebServerEnvironment;

public class StartJsonixDemoWms extends AbstractJettyRunWebServerEnvironment {

	@Override
	public String getPropertiesFileName() {
		return "src/main/webapp/WEB-INF/web.properties";
	}

}
