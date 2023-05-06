import logger from "../utilities/logger.js";
class DriverUtils {
  static async navigateTo(url) {
    logger.info(`navigateTo method has been called - url : ${url}`);
    await browser.url(url);
  }

  static async getAlertText() {
    logger.info("getAlertText method has been called");
    return browser.getAlertText();
  }

  static async acceptAlert() {
    logger.info("acceptAlert method has been called");
    return browser.acceptAlert();
  }

  static async dismissAlert() {
    logger.info("dismissAlert method has been called");
    return browser.dismissAlert();
  }

  static async sendAlertText(text) {
    return browser.sendAlertText(text);
  }
}
export default DriverUtils;
