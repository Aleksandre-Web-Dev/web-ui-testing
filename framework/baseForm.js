class BaseForm {
  constructor(uniqueElement, baseFormName) {
    (this.uniqueElement = uniqueElement), (this.baseFormName = baseFormName);
  }

  async isPageDisplayed() {
    try {
      return this.uniqueElement.isDisplayed();
    } catch (err) {
      logger.info(`${this.baseFormName} is not Displayed`);
      return false;
    }
  }
}

export default BaseForm;
