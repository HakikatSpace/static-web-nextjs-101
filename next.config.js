const { PHASE_DEVELOPMENT_SERVER, PHASE_EXPORT, PHASE_PRODUCTION_BUILD } = require('next/constants');

/** @type {import('next').NextConfig} */
module.exports = (phase) => {
  const reactStrictMode = true
  const assetPrefix = './'
  const trailingSlash = true

  switch (phase) { 
    case PHASE_PRODUCTION_BUILD: // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch#methods_for_multi-criteria_case
    case PHASE_EXPORT:
      return {
        reactStrictMode,
        assetPrefix,
        trailingSlash,
      }
      break;
    case PHASE_DEVELOPMENT_SERVER:
      return {
        reactStrictMode
      }
      break;
    default:
      return {
        reactStrictMode,
      }
      break;
  }
}