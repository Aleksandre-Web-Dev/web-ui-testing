import TextElement from "../../../framework/elements/textElement.js";
import InputElement from "../../../framework/elements/inputElement.js";
import ButtonElement from "../../../framework/elements/buttonElement.js";
import BaseForm from "../../../framework/baseForm.js";

class LoginPage extends BaseForm {
  constructor() {
    super(
      new ButtonElement("//button[@type='submit']", "Submit button"),
      "Login Page"
    );
    this.InputField = (fieldId) => {
      return new InputElement(
        `//input[@id='${fieldId}']`,
        `${fieldId} input field`
      );
    };
    this.submitButton = new ButtonElement(
      "//button[@type='submit']",
      "Submit button"
    );
    this.loginNotificationText = new TextElement(
      "//div[contains(@class,'flash')]",
      "Login status notification text"
    );
  }

  async enterUserCredential(fieldName, credential) {
    return this.InputField(fieldName).enterText(credential);
  }

  async clickOnSubmitButton() {
    return this.submitButton.click();
  }

  async getNotificationText() {
    return this.loginNotificationText.getText();
  }
}

export default new LoginPage();
