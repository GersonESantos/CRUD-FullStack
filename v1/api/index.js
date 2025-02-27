import express from "express"
import userRoutes from "./routes/users.js"
import cors from "cors"

const app = express()
app.use(express.json())
app.use(cors())

app.use("/", userRoutes)





app.listen(3000, () => {
    console.log('🚀Rodando index.js v0 listening at http://localhost:3000');
  });