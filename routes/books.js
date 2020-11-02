var express = require('express');
var router = express.Router();
var books  = require('../resources/books');

router.get('/add', function (req, res, next) {
    res.render('addBooks', {
        title: 'Add book',
    });
});

router.post('/save', function (req, res) {
    books.push({...req.body, _id: `00${books.length + 1}`});
    res.redirect('/');
});

router.get('/remove/:index', function (req, res) {
    books.splice(req.params.index, 1);
    res.redirect('/');
});

router.get('/edit/:_id', function (req, res) {
    const book = books.find((book) => book._id === req.params._id);
    res.render('editBooks', {
        title: 'Edit book',
        book
    });
})

module.exports = router;
