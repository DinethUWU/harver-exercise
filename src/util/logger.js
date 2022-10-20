/*
 *  Created on 20/10/2022
 *  Author: dinethchalitha@gmail.com
 *
 */

const winston = require("winston");

const logger = winston.createLogger({
  level: "debug",
  format: winston.format.json(),
  transports: [new winston.transports.Console()],
});

module.exports = logger;
