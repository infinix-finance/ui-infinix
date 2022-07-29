const path = require("path");

module.exports = ({ config }) => {
  // Alternately, for an alias:
  config.resolve.alias = {
    "@/pages": path.resolve(__dirname, "..", "pages"),
    "@/components": path.resolve(__dirname, "..", "components"),
    "@/styles": path.resolve(__dirname, "..", "styles"),
    "@/utils": path.resolve(__dirname, "..", "utils"),
    "@/contexts": path.resolve(__dirname, "..", "contexts"),
    "@/hooks": path.resolve(__dirname, "..", "hooks"),
    "@/stores": path.resolve(__dirname, "..", "stores"),
  };

  config.module.rules.push({
    test: /\.mjs$/,
    include: /node_modules/,
    type: "javascript/auto",
  });

  return config;
};
