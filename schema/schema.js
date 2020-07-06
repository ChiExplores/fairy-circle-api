const { buildSchema } = require("graphql");

const schema = buildSchema(`
  type Query {
    message: String
  }
`);

const root = {
  message: () => "Hello World!",
};

module.exports = {
  schema,
  root,
};
