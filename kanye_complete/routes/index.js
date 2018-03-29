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
  const collection = db.collection('songs');
  
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

  /* GET home page. */
  router.get('/', function(req, res, next) {
    collection.find({"genius_primary_artist.name": "Kanye West"}).toArray(function(err, docs) {
      const songs = docs.map(doc => ({
        title: doc.title,
        id: doc.genius_id
      }))
      
      res.render('index', {
        songs: songs
      });
    });
  });
});

module.exports = router;