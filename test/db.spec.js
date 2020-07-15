process.env.NODE_ENV = "test";
const knex = require("../data");
const queries = require("../data/queries");

const setupDb = () => {
  beforeEach((done) => {
    knex.migrate
      .rollback(true)
      .then(() => knex.migrate.latest())
      .then(() => knex.seed.run().then(() => done()));
  });
  afterEach((done) => {
    knex.migrate.rollback(true).then(() => done());
  });
};
describe("database tests", () => {
  if (!process.env.PG_CONNECTION_STRING) return;
  setupDb();
  describe("user queries", () => {
    it("smoke test create user", async () => {
      const user = {
        username: "test",
        password: "nonce",
        email: "",
      };
      const result = await queries.user.insert(user);
      result.should.eql({ username: "test", id: 1, email: "" });
    });
  });
});
