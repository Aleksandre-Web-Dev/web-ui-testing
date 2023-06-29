// import { assert } from "chai";
// import DriverUtils from "../../../framework/utilities/driverUtils.js";
// import urlConfig from "../../configurations/urlConfig.json" assert { type: "json" };
// import checkboxesPage from "../pageObjects/checkboxesPage.js";

// describe("Testing Checkbox functionality", async () => {
//   before("Navigate to Checkboxes page", async function () {
//     await DriverUtils.navigateTo(urlConfig.urls.pages.checkboxes);
//     assert.isTrue(
//       await checkboxesPage.isPageDisplayed(),
//       "Checkboxes page is not displayed"
//     );
//   });

//   it("should Verify checkbox check functionality", async () => {
//     const list = await checkboxesPage.getCheckboxList();
//     for (let i = 0; i < list.length; i++) {
//       if (await checkboxesPage.isCheckboxInputChecked(list, i)) {
//         await checkboxesPage.clickOnCheckbox(list, i);
//         assert.isFalse(await checkboxesPage.isCheckboxInputChecked(list, i));
//       } else {
//         await checkboxesPage.clickOnCheckbox(list, i);
//         assert.isTrue(
//           await checkboxesPage.isCheckboxInputChecked(list, i),
//           "Checkbox is not selected"
//         );
//       }
//     }
//   });
// });
