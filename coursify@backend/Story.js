const mongoose = require ('mongoose')
const storyData = new mongoose.Schema({

    Name:{
        type: String,
        require: true
    },
    story:{
        type: String,
        require: true
    }

})

const Stories = mongoose.model('storyData',storyData)
module.exports = Stories