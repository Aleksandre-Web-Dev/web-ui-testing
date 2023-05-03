import pathConfig from "../../project/configurations/pathConfig.json" assert { type: "json" };
import { createLogger, format, transports } from "winston";
const { combine, timestamp, printf } = format;

const myFormat = printf(({ level, message, timestamp }) => {
  return `${timestamp} ${level}: ${message}`;
});

const logger = createLogger({
  format: combine(timestamp({ format: "HH:mm:ss" }), myFormat),
  transports: [
    new transports.Console(),
    new transports.File({ filename: pathConfig.filePaths.logs }),
  ],
});

export default logger;
