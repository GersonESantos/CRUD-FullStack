import express from 'express';
import cors from 'cors';
const app = express();
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('CRUD Full Stack com Node');
});


app.listen(3000, () => {
    console.log('🚀Rodando index.js v0 listening at http://localhost:3000');
  });