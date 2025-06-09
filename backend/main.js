const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('chirie_auto.db');

db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS masini (
    id INTEGER PRIMARY KEY AUTOINCREMENT,  
    model TEXT, 
    pretPZ REAL,
    detaliiMotor TEXT,
    anul INTEGER
  )`);

  // Inserare corectă
  /* db.run(
    `INSERT INTO masini (marca, model, anul, pretPZ, disponibil) VALUES (?, ?, ?, ?, ?)`,
    ["Audi", "A7", 2021, 120, 1]
  );*/


  db.run(`
  CREATE TABLE IF NOT EXISTS Inchirieri (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    id_masina INTEGER,
    id_client INTEGER,
    data_inceput DATE,
    data_sfarsit DATE,
    FOREIGN KEY (id_masina) REFERENCES masini(id),
    FOREIGN KEY (id_client) REFERENCES User(id)
  )`);

  db.run(`CREATE TABLE IF NOT EXISTS User(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nume TEXT,
    email TEXT,
    parola TEXT
  )`);

});

db.close();
