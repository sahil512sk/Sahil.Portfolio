const mongoose = require('mongoose');

const workSchema = new mongoose.Schema({
  company: {
    type: String,
    required: false
  },
  position: {
    type: String,
    required: false
  },
  start_date: {
    type: String,
    required: false
  },
  end_date: {
    type: String,
    required: false
  },
  current: {
    type: Boolean,
    default: false
  },
  work_description: {
    type: String,
    required: false
  }
});

module.exports = mongoose.model('Work', workSchema);
