const {open} = require('sqlite');
const sqlite3 = require('sqlite3');

let db = null;

async function connectionSQL(){
    if(db) return db;
    
    db = await open({
        filename: './banco.db',
        driver: sqlite3.Database
    });

    await db.exec(`
        CREATE TABLE IF NOT EXISTS users(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nome TEXT NOT NULL,
        email TEXT NOT NULL UNIQUE,
        data TEXT DEFAULT (datetime('now','localtime'))
        );
    
        `)
    
    return db;
}

module.exports = connectionSQL;