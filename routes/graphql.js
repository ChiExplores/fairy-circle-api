const { graphqlHTTP } = require("express-graphql");
const router = require("express").Router();
const { schema, root } = require("../schema/schema");

// GET requests allow for graphiql interface
router.get(
  "/",
  graphqlHTTP((req, res) => ({
    schema: schema,
    rootValue: root,
    graphiql: true,
  }))
);

// POST are prod requests
router.post(
  "/",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: false,
  })
);

module.exports = router;
