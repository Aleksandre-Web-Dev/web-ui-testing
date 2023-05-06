import logger from "../utilities/logger.js"
import utilConfig from "../../project/configurations/utilConfig.json" assert { type: "json" };
import NumberUtils from "./numberUtils.js";

class StringUtils {
  constructor() {}
  static async sliceString(
    str,
    startIndex = utilConfig.default.string.start_index,
    endIndex
  ) {
    logger.info(
      `Slicing ${str} - Starting Index ${startIndex} - Ending Index ${endIndex}`
    );
    return str.slice(startIndex, endIndex);
  }

  static generateRandomString(length = utilConfig.default.string.length) {
    let result = "";
    const characters = utilConfig.default.string.charset;
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(
        NumberUtils.generateRandomNumber(charactersLength)
      );
    }
    logger.info(`Random String Generated ${result} of length ${length}`);
    return result;
  }
}

export default StringUtils;
