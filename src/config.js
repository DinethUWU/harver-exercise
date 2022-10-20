/*
 *  Created on 20/10/2022
 *  Author: dinethchalitha@gmail.com
 *
 */

process.env.NODE_ENV = "dev"; // Todo
const env = process.env.NODE_ENV; // 'dev' or 'test'

const dev = {
  app: {
    catServiceEndpoint: "https://cataas.com/cat/says/",
  },
};

const config = {
  dev,
};

module.exports = config[env];
