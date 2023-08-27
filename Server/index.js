const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv').config();
app.use(express.json())

app.use(cors());



app.use('/api/earth-mars-comm',require('./routes/messageRoutes'))

app.listen(process.env.PORT, () => {
    console.log("Listening on PORT :8000");
})
