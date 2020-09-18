exports.up = function(knex) {
    return (knex.schema.createTable('users', (users) => {
        users.increments();
  
        users
          .string('username', 128)
          .notNullable()
          .unique();
      
        users
          .string('password', 128)
          .notNullable();
  
    })
      .createTable('principles', (principles) => {
          principles.increments();
          principles
          .string('problem')
          .notNullable()
          .unique()
          principles.string('diagnosis')
          .notNullable()
          principles.string('change')
          .notNullable()
          .unique()
      }))
      .createTable('user_principles', (userP) => {
        userP
            .integer('principles_id')
            .notNullable()
            .unsigned()
            .references('id')
            .inTable('principles')
            .onUpdate("CASCADE")
            .onDelete("CASCADE");
        userP
            .integer('user_id')
            .notNullable()
            .unsigned()
            .references('id')
            .inTable('users')
            .onUpdate("CASCADE")
            .onDelete("CASCADE");
        tbl.primary(["project_id", "resource_id"]);
      })
  };
  
  exports.down = function(knex) {
      return( knex.schema
        .dropTableIfExists('user_principles')
        .dropTableIfExists("principles")
        .dropTableIfExists("users")
      )
  };