const express = require('express');

const router = express.Router();

// GET /user 라우터
// router.get('./:id', (req, res) => {
//   res.send('Hello, User');
// });

router.route('/:id')
.get(
  (req, res) => {
    res.send('GET /:id is ' + req.params['id'])
  }
)
.post(
  (req, res) => {
    res.send('POST /:id');
  }
)

module.exports = router;
