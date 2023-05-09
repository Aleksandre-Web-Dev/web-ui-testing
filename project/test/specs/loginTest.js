import { assert } from "chai";
import DriverUtils from "../../../framework/utilities/driverUtils.js";
import DataUtils from "../../../framework/utilities/dataUtils.js";
import StringUtils from "../../../framework/utilities/stringUtils.js";
import logger from "../../../framework/utilities/logger.js";
import LoginPage from "../pageObjects/loginPage.js";
import SecurePage from "../pageObjects/securePage.js";
import testData from "../../testData/combined.json" assert { type: "json" };
import urlConfig from "../../configurations/urlConfig.json" assert { type: "json" };
import utilConfig from "../../configurations/utilConfig.json" assert { type: "json" };

describe("Login test", async () => {
  before("Generate test data", function () {
    this.userTestData = DataUtils.generateTestData();
  });

  beforeEach("Navigate to Login page", async () => {
    await DriverUtils.navigateTo(urlConfig.urls.login);
    assert.isTrue(await LoginPage.isPageDisplayed(), "Login Page did not open");
  });

  const arrLoop = new Array(utilConfig.default.data.length.data).fill();
  arrLoop.forEach((element, index) => {
    it("should verify login functionality with invalid username and password", async function () {
      for (const [fieldName, credential] of Object.entries(
        this.userTestData[index]
      )) {
        await LoginPage.enterUserCredential(fieldName, credential);
        logger.info(
          `Checking user account ID#${index}, Field Name: ${fieldName}, Credentials: ${credential}`
        );
      }
      await LoginPage.clickOnSubmitButton();
      const validationStatusText = await StringUtils.sliceString(
        await LoginPage.getNotificationText(),
        testData.status_text.invalid_username.length
      );
      assert.equal(
        testData.status_text.invalid_username,
        validationStatusText,
        "User Login was successfull"
      );
    });
  });

  it("should verify login functionality with valid username and password", async function () {
    for (let [fieldName, credentials] of Object.entries(testData.validUser)) {
      await LoginPage.enterUserCredential(fieldName, credentials);
    }
    await LoginPage.clickOnSubmitButton();
    const validationStatusText = await StringUtils.sliceString(
      await LoginPage.getNotificationText(),

      testData.status_text.success.length
    );
    assert.equal(
      testData.status_text.success,
      validationStatusText,
      "User Login was unsuccesful"
    );
  });

  after("Logout user", async () => {
    await SecurePage.clickOnLogoutButton();
    assert.isTrue(await LoginPage.isPageDisplayed(), "Login Page did not open");
  });
});
