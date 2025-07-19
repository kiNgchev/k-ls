const express = require('express');
const {to_url, to_hash} = require("../utils/hash_utils");
const router = express.Router();

let title = "Welcome to K-LS"

router.get('/:hash', function(req, res, next) {
  const url = to_url(req.params.hash);
  res.redirect(url);
})

router.get('/', function(req, res, next) {
  res.render('index', { title: title, hash: to_hash("https://kingchev.net")});
})

router.post('/', function(req, res, next) {
  res.render('index', { title: title, hash: to_hash(req.body.url)});
})

module.exports = router;
