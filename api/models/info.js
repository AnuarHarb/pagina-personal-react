const mongoose = require('mongoose');

const infoSchema = mongoose.Schema({
  nombre: String,
  apellido: String,
  edad: Number
})

module.exports = mongoose.model('Info', infoSchema);
