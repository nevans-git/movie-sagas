const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

// Getting data from the database
router.get('/', (req, res) => {
  // Add query to get all genres
  let queryText = `SELECT * FROM "genres"
                  JOIN "movies"
                  ON "movies".genre_id = "genres".id`;
  pool.query(queryText).then((response) => {
    res.sendStatus(response.rows)

  }).catch((error) => {
    console.log('error in GET:', error);
    res.sendStatus(500);
  })
});

module.exports = router;