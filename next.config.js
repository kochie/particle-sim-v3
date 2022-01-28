const withPlugins = require("next-compose-plugins");
const withOffline = require("next-offline");

const plugins = [withOffline];

module.exports = withPlugins(plugins, nextConfiguration);
