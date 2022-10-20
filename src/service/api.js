/*
 *  Created on 20/10/2022
 *  Author: dinethchalitha@gmail.com
 *
 */

const Axios = require("axios");
const logger = require("../util/logger");

const getImage = async (url) => {
  try {
    const response = await Axios({
      url,
      method: "GET",
      responseType: "arraybuffer",
    });
    return response.data;
  } catch (error) {
    logger.error(error.message);
  }
};

module.exports = {
  getImage,
};
