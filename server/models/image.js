const mongoose = require('mongoose')

const imageSchema = new mongoose.Schema({
    name: {type: String, required: true},
    description: {type: String, required: true},
    img: {type: String, required: true}
})

module.exports = mongoose.model('image', imageSchema)
