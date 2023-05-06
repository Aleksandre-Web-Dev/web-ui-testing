import utilConfig from "../../project/configurations/utilConfig.json" assert { type: "json" };
import logger from "../utilities/logger.js";

class NumberUtils {
  static generateRandomNumber(max = utilConfig.default.number.max) {
    const randomNumber = Math.floor(Math.random() * max);
    return randomNumber;
  }
}

export default NumberUtils;
