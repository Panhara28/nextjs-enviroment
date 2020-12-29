/**
 * @see {@link https://nextjs.org/docs/api-reference/next.config.js/runtime-configuration}
 */

module.exports = {
  serverRuntimeConfig: {
    // Will only be available on the server side
    SERVER_API_URL: process.env.SERVER_API_URL,
    BASE_URL_ONLY: process.env.BASE_URL_ONLY,
  },
  publicRuntimeConfig: {
    // Will be available on both server and client
    BASE_URL_BOTH: process.env.BASE_URL_BOTH,
    BOTH_API_URL: process.env.BOTH_API_URL
  },
};
