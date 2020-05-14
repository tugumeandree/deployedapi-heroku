var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/products',(req,res)=>{
  res.send(JSON.stringify([1,2,0]));
})

module.exports = router;
