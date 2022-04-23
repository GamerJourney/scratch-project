const { Pool } = require('pg');

const PG_URI = 'postgres://yghifqnn:AYIs7PIYlcZdDRpH549qDXbH8pks-6K9@isilo.db.elephantsql.com/yghifqnn';

// create a new pool here using the connection string above
const pool = new Pool({
  connectionString: PG_URI
});

// We export an object that contains a property called query which returns the invocation of pool.query() 

// This will be required in the controllers to be the access point to the database
module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  }
};