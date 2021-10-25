const express = require('express');
const passport = require('passport');
const router = express.Router();
const path = require('path');
const pool = require('../helper/database');

router.get('/', async function(req, res, next){
    try{
        const education = await pool.query('call getEducation');
        res.render(path.join(__dirname, '../public/index.ejs'), {isLogin: req.isAuthenticated(), education});
    } catch(err){
        console.log(err);
    }
})

module.exports = router;