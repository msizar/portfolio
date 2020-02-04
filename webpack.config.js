var path = require('path');

module.exports = {
  //...
  devServer: { 
    inline: true, 
    contentBase: './dist', 
    port: 3000, 
    proxy: { "/api/**": { target: 'http://localhost:3001', secure: false }  }
 }
};