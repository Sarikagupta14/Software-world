
const mongoose = require ('mongoose')
const categoryData = new mongoose.Schema({

    Image:{
        type: String,
        require: true
    },
    Name:{
        type: String,
        require: true
    }

})

const Categories = mongoose.model('categoryData',categoryData)
module.exports = Categories