 var express = require('express');
    var controller = require('./authors.controller');

    var router = express.Router();

    router.get('/:_id', controller.show);
    router.post('/', controller.create);
    router.get('/', controller.index);
    router.post('/:id/authorReviews', controller.add_authorReview);
   router.get('/name/:authorName', controller.getAuthorByName);

    module.exports = router; 