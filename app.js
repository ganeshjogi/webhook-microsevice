const express = require('express');
const adminRouter = require('./routes/adminRouter')
const triggerRouter = require('./routes/triggerRouter')


const app = express();

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }))

// parse application/json
app.use(express.json())

// trigger routes
app.use('/ip',triggerRouter);

// admin routes
app.use('/admin',adminRouter);

module.exports = app;
