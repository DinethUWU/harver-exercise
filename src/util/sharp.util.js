/*
 *  Created on 20/10/2022
 *  Author: dinethchalitha@gmail.com
 *
 */

const sharp = require("sharp");
const common = require("../util/common");
const logger = require("./logger");

const NUMBER_OF_IMAGES = 2;
const INIT_POSISTION = 0;
const BACKGROUND_COLOUR = "#000000";

const compositeImages = (firstImage, secondImage) => {
  logger.info("Start images processing!");
  sharp({
    create: {
      width: common.image.width * NUMBER_OF_IMAGES,
      height: common.image.height,
      channels: 4, // between 1 and 4.
      background: BACKGROUND_COLOUR,
    },
  })
    .composite([
      { input: firstImage, left: INIT_POSISTION, top: INIT_POSISTION },
      { input: secondImage, left: common.image.width, top: INIT_POSISTION },
    ])
    .toFile(common.image.outputFile)
    .then(() => {
      logger.info("The file was saved!");
    })
    .catch((error) => {
      logger.error(error.message);
    });
};

module.exports = {
  compositeImages,
};
