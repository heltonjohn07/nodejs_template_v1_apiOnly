const path = require('path')


module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './src/database/db.sqlite'
    },
    
    useNullAsDefault: true,

    
    migrations:{
      directory: path.resolve(__dirname,'src', 'database' ,'migrations') 
    },

    seeds:{
      directory: path.resolve(__dirname,'src', 'database' ,'seeds') 
    }
  },

  production: {
    client: 'pg',
    connection: {
      host : '127.0.0.1',
      user : 'postgres',
      password : '123456',
      database : 'api_templete_bd'
    },
    pool: {
      min: 2,
      max: 10
    },
    
    migrations:{
      directory: path.resolve(__dirname,'src', 'database' ,'migrations') 
    },

    seeds:{
      directory: path.resolve(__dirname,'src', 'database' ,'seeds') 
    }
  }

};
