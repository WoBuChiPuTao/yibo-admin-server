const { name } = require("./package.json");
const path = require("path");

module.exports = {
  apps: [
    {
      name,
      script: path.resolve(__dirname, "./dist/main.js"),
      instances: require("os").cpus().length,
      autorestart: true,
      watch: true,
      env_production: {
        NODE_ENV: "production",
        PORT: 3300
      }
    }
  ]
};
