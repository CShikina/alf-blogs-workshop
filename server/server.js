require('dotenv').config();
const express = require('express');
const app = express();
const connectDb = require('./config/db');
const { errorHandler } = require('./middleware/errorMiddleware')

//connect to database
connectDb();

app.use(express.static('public'))

app.get('/AWS', (req, res) => {
    res.status(200).json({ message: 'Hello AWSCC'});
})

//post routes:
const postRouter = require('./routers/postRouter')
app.use('/posts', postRouter)

// Use Error Middleware
app.use(errorHandler)

app.listen(8080, () => {
    console.log('Server is running in port 8080');
})

