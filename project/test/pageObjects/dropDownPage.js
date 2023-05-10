import BaseForm from "../../../framework/baseForm.js";
import SelectElement from "../../../framework/elements/selectElement.js";

class DropDownPage extends BaseForm {
  constructor() {
    super(
      new SelectElement("//select[@id='dropdown']", "Select"),
      "Dropdown Page"
    );
    this.selectOption = new SelectElement(
      "//select[@id='dropdown']//option",
      "Select Option"
    );
  }

  async getSelectOptionList() {
    return this.selectOption.getOptionList();
  }

  async getOptionValue(list, index) {
    const elem = list[index];
    return elem.getValue();
  }

  async getOptionText(list, index) {
    const elem = list[index];
    return elem.getText();
  }

  async getOptionAttribute(list, index, attributeName) {
    const elem = list[index];
    return elem.getElementAttribute(attributeName);
  }

  async clickOnOption(list, index) {
    const elem = list[index];
    return elem.click();
  }
}

export default new DropDownPage();
