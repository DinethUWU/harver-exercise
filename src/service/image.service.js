/*
 *  Created on 20/10/2022
 *  Author: dinethchalitha@gmail.com
 *
 */

const api = require("./api");
const sharp = require("../util/sharp.util");
const logger = require("../util/logger");

const bindImages = async (catFirstUrl, catSecondUrl) => {
  const catFirstResponse = await api.getImage(catFirstUrl);
  const catSecondResponse = await api.getImage(catSecondUrl);

  if (!catFirstResponse || !catSecondResponse) {
    logger.error("Invalid response from cat service");
    return;
  }
  sharp.compositeImages(catFirstResponse, catSecondResponse);
};

module.exports = {
  bindImages,
};
