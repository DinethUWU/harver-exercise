/*
 *  Created on 20/10/2022
 *  Author: dinethchalitha@gmail.com
 *
 */

const config = require("../config");

const image = {
  width: 400,
  height: 500,
  color: "Pink",
  size: 100,
  encoding: "binary",
  outputFile: "result.jpeg",
};

const getUrl = (text) => {
  return `${config.app.catServiceEndpoint}${text}?width=${image.width}&height=${image.height}&color${image.color}&s=${image.size}`;
};

module.exports = {
  getUrl,
  image,
};
