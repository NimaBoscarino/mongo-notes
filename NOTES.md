# W 3 D 4: DATA PERSISTENCE

## TinyApp

- CRUD ACTIONS:
  
- create a user
- edit one tiny url
- show a user's urls
- delete a url
- create a url

- log in


To use tinyapp:

`node server.js`
`npm run start`

TinyApp stores its data in memory
- we stored our data as an object in javascript, and when our program finishes running the object goes away.
- it is not PERSISTENT

## FULL STACK DEVELOPMENT

- FRONT
  - CSS, HTML, client side JS, AJAX, fancy cool user-facing things
- BACK
  - serves specific pages or responses based on different routes (GET /dogs) and also based on different parameters (e.g. who is logged in?)
  - stores and manages the data

Youtube
Wikipedia

- adding data, editing data, removing data

## WE WANT TO STORE THE DATA SOMEWHERE OTHER THAN OUR SERVER

Qualifications for good data storage:

1. Want the data to persist
2. Want to have some "smart" interactions with the data
   1. Asking questions. How many of a thing? Find me a particular thing.
3. I want multiple applications to share the same source of data

ENTER ....THE DATABASE

A SEPARATE THING THAT HOLDS YOUR DATA THAT A SERVER CAN TALK TO.

INTERFACE ------- APPLICATION + LOGIC ------ DATA
Pretty!   -------- "user does not exist" ---- everything we need
                    "you cant do that"

- writing to a text file
  - lines of text
  name, age, potatopreference
  Nima, 23, mashed
  Jane, 10000, vapour

- writing JSON in a text file

```
[
  {
    name: 'Nima',
    age: 23,
    potatopreference: 'mashed',
    options: {
      dasd: {

      }, 
      Adasd: {

      }
    }
  }
]
```

DATABASE MANAGEMENT SYSTEM

MONGODB
## NO SQL DATABASE

MySQL
MariaDB
Postgres <---- the one that you'll learn next week
CouchDB
Oracle
Cassandra



Mongo structure:


- SERVER - MONGO SERVER PROGRAM
  - databases
    - collections
      - documents



- WAREHOUSE
  - ROOM
    - FOLDERS
      - PAPERS

db.artists.find({genres: "pop rap"}).count()




