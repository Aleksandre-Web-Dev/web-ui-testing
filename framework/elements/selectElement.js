import BaseElement from "./baseElement.js";
class SelectElement extends BaseElement {
  constructor(selector, elementName) {
    super(selector, elementName);
  }

  async getOptionList() {
    const list = await this.getElementList();
    return list;
  }

  async getValue() {
    const elem = await this.findElement();
    return elem.getValue();
  }
  
  async getText() {
    const elem = await this.findElement();
    return elem.getText();
  }
}
export default SelectElement;
