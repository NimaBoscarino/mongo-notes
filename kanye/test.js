const MongoClient = require('mongodb').MongoClient;

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'hiphop';

// Create a new MongoClient
const client = new MongoClient(url);

const insertDocuments = function(db, callback) {
  // Get the documents collection
  const collection = db.collection('songs');
  // Insert some documents
  collection.insertMany([
    {title: 'I love to code', artist: 'Death Grips'}
  ], function(err, result) {
    console.log("Inserted a document into the collection");
    callback(result);
  });
}

// Use connect method to connect to the Server
client.connect(function(err) {
  console.log("Connected successfully to server");

  const db = client.db(dbName);

  const artists = db.collection('artists');
  const songs = db.collection('songs');

  // having a modularized function for inserting
  insertDocuments(db, (result) => {
    console.log('HERE IS THE RESULT', result)
  })

  songs.find({'title': 'Mercy'}).toArray(function(err, docs) {
    if (err) {
      console.log('there was an error')
    }

    console.log("Found the following records");
    console.log(docs);
  });

  console.log(db.artists.findOne({name: "Kanye West"}))

  // client.close(); // What does this line of code do? Uncomment it and find out!
});