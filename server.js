const express = require("express");
const morgan = require("morgan");
const colors = require("colors");

// Route files
const bootcamps = require('./routes/bootcamps');
const connectDB = require("./config/db");
const errorHandler = require("./middleware/error");

const app = express();

// body parser
app.use(express.json());

connectDB();

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

app.get('/', (req, res) => {
    res.send("API is running");
})

// Mount routers
app.use('/api/v1/bootcamps', bootcamps);

app.use(errorHandler);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow);
})
