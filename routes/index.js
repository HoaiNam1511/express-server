var express = require('express');
const pool = require('../config/db');
var router = express.Router();

/* GET home page. */
router.get('/', async function(req, res, next) {
  const result = pool.query("select * from todos")
  res.send((await result).rows)
});

router.post("/", function(req, res, next) {
  const result = pool.query(`insert into todos (title) values('${req.body.title}')`)
  res.send("Create success")
})

module.exports = router;
