const mongoose = require ('mongoose')
const urlData = new mongoose.Schema({

    url:{
        type: String,
        require: true
    }

})

const Slider = mongoose.model('sliderData',urlData)
module.exports = Slider