exports.up = function (knex) {
  return knex.schema.createTable("post", (table) => {
    table.increments("id").primary();
    table.string("url");
    table.string("description");
    table.integer("user").references("id").inTable("user").notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("post");
};
