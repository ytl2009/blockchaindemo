var express = require('express');
var router = express.Router();
var async = require('async');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

// router.get('/:page',function (req,res,next) {
//     console.log(req.params.page);
//     res.render(req.params.page,{page:req.params.page});
// })


module.exports = router;
