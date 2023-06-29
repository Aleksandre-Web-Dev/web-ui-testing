import BaseForm from "../../../framework/baseForm.js";
import ButtonElement from "../../../framework/elements/buttonElement.js";

class AddRemoveElementsPage extends BaseForm {
  constructor() {
    super(
      new ButtonElement(
        "//button[contains(text(),'Add Element')]",
        "Add Element Button"
      )
    );
    (this.addElementButton = new ButtonElement(
      "//button[contains(text(),'Add Element')]",
      "Add Element Button"
    )),
      (this.removeElementButton = new ButtonElement(
        "//button[contains(@class,'added-manually')]",
        "Remove Element Button"
      ));
  }

  async clickOnAddElementButton() {
    return this.addElementButton.click();
  }

  async clickOnRemoveElementButton() {
    return this.removeElementButton.click();
  }

  async getAddedElementList() {
    return this.removeElementButton.getElementList();
  }
}

export default new AddRemoveElementsPage();
