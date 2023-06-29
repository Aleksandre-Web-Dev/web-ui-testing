import { assert } from "chai";
import DriverUtils from "../../../framework/utilities/driverUtils.js";
import urlConfig from "../../configurations/urlConfig.json" assert { type: "json" };
import AddRemoveElementPage from "../pageObjects/addRemoveElementsPage.js";

describe("Add/Remove Elements Test", async () => {
  beforeEach("Navigate to Add/Remove Page", async () => {
    await DriverUtils.navigateTo(urlConfig.urls.pages.add_remove_elements);
    assert.isTrue(
      await AddRemoveElementPage.isPageDisplayed(),
      "Page is not displayed"
    );
  });

  it("Verify Add Element functionality", async () => {
    await AddRemoveElementPage.clickOnAddElementButton();
    assert.isNotEmpty(
      await AddRemoveElementPage.getAddedElementList(),
      "Element has not been added"
    );
  });

  it("Verify Remove Element functionality", async () => {
    await AddRemoveElementPage.clickOnAddElementButton();
    assert.isNotEmpty(
      await AddRemoveElementPage.getAddedElementList(),
      "Element has not been added"
    );
    await AddRemoveElementPage.clickOnRemoveElementButton();
    assert.isEmpty(
      await AddRemoveElementPage.getAddedElementList(),
      "Element has not been removed"
    );
  });
  it("Verify Add/Remove Element functionality for multiple elements", async () => {
    for (let i = 0; i < 5; i++) {
      await AddRemoveElementPage.clickOnAddElementButton();
    }
    assert.isNotEmpty(
      await AddRemoveElementPage.getAddedElementList(),
      "Element has not been added"
    );
    const list = await AddRemoveElementPage.getAddedElementList();
    assert.equal(
      list.length,
      5,
      "Number of Added elements does not match actually added Elements list"
    );
    for (let i = 0; i < 5; i++) {
      await AddRemoveElementPage.clickOnRemoveElementButton();
    }
    assert.isEmpty(
      await AddRemoveElementPage.getAddedElementList(),
      "Elements have not been removed"
    );
  });
});
