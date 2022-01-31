// @ts-check

const withPlugins = require("next-compose-plugins");
const withOffline = require("next-offline");

const plugins = [withOffline];


/**
@type {import('next').NextConfig}
**/
const nextConfig = {
    async headers() {
        return [
          {
            source: '/',
            headers: [
              {
                key: 'Cross-Origin-Opener-Policy',
                value: 'same-origin',
              },
              {
                key: 'Cross-Origin-Embedder-Policy',
                value: 'require-corp',
              },
            ],
          },
        ]
    },
}

module.exports = withPlugins(plugins, nextConfig);
