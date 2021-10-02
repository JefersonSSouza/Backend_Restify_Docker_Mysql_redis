
exports.up = function(knex) {
    return  knex.schema.createTable('desktop',function(table){
        table.string('id').notNullable();
        table.string('platform').notNullable();
        table.string('type').notNullable();
        table.string('os').notNullable();
        table.string('ip').notNullable();
        table.string('cp_phone_number').notNullable();
        table.foreign('cp_phone_number').references('company.phone_number').onDelete('CASCADE').onUpdate('CASCADE');
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());
    })
  
};

exports.down = function(knex) {
  
    return knex.schema.dropTableIfExists('desktop');
};
