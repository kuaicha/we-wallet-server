var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/cwqry', function(req, res, next) {
	var params = url.parse(req.url, true).query;
    var userid = params.uid;

    kuaichadb.query(
        "SELECT `coinid`, `address`, cast(`balance` as decimal(10,4)) as `balance` from `address` where `addressid`"
        +" in (SELECT `addressid` FROM `subscription` WHERE `userid` = " + userid +" )",
        function (error, results, fields) {
            //if (error) throw error;
            //console.log('The result is: ', results);
           	addressRows = results;
           	res.json(addressRows)
        }
    )    
  
});

module.exports = router;