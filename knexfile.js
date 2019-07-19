module.exports = {
    developement:{
        client:'sqlite3',
        useNullAsDefault:true,
        connection:{
            filename:'./data/tracker.db3'
        },
        migrations:{
            directory:'/data/migrations'
        },
        seeds:{
            diretory:'./data/seeds'
        }
    }
}