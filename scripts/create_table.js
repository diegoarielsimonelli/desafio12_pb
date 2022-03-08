const {optionsMYSQL, optionsSQLite } = require( '../options/databases' );

const knexMYSQL = require('knex')(optionsMYSQL);
const knexSqlite = require('knex')(optionsSQLite);

knexMYSQL.schema.createTable('products', (table) =>{
    table.increments('id');
    table.string('nombre');
    table.integer('precio');
    table.string('foto');
})
    .then(() => console.log('MYSQL Table Created'))
    .catch((error) => { console.error(error); throw error;})
    .finally (()=> knexMYSQL.destroy()) 

knexSqlite.schema.createTable('tabla_mensaje', (table) =>{
    table.string('email');
    table.string('texto')
    table.string('fechaHora');
})
    .then(() => console.log('SQLite Table Created'))
    .catch((error) => { console.error(error); throw error;})
    .finally (()=> knexSqlite.destroy())