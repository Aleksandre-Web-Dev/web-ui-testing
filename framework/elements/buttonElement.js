import BaseElement from "./baseElement.js";
import logger from "../utilities/logger.js"

class ButtonElement extends BaseElement {
  constructor(selector, elementName) {
    super(selector, elementName);
  }
}

export default ButtonElement;
