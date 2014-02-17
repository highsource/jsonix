//package org.hisrc.jsonix.tests.selene;
//
//import org.hisrc.hifaces20.testing.webappenvironment.testing.testng.AbstractWebAppEnvironmentTestNGTest;
//import org.junit.AfterClass;
//import org.junit.Assert;
//import org.junit.BeforeClass;
//import org.junit.Test;
//import org.junit.runners.Parameterized.Parameters;
//import org.openqa.selenium.server.RemoteControlConfiguration;
//import org.openqa.selenium.server.SeleniumServer;
//
//import com.thoughtworks.selenium.DefaultSelenium;
//import com.thoughtworks.selenium.Selenium;
//
//public class HelloSeleniumIT extends AbstractWebAppEnvironmentTestNGTest {
//
//	protected SeleniumServer seleniumServer;
//	protected Selenium selenium;
//
//	@BeforeClass(groups = "org.openqa.selenium.server.SeleniumServer")
//	@Parameters( { "org.openqa.selenium.server.SeleniumServer.shouldBeStarted",
//			"org.openqa.selenium.server.SeleniumServer.port" })
//	public void startSeleniumServer(@Optional("true") boolean shouldBeStarted,
//			@Optional("4444") int port) throws Exception {
//		if (shouldBeStarted) {
//
//			final RemoteControlConfiguration remoteControlConfiguration = new RemoteControlConfiguration();
//			remoteControlConfiguration.setPort(port);
//			System
//					.setProperty(
//							"org.openqa.jetty.http.HttpRequest.maxFormContentSize",
//							"0");
//			seleniumServer = new SeleniumServer(remoteControlConfiguration);
//			seleniumServer.boot();
//		}
//	}
//
//	@AfterClass(groups = "org.openqa.selenium.server.SeleniumServer")
//	@Parameters( { "org.openqa.selenium.server.SeleniumServer.shouldBeStarted" })
//	public void stopSeleniumServer(@Optional("true") boolean shouldBeStarted) {
//		if (shouldBeStarted) {
//			seleniumServer.stop();
//		}
//
//	}
//
//	@BeforeClass(groups = "com.thoughtworks.selenium.Selenium", dependsOnGroups = {
//			"org.hisrc.hifaces20.testing.webappenvironment.WebAppEnvironment",
//			"org.openqa.selenium.server.SeleniumServer" }, alwaysRun = true)
//	@Parameters( { "com.thoughtworks.selenium.Selenium.serverHost",
//			"com.thoughtworks.selenium.Selenium.serverPort",
//			"com.thoughtworks.selenium.Selenium.browserStartCommand" })
//	public void startSelenium(@Optional("127.0.0.1") String serverHost,
//			@Optional("4444") int serverPort,
//			@Optional("*firefox") String browserStartCommand) {
//
//		final String baseUrl = getWebAppEnvironment().getBaseUrl() + "/";
//		selenium = new DefaultSelenium(serverHost, serverPort,
//				browserStartCommand, baseUrl);
//		selenium.start();
//	}
//
//	@AfterClass(groups = "com.thoughtworks.selenium.Selenium")
//	public void stopSelenium() {
//		selenium.stop();
//	}
//
//	@Test(groups = "com.thoughtworks.selenium.Selenium")
//	public void checkHelloSeleniumPresent() {
//		selenium.open("/" + getWebAppEnvironment().getContextPath() + "/");
//		Assert.assertTrue(selenium.isTextPresent("Hello, Selenium!"));
//
//	}
//
//}
//

