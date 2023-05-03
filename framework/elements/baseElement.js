import browserConfig from "../../project/configurations/browserConfig.json" assert { type: "json" };
import logger from "../utilities/logger.js";

class BaseElement {
  constructor(baseElementSelector, baseElementName) {
    (this.selector = baseElementSelector), (this.elementName = baseElementName);
  }

  async findElement() {
    const elem = await $(this.selector);
    logger.info(`findElement has been called on ${this.elementName}`);
    return elem;
  }

  async findElements() {
    logger.info(`findElements has been called on ${this.elementName}`);
    return $$(this.selector);
  }

  async getElementList() {
    logger.info(`getElementList has been called`);
    const elemList = (await this.findElements()).map((elem, index) => {
      return new this.constructor(elem, `${this.elementName} #${index}`);
    });
    return elemList;
  }

  async click() {
    logger.info(`Click method has been called on ${this.elementName}`);
    const elem = await this.findElement();
    return elem.click();
  }

  async getElementAttribute(attributeName) {
    logger.info(
      `getElementAttribute method has been called on ${this.elementName}`
    );
    const elem = await this.findElement();
    return elem.getAttribute(attributeName);
  }

  async isDisplayed(
    timeout = browserConfig.waits.timeout,
    reverse = browserConfig.waits.reverse,
    timeoutMsg = browserConfig.waits.timeoutMessage,
    interval = browserConfig.waits.interval
  ) {
    logger.debug(`Checking if ${this.elementName} is displayed`);
    try {
      (await this.findElement()).waitForDisplayed({
        timeout,
        reverse,
        timeoutMsg,
        interval,
      });
      return true;
    } catch (err) {
      logger.debug(`${this.elementName} is not displayed`);
      return false;
    }
  }

  async isExist(
    timeout = browserConfig.waits.timeout,
    reverse = browserConfig.waits.reverse,
    timeoutMsg = browserConfig.waits.timeoutMessage,
    interval = browserConfig.waits.interval
  ) {
    logger.debug(`Checking if ${this.elementName} does exist`);
    try {
      (await this.findElement()).isExist({
        timeout,
        reverse,
        timeoutMsg,
        interval,
      });
      return true;
    } catch (err) {
      logger.debug(`${this.elementName} does not exist`);
      return false;
    }
  }
}
export default BaseElement;
