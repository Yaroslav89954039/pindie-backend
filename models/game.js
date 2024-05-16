const mongoose = require('mongoose');
// Импорт модели для связывания 
const categoryModel = require('./category');

const gameSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  developer: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  },
  users: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  }],
  // Добавляем поле для списка категорий
  categories: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "category",
  }],
});

const game = mongoose.model('game', gameSchema);
module.exports = game;