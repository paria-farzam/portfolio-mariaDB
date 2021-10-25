const express = require('express');
const router = express.Router();
const path = require('path');
const {getResumeInfos} = require('../queries/queries');

router.get('/', checkAuthentication, async function(req, res){
    let {education, experience} = await getResumeInfos();
    res.render(path.join(__dirname, '../public/resume.ejs'), {education, experience, isLogin: req.isAuthenticated()});
})

function checkAuthentication(req, res, next) {
    if (req.isAuthenticated()) {
        console.log('res:yes')
      return next();
    }
    console.log('res:no');
    return next();
}

module.exports = router;