 var express = require('express');
    var controller = require('./books.controller');

    var router = express.Router();

    router.get('/', controller.index);
    router.get('/top5', controller.showTop);
    router.get('/:_id', controller.show);
    router.post('/', controller.create);
    router.delete('/:_id', controller.destroy);
    router.put('/:_id/votes', controller.update_votes);

    module.exports = router;