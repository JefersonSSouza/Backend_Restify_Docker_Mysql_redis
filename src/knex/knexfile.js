require('dotenv').config();

module.exports = {
    development:{
        client:'mysql2',
        connection: {
            host : process.env.DATABASE_URL || '127.0.0.1',
            port : process.env.DATABASE_PORT || 3306,
            user : process.env.DATABASE_USER  || 'root',
            password : process.env.DATABASE_PSW || 'root',
            database : process.env.DATABASE_NAME || 'database_test'

        },
        migrations:{
            directory: __dirname + '/migrations'
        },seeds:{
            directory: __dirname + '/seeds'
        },
        production:{
            client:'mysql2',
            connection: process.env.DATABASE_URL,
            migrations:{
                directory: __dirname + '/migrations'
            },seeds:{
                directory: __dirname + '/seeds'
            }
        }
    }
}