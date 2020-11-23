var express = require('express');
var router = express.Router();

var db = require('../queries');
/* GET home page. */

router.get('/api/item/:key', db.getItem);
router.post('/api/item', db.createItem);
router.put('/api/item/:id', db.updateItem);
router.delete('/api/item/:id', db.removeItem);


module.exports = router;