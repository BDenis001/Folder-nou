const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('chirie_auto.db');

db.serialize(() => {
  db.run("CREATE TABLE IF NOT EXISTS masini (id INTEGER PRIMARY KEY,  TEXT)");
  db.run("INSERT INTO masini (name) VALUES (?)", ["audi"]);
});

db.close();
