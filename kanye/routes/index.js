var express = require('express');
var router = express.Router();

const songs = [
  {
    title: "old macdonald",
    id: 1,
    lyrics: "had a farm!"
  },
  {
    title: "row row row your boat",
    id: 2,
    lyrics: "gently down the stream"
  },
  {
    title: "baa baa black sheep",
    id: 3,
    lyrics: "have you any wool"
  },
]
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    songs: songs
  });
});

module.exports = router;
