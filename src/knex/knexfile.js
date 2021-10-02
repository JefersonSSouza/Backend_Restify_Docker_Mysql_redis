require('dotenv').config();

module.exports = {
    development:{
        client:'mysql2',
        connection: {
            host : process.env.DATABASE_URL ,
            port : process.env.DATABASE_PORT ,
            user : process.env.DATABASE_USER  ,
            password : process.env.DATABASE_PSW ,
            database : process.env.DATABASE_NAME 

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