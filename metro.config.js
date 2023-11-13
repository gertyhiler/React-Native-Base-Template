// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require("expo/metro-config");
const jsoMetroPlugin = require("obfuscator-io-metro-plugin")(
  {
    compact: true,
    sourceMap: false,
    controlFlowFlattening: true,
    controlFlowFlatteningThreshold: 1,
    numbersToExpressions: true,
    simplify: true,
    stringArrayShuffle: true,
    splitStrings: true,
    stringArrayThreshold: 1,
  },
  {
    runInDev: false,
    logObfuscatedFiles: false,
  }
);

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);

module.exports = (async () => {
  const {
     resolver: { sourceExts },
  } = config;

  return {
     ...config,
     resolver: {
        ...config.resolver,
        sourceExts: [...sourceExts, 'mjs'],
     },
     transformer: {
      getTransformOptions: async () => ({
        transform: {
          experimentalImportSupport: false,
          inlineRequires: false,
        },
      }),
  
      ...jsoMetroPlugin,
    },
  };
})();
