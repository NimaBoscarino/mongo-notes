const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

var express = require('express');
var router = express.Router();

const url = 'mongodb://localhost:27017';
// Database Name
const dbName = 'hiphop';

// Use connect method to connect to the server
MongoClient.connect(url, function(err, client) {
  assert.equal(null, err);

  console.log("Connected successfully to server");

  const db = client.db(dbName);

  // Get the documents collection
  const collection = db.collection('lyrics');

  // const songs = [
  //   {
  //     title: "old macdonald",
  //     id: 1,
  //     lyrics: "had a farm!"
  //   },
  //   {
  //     title: "row row row your boat",
  //     id: 2,
  //     lyrics: "gently down the stream"
  //   },
  //   {
  //     title: "baa baa black sheep",
  //     id: 3,
  //     lyrics: "have you any wool"
  //   },
  // ]

  router.get('/new', function(req, res, next) {
    res.render('lyric_new');
  });

  router.post('/', function(req, res, next) {
    res.redirect('/');
  });

  router.get('/:id', function(req, res, next) {
    collection.find({"genius_id": parseInt(req.params.id)}).toArray(function(err, docs) {
      const songs = docs.map(doc => ({
        title: doc.title,
        lyrics: doc.text,
        id: doc.genius_id
      }))
      
      let foundSong = songs.filter(song => song.id == req.params.id)[0];

      let templateVars = {
        id: req.params.id,
        title: foundSong.title,
        lyrics: foundSong.lyrics
      }
      res.render('lyric', templateVars);
    });
  });

  router.get('/:id/edit', function(req, res, next) {
    collection.find({"genius_id": parseInt(req.params.id)}).toArray(function(err, docs) {
      const songs = docs.map(doc => ({
        title: doc.title,
        lyrics: doc.text,
        id: doc.genius_id
      }))
      
      let foundSong = songs.filter(song => song.id == req.params.id)[0];

      let templateVars = {
        id: req.params.id,
        title: foundSong.title,
        lyrics: foundSong.lyrics
      }
      res.render('lyric_edit', templateVars);
    });
  });

  router.post('/:id/edit', function(req, res, next) {
    console.log(req.body)
    collection.updateOne({"genius_id": parseInt(req.params.id)}
      , { $set: { text : req.body.edited_lyric } }, function(err, result) {
      assert.equal(err, null);
      assert.equal(1, result.result.n);
      res.redirect(`/lyrics/${req.params.id}`);
    });  
  });

  router.post('/:id/delete', function(req, res, next) {
    res.redirect('/');
  });
});


module.exports = router;
