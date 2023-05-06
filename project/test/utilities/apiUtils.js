import ApiUtils from "../../../framework/utilities/apiUtils.js";
import logger from "../../../framework/utilities/logger.js"

class apiUtils {
  static async getImageStatus(url) {
    logger.info("getImageStatus method has been called");
    const data = await ApiUtils.getData(url);
    return data.status;
  }
}
export default apiUtils;
