import TextElement from "../../../framework/elements/textElement.js";
import InputElement from "../../../framework/elements/inputElement.js";
import ButtonElement from "../../../framework/elements/buttonElement.js";
import BaseForm from "../../../framework/baseForm.js";

class LoginPage extends BaseForm {
  constructor() {
    super(
      new TextElement("//h2[contains(text(),'Login')]"),
      "Login Page Heading"
    );
    this.usernameInputField = new InputElement(
      "//input[@id='username']",
      "Username Input Field"
    );
    this.passwordInputField = new InputElement(
      "//input[@id='password']",
      "Password Input Field"
    );
    this.submitButton = new ButtonElement(
      "//button[@type='submit']",
      "Submit Button"
    );

    this.loginNotificationText = new TextElement(
      "//div[contains(@class,'flash')]",
      "Login Status Notification Text"
    );

  }

  async enterUsername(username) {
    return this.usernameInputField.enterText(username);
  }

  async enterPassword(password) {
    return this.passwordInputField.enterText(password);
  }

  async clickOnSubmitButton() {
    return this.submitButton.click();
  }

  async getNotificationText() {
    return this.loginNotificationText.getText();
  }
}

export default new LoginPage();
