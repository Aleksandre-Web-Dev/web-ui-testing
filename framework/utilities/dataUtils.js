import StringUtils from "./stringUtils.js";
import utilConfig from "../../project/configurations/utilConfig.json" assert { type: "json" };
import logger from "../utilities/logger.js"


class DataUtils {
  static generateTestData(dataLength = utilConfig.default.data.length.data) {
    const dataArray = [];
    for (let i = 0; i < dataLength; i++) {
      const userData = {
        username: StringUtils.generateRandomString(
          utilConfig.default.data.length.username
        ),
        password: StringUtils.generateRandomString(
          utilConfig.default.data.length.password
        ),
      };
      dataArray.push(userData);
    }
    logger.info(`Test Data has been generated - Data Length : ${dataLength}`);
    return dataArray;
  }
}

export default DataUtils;
