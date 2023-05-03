import LoginPage from "../pageObjects/loginPage.js";
import DriverUtils from "../../../framework/utilities/driverUtils.js";
import StringUtils from "../../../framework/utilities/stringUtils.js";
import RandomUtils from "../../../framework/utilities/randomUtils.js";
import testData from "../../testData/data.json" assert { type: "json" };
import urlConfig from "../../configurations/urlConfig.json" assert { type: "json" };
import { assert } from "chai";

describe("User Login Test", async () => {
  beforeEach("navigate to Login Page", async () => {
    await DriverUtils.navigateTo(urlConfig.urls.login);
  });

  it("should verify login functionality with valid username and password", async () => {
    await LoginPage.enterUsername(testData.users.username);
    await LoginPage.enterPassword(testData.users.password);
    await LoginPage.clickOnSubmitButton();
    const validationStatusText = StringUtils.sliceString(
      await LoginPage.getNotificationText(),
      null,
      testData.statusText.success.length
    );
    assert.equal(
      testData.statusText.success,
      validationStatusText,
      "User Login was unsuccesful"
    );
  });

  it("should verify login functionality with invalid username and password", async () => {
    await LoginPage.enterUsername(RandomUtils.generateRandomString());
    await LoginPage.enterPassword(RandomUtils.generateRandomString());
    await LoginPage.clickOnSubmitButton();
    const validationStatusText = StringUtils.sliceString(
      await LoginPage.getNotificationText(),
      null,
      testData.statusText.invalid_username.length
    );
    assert.equal(
      testData.statusText.invalid_username,
      validationStatusText,
      "User Login was successful"
    );
  });
});
