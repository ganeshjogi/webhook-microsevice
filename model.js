const mongoose = require('mongoose');

// schema for web hooks
const hookSchema = new mongoose.Schema(
    {
        targetUrl:{
            type: String,
            required: true
        }
    }
);

// model created for web hook schema
const Hook = mongoose.model('Hook',hookSchema)

module.exports = Hook;