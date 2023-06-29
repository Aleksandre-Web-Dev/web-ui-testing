// import { assert } from "chai";
// import DriverUtils from "../../../framework/utilities/driverUtils.js";
// import NumberUtils from "../../../framework/utilities/numberUtils.js";
// import urlConfig from "../../configurations/urlConfig.json" assert { type: "json" };
// import testdata from "../../testData/combined.json" assert { type: "json" };
// import SliderPage from "../pageObjects/sliderPage.js";
// describe("Testing horizontal Slider", async () => {
//   before("Navigate to Slider page", async function () {
//     await DriverUtils.navigateTo(urlConfig.urls.pages.slider);
//     assert.isTrue(
//       await SliderPage.isPageDisplayed(),
//       "Slider page is not displayed"
//     );
//     this.defaultSliderValue = await SliderPage.getSliderValueText();
//   });

//   it("should Verify Slider drag and drop functionality", async function () {
//     await SliderPage.dragSlider(
//       NumberUtils.generateRandomNumber(),
//       NumberUtils.generateRandomNumber()
//     );
//     assert.notEqual(
//       await SliderPage.getSliderValueText(),
//       this.defaultSliderValue,
//       "Slider value has not been changed"
//     );
//   });
//   it("should Verify Slider Key Press functionality", async function () {
//     const sliderAttributes = {};
//     for (let attribute of testdata.slider.attributes) {
//       sliderAttributes[attribute] = Number(
//         await SliderPage.getSliderAttribute(attribute)
//       );
//     }
//     await SliderPage.setFocusOnSlider();
//     const sliderValue = Number(await SliderPage.getSliderValueText());
//     await DriverUtils.sendKeys(testdata.slider.operations.increase);
//     assert.equal(
//       await SliderPage.getSliderValueText(),
//       sliderValue + sliderAttributes.step,
//       "Slider Value did not increase"
//     );
//     await DriverUtils.sendKeys(testdata.slider.operations.decrease);
//     assert.equal(
//       await SliderPage.getSliderValueText(),
//       sliderValue,
//       "Slider Value did not decrease"
//     );
//   });
// });
