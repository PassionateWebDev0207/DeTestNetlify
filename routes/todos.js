let express = require('express');
let mongo = require('mongoose');
let router = express.Router();

let db = mongo.connect('mongodb://localhost:27017/DeTest', (err, response) => {
  if(err) {
    console.log('err');
  } else {
    console.log('Connected to DB');
  }
});

router.get('/', (req, res, next) => {
  mongo.connection.db.collection('todoList', (err, collection) => {
    collection.find({}).toArray( (err, data) => {
      console.log('todoList >>>', data); // it will print your collection data
      res.json(data);
    })
  })
});

module.exports = router;
