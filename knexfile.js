require("dotenv").config();

const sharedConfig = {
  client: "postgresql",
  seeds: { directory: "./data/seeds" },
  migrations: { directory: "./data/migrations" },
};

module.exports = {
  development: {
    ...sharedConfig,
    connection: process.env.PG_CONNECTION_STRING,
  },
  test: { ...sharedConfig, connection: process.env.PG_CONNECTION_STRING_TEST },
  production: { ...sharedConfig, connection: "" },
};
