// Importa o pacote mysql2
import mysql from 'mysql2';
const mysql = require('mysql2');

// opcoes de conexao com o MySQL
export const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Gabibi89*',
    database: 'bd_tasks'
});
