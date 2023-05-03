import BaseElement from "./baseElement.js";
import logger from "../utilities/logger.js"

class InputElement extends BaseElement {
  constructor(selector, elementName) {
    super(selector, elementName);
  }

  async enterText(text) {
    const elem = await this.findElement();
    logger.info(`enterText method has been called on Input Element - ${this.elementName}`);
    return elem.setValue(text);
  }
  async getValue() {
    const elem = await this.findElement();
    logger.info(`getValue method has been called on Input Element - ${this.elementName}`);
    return elem.getValue();
  }
  
  async clearValue() {
    const elem = await this.findElement();
    logger.info(`clearValue method has been called on Input Element - ${this.elementName}`);
    return elem.clearValue();
  }
}

export default InputElement;
