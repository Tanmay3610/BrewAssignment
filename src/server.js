require('app-module-path').addPath(require('path').resolve(__dirname));
require('dotenv-safe').config();
require('models/db');

const express = require('express');

const responseHandlers = require('routes/middleware/response');
const bookRouter = require('routes/book');

const app = express();
app.set('port', process.env.PORT);
// Request Body Parsing
app.use(express.text({ limit: '25mb' }));
app.use(express.urlencoded({ extended: true, limit: '1mb' }));
app.use(express.json({ limit: '5mb' }));

app.use(responseHandlers);
app.use('/book', bookRouter);

app.listen(app.get('port'), () => {
  console.info(`Server started. Listening on port ${app.get('port')}`);
});
