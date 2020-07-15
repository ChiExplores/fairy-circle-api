const knex = require("../index");

const insert = async (user) => {
  return await knex("user")
    .returning(["username", "email", "id"])
    .insert(user)
    .then(([newUser]) => newUser);
};

module.exports = { insert };
