const mongoose = require('mongoose');

const { Schema } = mongoose;
const BookModel = mongoose.model(
  'book',
  new Schema(
    {
      bookId: {type: Number},
      title: { type: String },
      author: { type: String },
      summary: { type: String },
      isDeleted: { type: Boolean, default: false },
    },
    { timestamps: { createdAt: 'systemCreatedAt', updatedAt: 'systemUpdatedAt' } }
  ),
  'book'
);

module.exports = {
  findOne: ({ query, projection }) => BookModel.findOne(query, projection).lean(),

  find: ({ query, projection }) => BookModel.find(query, projection).lean(),

  create: ({ insertDict }) => new BookModel(insertDict).save(),

  updateOne: ({ query, updateDict }) => BookModel.updateOne(query, updateDict),
};
