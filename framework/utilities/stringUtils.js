import logger from "../../framework/utilities/logger.js";

class StringUtils {
  constructor() {}

  static sliceString(str, startIndex = 0, endIndex) {
    logger.info(
      `Slicing ${str} - Starting Index ${startIndex} - Ending Index ${endIndex}`
    );
    return str.slice(startIndex, endIndex);
  }
}

export default StringUtils;
