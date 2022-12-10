
const imageRouter = require('./image');

function route(app) {

  app.use('/image', imageRouter);

}

module.exports = route;
