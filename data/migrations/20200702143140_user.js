exports.up = function (knex) {
  return knex.schema.createTable("user", (table) => {
    table.increments("id").primary(); // id field
    table.string("username").notNullable();
    table.string("email");
    table.string("password").notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("user");
};
