import { assert } from "chai";
import DriverUtils from "../../../framework/utilities/driverUtils.js";
import NumberUtils from "../../../framework/utilities/numberUtils.js";
import SliderPage from "../pageObjects/sliderPage.js";
import urlConfig from "../../configurations/urlConfig.json" assert { type: "json" };
describe("Testing horizontal Slider", async () => {
  before("Navigate to Slider page", async function () {
    await DriverUtils.navigateTo(urlConfig.urls.slider);
    assert.isTrue(
      await SliderPage.isPageDisplayed(),
      "Slider page is not displayed"
    );
    this.defaultSliderValue = await SliderPage.getSliderValueText();
  });

  it("should Verify Slider drag and drop functionality", async function () {
    await SliderPage.dragSlider(
      NumberUtils.generateRandomNumber(),
      NumberUtils.generateRandomNumber()
    );
    assert.notEqual(
      await SliderPage.getSliderValueText(),
      this.defaultSliderValue,
      "Slider value has not been changed"
    );
  });
});
