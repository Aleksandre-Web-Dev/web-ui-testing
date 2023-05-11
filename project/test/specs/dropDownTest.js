import { assert } from "chai";
import DriverUtils from "../../../framework/utilities/driverUtils.js";
import StringUtils from "../../../framework/utilities/stringUtils.js";
import urlConfig from "../../configurations/urlConfig.json" assert { type: "json" };
import DropDownPage from "../pageObjects/dropDownPage.js";

describe("Testing Dropdown menu", async () => {
  before("Navigate to Dropdown page", async function () {
    await DriverUtils.navigateTo(urlConfig.urls.pages.dropdown);
    assert.isTrue(
      await DropDownPage.isPageDisplayed(),
      "Dropdown page is not displayed"
    );
  });

  it("should Verify option value alignment", async () => {
    const list = await DropDownPage.getSelectOptionList();
    for (let i = 1; i < list.length; i++) {
      assert.equal(
        await DropDownPage.getOptionValue(list, i),
        await StringUtils.extractNumberFromString(
          await DropDownPage.getOptionText(list, i)
        ),
        "Option values do not align"
      );
    }
  });

  it("should Verify option selection functionality", async () => {
    const list = await DropDownPage.getSelectOptionList();
    for (let i = 1; i < list.length; i++) {
      await DropDownPage.clickOnOption(list, i);
      assert.isTrue(
        await DropDownPage.isOptionSelected(list, i),
        "Option is not selected"
      );
    }
  });
});
