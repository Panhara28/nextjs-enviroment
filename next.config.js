/**
 * @see {@link https://nextjs.org/docs/api-reference/next.config.js/runtime-configuration}
 */

module.exports = {
  serverRuntimeConfig: {
    // Will only be available on the server side
    SERVER_API_URL: process.env.SERVER_API_URL,
  },
  publicRuntimeConfig: {
    // Will be available on both server and client
    CLIENT_URL_ONLY: process.env.CLIENT_URL_ONLY,
    BOTH_SERVER_CLIENT: process.env.BOTH_SERVER_CLIENT,
    API_FROM_CLIENT: process.env.API_FROM_CLIENT,
    API_FROM_CLIENT_SERVER: process.env.API_FROM_CLIENT_SERVER
  },
};
