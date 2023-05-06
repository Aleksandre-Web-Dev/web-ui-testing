import TextElement from "../../../framework/elements/textElement.js";
import ButtonElement from "../../../framework/elements/buttonElement.js";
import BaseForm from "../../../framework/baseForm.js";

class SecurePage extends BaseForm {
  constructor() {
    super(
      new TextElement(
        new ButtonElement("//a[contains(@class,'secondary')]", "Logout Button"),
        "Secure Page"
      )
    );
    this.logoutButton = new ButtonElement(
      "//a[contains(@class,'secondary')]",
      "Logout Button"
    );
  }

  async clickOnLogoutButton() {
    return this.logoutButton.click();
  }
}

export default new SecurePage();
