import BaseElement from "./baseElement.js";
import logger from "../utilities/logger.js"

class TextElement extends BaseElement {
  constructor(selector, elementName) {
    super(selector, elementName);
  }

  async getText() {
    const elem = await this.findElement();
    logger.info(
      `getText method has been called on Text Element - ${this.elementName}`
    );
    return elem.getText();
  }
}

export default TextElement;
