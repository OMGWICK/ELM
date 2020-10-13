const shoppingData = require('./shopping');
const detailData = require('./detail');
const homeData = require('./home');
const searchData = require('./search');
const recommendData = require('./recommend');
const locationData = require('./location');
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => res.send('Hello World!'));
router.get('/shopping', (req, res) => {
  res.send(shoppingData);
});
router.get('/detail', (req, res) => {
  detailData(req.query.id, (err, data) => {
    if (err) {
      return res.send({ err: 0 });
    }
    res.send(JSON.parse(data));
  });
});
router.get('/home', (req, res) => {
  res.send(homeData);
});
router.get('/search', (req, res) => {
  res.send(searchData);
});

router.get('/recommend', (req, res) => {
  res.send(recommendData);
});
router.get('/location', (req, res) => {
  res.send(locationData);
});

module.exports = router;
