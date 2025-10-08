const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
  type: { type: String, required: true }, // task | expense | note
  title: { type: String, required: true },
  description: { type: String },          // for task/note
  amount: { type: Number },               // for expense
  category: { type: String },             // for expense/note
  dueDate: { type: Date },                // for task
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Item', ItemSchema);
