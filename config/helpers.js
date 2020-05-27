const Mysqli = require('mysqli');

let conn = new Mysqli({
    host: 'localhost', // IP/domain name 
    post: 3306, // port, default 3306
    user: 'joshua', // username
    passwd: 'McBank$$', // password
    db: 'mega_shop'
});

let db = conn.emit(false, '');

module.exports = {
    database: db,
};
