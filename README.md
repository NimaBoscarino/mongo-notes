# Week 3 Day 4: State Management and Persistence

**REPO: https://github.com/NimaBoscarino/mongo-notes**

We saw with TinyApp that our data disappears if our server is shut off. This is because our data in TinyApp is stored IN MEMORY. So we want our data to \*persist\*! What we're looking for is a way to separate our data from our application logic. The tool we use for this is... a database!  

The database we're working with right now is **MongoDB**!

### Please take a look at the documentation for mongo:

1. https://docs.mongodb.com/getting-started/shell/introduction/ -- **For the SHELL**

2. http://mongodb.github.io/node-mongodb-native/2.2/quick-start/quick-start/ -- **For the Node Driver**

---  

Mongo... as we'll see, it is just JSON.

It is what we call a **NoSQL** Database

- collections that store documents, which are just JSON objects

    ```
                                        _ document
                                       /
                       _____ collection - document
                      /
       ____  database ----- collection -- document
      /                                \_ document
	server
	      \
	       \____  database ----- collection ...
	        \
	         \____ collection ...
That's it!

There are two interfaces that we'll talk about today:

1. Interface for humans - a command line tool (shell)

2. Interface for other programs - API/Driver

- A **driver** is a specific language or platform-specific library for talking to an API

- e.g. ever see "sound drivers" or "video drivers"? They are libraries written for a specific platform (e.g. a Macbook Pro, a Microsoft Surface, a Samsung S7 phone, etc.) that make it easy for the operating system to talk to the hardware

In our case, we'll see that the Mongo driver makes it easy for Node to talk to MongoDB.

First, open up mongo by typing `mongo` in your Vargrant shell.

Some quick shell commands!

-  `show dbs` // show the databases

-  `use <db>` // switch into a particular database

-  `db.<collection>.find()` // show everything in a collection

-  `db.<collection>.findOne()` // return only one thing

-  `<command>.pretty()` // make the result nice to look at 😊
 
- can also do `find()` with filters!
	- e.g. `find({"user.email": "nima@nima.com" })`
	- if the filter doesn't match anything, then we get nothing back

The mongo docs have an interactive Web mongo shell! Holy moly! See it at the bottom of the "**Getting Started**" page, by clicking on "**Query Documents**"

We can also **write** data.

Let's try an insert with: `db.<collection>.insertOne({...})`
- This returns an acknowledgement (the data was inserted), and the newly created ID of the object. If we try `.findOne()` and filter for that ID, we can see our data.

So that's inserting! We can do `insertOne`, but there is also `insertMany()`, where instead of passing a single object, we can pass in an array of objects to be inserted.

For updates:
- can do `updateOne` or `updateMany` using `$set`... look at the documentation for how this is done, for both the SHELL and the DRIVER! (I'm not putting it here, because I want you to look at the documentation!)

 
 And finally, we can delete. Deletion is done via `.deleteOne()` or `.deleteMany()`. Note that a filter needs to be passed in. {} is the "everything" filter.

---

You've seen that we have to write our Mongo stuff in Node with tons of callbacks. This is because communication with the database takes time, so it happens asynchronously. For some more information on the way NodeJS handles asynchronous stuff, check out this video: https://www.youtube.com/watch?v=8aGhZQkoFbQ

---

For examples of using Mongo in an application, take a look at the `kanye_completed` project. You can start it by running `npm start`. It lets you read lyrics and update them, provided that you have a MongoDB instance with a database called `hiphop`, populated with the data from this project (https://github.com/NimaBoscarino/DataBased). You can unpack the "RawJSON" file to get the JSON objects, and load them into mongo using the \`mongoimport\` tool. **(Message me @nima on Slack (or nima.boscarino@gmail.com) if you have questions!)**

### READ THE DOCUMENTATION!!!
Have fun 🤖💻
