var express = require('express');
var router = express.Router();

/* GET users listing. */
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

router.get('/new', function(req, res, next) {
  res.render('lyric_new');
});

router.post('/', function(req, res, next) {
  res.redirect('/');
});

router.get('/:id', function(req, res, next) {
  let foundSong = songs.filter(song => song.id == req.params.id)[0];

  let templateVars = {
    id: req.params.id,
    title: foundSong.title,
    lyrics: foundSong.lyrics
  }
  res.render('lyric', templateVars);
});

router.get('/:id/edit', function(req, res, next) {
  let foundSong = songs.filter(song => song.id == req.params.id)[0];

  let templateVars = {
    id: req.params.id,
    title: foundSong.title,
    lyrics: foundSong.lyrics
  }
  res.render('lyric_edit', templateVars);
});

router.post('/:id/edit', function(req, res, next) {
  res.redirect(`/lyrics/${req.params.id}`);
});

router.post('/:id/delete', function(req, res, next) {
  res.redirect('/');
});

module.exports = router;
