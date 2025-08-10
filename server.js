const express = require('express');
const dotenv = require('dotenv').config({path:'.env'});
// require('@dotenvx/dotenvx').config({path: '.env'})

// console.log(`Hello ${process.env.HELLO}`)
// ({path: '.env'});

const PORT = process.env.PORT || '3000';

const app = express()


app.use(express.json());

app.use(express.urlencoded({extended:false}));


// routes
app.get('/', (req, res) => {
    // res.status(200).json({name: 'morpheus', doing: 'coding'})
    res.status(200).send('heeeeeeellooo')
})

const userRouter = require('./routes/user');
app.use('/user', userRouter);



// listening

app.listen(PORT, ()=> {
    console.log(`Listening request on port ${PORT}`)
})