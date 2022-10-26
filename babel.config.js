module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./src"],
          extensions: [
            ".ts",
            ".tsx",
            ".jsx",
            ".js",
            ".ios.ts",
            ".android.ts",
            ".ios.tsx",
            ".android.tsx",
            ".json",
            ".stories.js",
          ],
          alias: {
            "@": "./src",
          },
        },
      ],
    ],
  };
};
