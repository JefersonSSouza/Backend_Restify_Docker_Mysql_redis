getCompanyes = require('../companies.json')


exports.up = function (knex, Promise) {

    return  knex.schema.createTable('company',function(table){
        table.string('id').notNullable();
        table.string('business_name').notNullable();
        table.string('suffix').notNullable();
        table.string('industry').notNullable();
        table.string('catch_phrase').notNullable();
        table.string('bs_company_statement').notNullable();
        table.string('logo').notNullable();
        table.string('type').notNullable();
        table.string('phone_number').primary()
        table.string('full_address').notNullable();
        table.string('latitude').notNullable();
        table.string('longitude').notNullable();
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());
    })
};

exports.down = function(knex) {
  
    return knex.schema.dropTableIfExists('company');
};
