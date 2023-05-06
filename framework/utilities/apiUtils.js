import axios from "axios";
import logger from "../utilities/logger.js";
import urlConfig from "../../project/configurations/urlConfig.json" assert { type: "json" };
const instance = axios.create({
  baseURL: urlConfig.urls.base_url,
});

class ApiUtils {
  static async getData(url) {
    try {
      logger.info(`getData method has been called on - url ${url}`);
      const response = await instance.get(url);
      return {
        data: response.data,
        status: response.status,
      };
    } catch (err) {
      logger.error("Error has been encouneted");
      if (err.response) {
        return err.response;
      }
    }
  }
}

export default ApiUtils;
