const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

// GET flow GETTING data from the database
router.get('/', (req, res) => {
  // Add query to get all genres
  // joining genres table and movies table
  let queryText = `SELECT * FROM "genres"`;
  pool.query(queryText).then((response) => {
    res.sendStatus(200)

  }).catch((error) => {
    console.log('error in GET:', error);
    res.sendStatus(500);
  })
});

module.exports = router;