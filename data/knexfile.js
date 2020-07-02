require("dotenv").config();

const sharedConfig = {
  client: "postgresql",
  seeds: { directory: "./data/seeds" },
  migrations: { directory: "./data/migrations" },
};

module.exports = {
  development: { ...sharedConfig, connection: "" },
  test: { ...sharedConfig, connection: "" },
  production: { ...sharedConfig, connection: "" },
};
