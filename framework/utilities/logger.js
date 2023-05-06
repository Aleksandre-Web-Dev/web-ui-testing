import { createLogger, format, transports } from "winston";
import fileConfig from "../../project/configurations/fileConfig.json" assert { type: "json" };
import utilConfig from "../../project/configurations/utilConfig.json" assert { type: "json" };
const { combine, timestamp, printf } = format;

const myFormat = printf(({ level, message, timestamp }) => {
  return `${timestamp} ${level}: ${message}`;
});

const logger = createLogger({
  format: combine(
    timestamp({ format: utilConfig.default.logger.format }),
    myFormat
  ),
  transports: [
    new transports.Console(),
    new transports.File({ filename: fileConfig.paths.logs }),
  ],
});

export default logger;
