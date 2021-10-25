const express = require('express');
const router = express.Router();
const path = require('path');
const {addMessage} = require('../queries/queries');


router.get('/', async function (req, res){
    res.render(path.join(__dirname, '../public/contact.ejs'), {isLogin: req.isAuthenticated()});
});

router.post('/', async function (req, res){
    addMessage(req);
    res.render(path.join(__dirname, '../public/contact.ejs'), {isLogin: req.isAuthenticated()});
})


module.exports = router;