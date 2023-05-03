import browserConfig from "../../project/configurations/browserConfig.json" assert { type: "json" };

class DriverUtils {
  static async navigateTo(url) {
    await browser.url(url);
  }

  static async getLocalStorageItem(itemName) {
    const item = await browser.execute((itemName) => {
      return localStorage.getItem(itemName);
    }, itemName);
    return item;
  }

  static async sendKeys(keys) {
    await browser.keys(keys);
  }

  static async pause(timeout = browserConfig.waits.timeout) {
    await browser.pause(timeout);
  }

  static async getCurrentUrl() {
    return browser.getUrl();
  }
}
export default DriverUtils;
