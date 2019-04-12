exports.up = function(knex) {
    return knex.schema.createTable('pop', table => {
        //id
        table.increments();
        // name
        table.string('country', 188).notNullable().unique();
        table.integer('population').notNullable();
    })
    };
    
    exports.down = function(knex) {
    return knex.schema.dropTableIfExists('pop')
    };
