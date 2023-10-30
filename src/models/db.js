const mongoose = require('mongoose');
const config = require('config');

mongoose
  .connect(config.get('mongodbUri'), {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    autoIndex: true,
  })
  .then(() => {
    console.info('Mongo connected');
  })
  .catch((err) => {
    console.error(err);
    process.exit(-1);
  });
