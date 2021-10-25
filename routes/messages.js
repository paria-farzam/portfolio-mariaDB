const express = require('express');
const router = express.Router();
const path = require('path');
const { nextTick } = require('process');
const {getMessages} = require('../queries/queries');

router.get('/', checkAuthentication, async function(req, res){
    let messages = await getMessages();
    res.render(path.join(__dirname,'../public/messages.ejs'), {messages});
})

function checkAuthentication(req, res, next) {
    if (!req.isAuthenticated()) {
      res.redirect('/login');
      return next();
    }
    return next();
}

module.exports = router;