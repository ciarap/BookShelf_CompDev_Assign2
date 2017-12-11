module.exports = function(app) {
      app.use('/api/books', require('./api/books/index'));
      app.use('/api/authors', require('./api/authors/index'));
		app.use('/api/reviews', require('./api/reviews/index'));
    };