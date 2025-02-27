// Importa o pacote mysql2
import mysql from 'mysql2';

// opcoes de conexao com o MySQL
export const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Gabibi89*',
    database: 'bd_tasks'
});
