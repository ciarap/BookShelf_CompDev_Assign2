 var express = require('express');
    var controller = require('./reviews.controller');

    var router = express.Router();

    router.get('/', controller.index);
    router.post('/', controller.create);
    router.get('/:_id', controller.show);
    router.get('/book/:_id', controller.showBookReviews);
    router.delete('/:_id', controller.destroy);
    router.put('/:_id/upvote', controller.update_upvote);

    module.exports = router;