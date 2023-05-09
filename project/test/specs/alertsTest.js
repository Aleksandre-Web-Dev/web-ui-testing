import { assert } from "chai";
import DriverUtils from "../../../framework/utilities/driverUtils.js";
import AlertsPage from "../pageObjects/alertPage.js";
import urlConfig from "../../configurations/urlConfig.json" assert { type: "json" };
import testData from "../../testData/combined.json" assert { type: "json" };

describe("Testing Alerts", async () => {
  before("Navigate to alerts page", async () => {
    await DriverUtils.navigateTo(urlConfig.urls.alerts_page);
    assert.isTrue(
      await AlertsPage.isPageDisplayed(),
      "Alerts Page did not open"
    );
  });

  it("should verify alert functionality", async () => {
    await AlertsPage.clickOnOpenAlertButton(testData.alerts.alert.type);
    assert.equal(
      await DriverUtils.getAlertText(),
      testData.alerts.alert.text,
      "Alert text does not match expected text"
    );
    await DriverUtils.acceptAlert();
    assert.equal(
      await AlertsPage.getResultText(),
      testData.alerts.alert.result,
      "Alert has not been accepted"
    );
  });

  it("should verify confirm alert functionality", async () => {
    await AlertsPage.clickOnOpenAlertButton(testData.alerts.confirm.type);
    assert.equal(
      await DriverUtils.getAlertText(),
      testData.alerts.confirm.text,
      "Confirm Alert text does not match expected text"
    );
    await DriverUtils.acceptAlert();
    assert.equal(
      await AlertsPage.getResultText(),
      testData.alerts.confirm.result.accepted,
      "Confirm Alert has not been accepted"
    );
    await AlertsPage.clickOnOpenAlertButton(testData.alerts.confirm.type);
    await DriverUtils.dismissAlert();
    assert.equal(
      await AlertsPage.getResultText(),
      testData.alerts.confirm.result.canceled,
      "Confirm Alert has not been canceled"
    );
  });

  it("should verify prompt alert functionality", async () => {
    await AlertsPage.clickOnOpenAlertButton(testData.alerts.prompt.type);
    assert.equal(
      await DriverUtils.getAlertText(),
      testData.alerts.prompt.text,
      "Prompt Alert text does not match expected text"
    );
    await DriverUtils.dismissAlert();
    assert.equal(
      await AlertsPage.getResultText(),
      testData.alerts.prompt.result.canceled,
      "Prompt Alert has not been canceled"
    );
    await AlertsPage.clickOnOpenAlertButton(testData.alerts.prompt.type);
    await DriverUtils.sendAlertText(testData.alerts.prompt.input);
    await DriverUtils.acceptAlert();
    assert.equal(
      await AlertsPage.getResultText(),
      testData.alerts.prompt.result.entered + testData.alerts.prompt.input,
      "Text has not been entered in Prompt Alert"
    );
  });
});
