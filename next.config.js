/**
 * @see {@link https://nextjs.org/docs/api-reference/next.config.js/runtime-configuration}
 */

module.exports = {
  serverRuntimeConfig: {
    // Will only be available on the server side
    API_FROM_SERVER: process.env.API_FROM_SERVER
  },
  publicRuntimeConfig: {
    // Will be available on both server and client
    API_FROM_CLIENT: process.env.API_FROM_CLIENT,
    API_FROM_CLIENT_SERVER: process.env.API_FROM_CLIENT_SERVER
  },
};
