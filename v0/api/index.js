import express from 'express';
import cors from 'cors';
import userRoutes from './routes/users.js';

const app = express();
app.use(express.json());
app.use(cors());
// app.use('/', userRoutes);

app.get("/", (req, res) => {
  connection.query("SELECT COUNT(*) users FROM users", (err, results) => {
      if (err) {
          res.send('MySQL connection error.');
      }
      res.send('numero de users: ' + results[0].users);
  })
});



app.listen(3000, () => {
    console.log('🚀Rodando index.js v0 listening at http://localhost:3000');
  });