import express from 'express'
import morgan from 'morgan'
import acronimeRouter from './routes/routes'

const app = express()
app.use(morgan('dev'))

// middleware

app.use(express.json())
app.use(express.urlencoded({ extended: false }));

app.use(acronimeRouter)

app.listen(3000)

console.log(`Server on port ${3000}`)


export default app