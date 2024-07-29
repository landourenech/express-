const express = require('express');

// connexion à la bibiothéque mysql pour la  base des données 
const mysql = require('mysql2');

// connexion au package pour traiter les données qui viennent de html et  JSON 
const bodyParser = require('body-parser');
// connexioon au framework  exopress 
const app = express();

// connexion au port
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



// connexion à la base des données 

// liésant entre api et le server
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Root',
    database: 'express'
});


// récuperation de la base de  la base de données
connection.connect((err) => {
    if (err) {
        console.error('Erreur de connexion à MySQL:', err);
        return;
    }
    console.log("C'est bon");
});

app.listen(port, () => {
    console.log(`Serveur démarré sur le port ${port}`);
});

