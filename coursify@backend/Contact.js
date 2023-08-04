const mongoose = require ('mongoose') 
const contactData = new mongoose.Schema({
    firstName: { type: String, required: true },
    email: { type: String, required: true },
    state: { type: String, required: true },
    number: { type: String, required: true },
    stream: { type: String, required: true },
    preferredCity: { type: String }
  });
  
const Contact = mongoose.model('contact',contactData)
module.exports = Contact