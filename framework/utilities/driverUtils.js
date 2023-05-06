import logger from "../utilities/logger.js";
class DriverUtils {
  static async navigateTo(url) {
    logger.info(`navigateTo method has been called - url : ${url}`);
    await browser.url(url);
  }
}
export default DriverUtils;
