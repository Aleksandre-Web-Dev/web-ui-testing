// import { assert } from "chai";
// import DriverUtils from "../../../framework/utilities/driverUtils.js";
// import urlConfig from "../../configurations/urlConfig.json" assert { type: "json" };
// import testData from "../../testData/combined.json" assert { type: "json" };
// import ApiUtils from "../utilities/apiUtils.js";
// import BrokenImagesPage from "../pageObjects/brokenImagesPage.js";
// describe("Testing For Broken Links", async () => {
//   before("Navigate to Broken images Page", async () => {
//     await DriverUtils.navigateTo(urlConfig.urls.pages.broken_images);
//   });

//   it("Verify Functionality of image links", async () => {
//     const list = await BrokenImagesPage.getBrokenImageList();
//     for (let i = 0; i < list.length; i++) {
//       const link = await BrokenImagesPage.getBrokenImageAttribute(
//         list,
//         i,
//         testData.broken_images.attribute
//       );
//       assert.equal(
//         await ApiUtils.getImageStatus(urlConfig.urls.base_url + link),
//         testData.broken_images.status_codes.success,
//         "Image links are broken"
//       );
//     }
//   });
// });
