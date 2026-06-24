const path = require('path');

module.exports = function pagefindPlugin() {
  return {
    name: 'docusaurus-pagefind',
    getThemePath() {
      return path.resolve(__dirname, 'theme');
    },
    getTypeScriptThemePath() {
      return path.resolve(__dirname, 'theme');
    },
  };
};
