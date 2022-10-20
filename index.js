/*
 *  Created on 20/10/2022
 *  Author: dinethchalitha@gmail.com
 *
 */

const imageService = require("./src/service/image.service");
const util = require("./src/util/common");
const logger = require("./src/util/logger");

logger.info("Start image fetching!");

// Here you can change the text values for cat images
let catOneText = "Hello";
let catTwoText = "How are you?";

const firstUrl = util.getUrl(catOneText);
const secondUrl = util.getUrl(catTwoText);

imageService.bindImages(firstUrl, secondUrl);
