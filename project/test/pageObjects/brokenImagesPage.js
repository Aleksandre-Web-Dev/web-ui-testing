import BaseForm from "../../../framework/baseForm.js";
import TextElement from "../../../framework/elements/textElement.js";
import ImageElement from "../../../framework/elements/imageElement.js";
class BrokenImagesPage extends BaseForm {
  constructor() {
    super(
      new TextElement(
        "//*[contains(text(),'Broken Images')]",
        "Broken Images Text"
      ),
      "Broken Images Page"
    );
    this.brokenImage = new ImageElement(
      "//div[@id='content']//img",
      "Broken image"
    );
  }

  async getBrokenImageList() {
    const list = this.brokenImage.getElementList();
    return list;
  }

  async getBrokenImageAttribute(imageList, index, attributeName) {
    const image = imageList[index];
    return image.getElementAttribute(attributeName);
  }
}

export default new BrokenImagesPage();
