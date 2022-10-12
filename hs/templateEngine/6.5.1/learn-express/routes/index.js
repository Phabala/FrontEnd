const express = require('express');

const router = express.Router();

// GET / 라우터
router.get('/', (req, res) => {
  // res.send('Hello, Express'); // 여기서 성공하면 밑 res.render로 안넘어간다.
  res.render('index', {title: 'Express'});
});

module.exports = router;

router.get('/abc', (req, res) => {
  res.send('GET /abc');
});
router.post('/abc', (req, res) => {
  res.send('POST /abc');
});

router.route('/abc')
  .get((req, res) => {
    res.send('GET /abc');
  })
  .post((req, res) => {
    res.send('POST /abc');
  });
