const mongoose = require('mongoose');
const projectSchema = new mongoose.Schema({
    title: String,
    description: String,
    github: String,
    live: String,
});
module.exports = mongoose.model('Project', projectSchema);