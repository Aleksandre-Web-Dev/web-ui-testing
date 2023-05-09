import BaseElement from "./baseElement.js";

class SliderElement extends BaseElement {
  constructor(selector, elementName) {
    super(selector, elementName);
  }

  async dragAndDropSlider(x, y) {
    const elem = await this.findElement();
    return elem.dragAndDrop({ x, y });
  }
}

export default SliderElement;
