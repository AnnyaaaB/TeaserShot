const mongoose = require("mongoose")

const ContactSchema = new mongoose.Schema({
    name: String,
    email: String,
    company: String,
    inquiry: String,
    phone: String,
    linkedin: String,
    message: String


})


const ContactModel = mongoose.model("Contact", ContactSchema)
module.exports = ContactModel