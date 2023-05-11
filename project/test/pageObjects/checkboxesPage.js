import BaseForm from "../../../framework/baseForm.js";
import InputElement from "../../../framework/elements/inputElement.js";
import FormElement from "../../../framework/elements/inputElement.js";

class CheckboxesPage extends BaseForm {
  constructor() {
    super(
      new FormElement("//form[@id='checkboxes']", "Checkbox Form"),
      "Checkboxes Page"
    );
    this.checkboxInput = new InputElement(
      "//input[@type='checkbox']",
      "checkbox input"
    );
  }

  async getCheckboxList() {
    return this.checkboxInput.getElementList();
  }

  async isCheckboxInputChecked(list, index) {
    const elem = list[index];
    return elem.isSelected();
  }

  async clickOnCheckbox(list, index) {
    const elem = list[index];
    return elem.click();
  }
}

export default new CheckboxesPage();
