import BaseForm from "../../../framework/baseForm.js";
import ButtonElement from "../../../framework/elements/buttonElement.js";
import TextElement from "../../../framework/elements/textElement.js";

class AlertsPage extends BaseForm {
  constructor() {
    super(
      new ButtonElement(
        "//button[contains(text(),'Click for JS Alert') and @onclick]",
        "Alert button"
      ),
      "Alert Page"
    );
    this.openAlertButton = (alertType) => {
      return new ButtonElement(
        `//button[@onclick='js${alertType}()']`,
        "Open Alert Button"
      );
    };
    this.resultText = new TextElement("//p[@id='result']", "Result text");
  }

  async clickOnOpenAlertButton(alertType) {
    return this.openAlertButton(alertType).click();
  }

  async getResultText() {
    return this.resultText.getText();
  }
}

export default new AlertsPage();
