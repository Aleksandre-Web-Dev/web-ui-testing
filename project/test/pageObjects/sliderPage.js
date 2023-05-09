import BaseForm from "../../../framework/baseForm.js";
import TextElement from "../../../framework/elements/textElement.js";
import SliderElement from "../../../framework/elements/sliderElement.js";

class SliderPage extends BaseForm {
  constructor() {
    super(
      new TextElement("//span[@id='range']", "Slider value Text"),
      "Slider Page"
    );

    this.slider = new SliderElement(
      "//span[@id='range']//preceding-sibling::input[@type='range']",
      "Slider Element"
    );
    this.sliderValueText = new TextElement(
      "//span[@id='range']",
      "Slider value Text"
    );
  }

  async dragSlider(x, y) {
    return this.slider.dragAndDropSlider(x, y);
  }

  async getSliderValueText() {
    return this.sliderValueText.getText();
  }
}

export default new SliderPage();
