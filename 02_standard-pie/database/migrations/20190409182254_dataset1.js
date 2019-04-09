exports.up = function(knex) {
    return knex.schema.createTable('population by country', table => {
        //id
        table.increments();
        // name
        table.string('country', 188).notNullable().unique();
        table.integer('population').notNullable();
    })
    };
    
    exports.down = function(knex) {
    return knex.schema.dropTableIfExists('population by country')
    };
