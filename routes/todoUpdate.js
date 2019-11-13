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

router.put('/(:userId)/update/completed', (req, res, next) => {
  mongo.connection.db.collection('todoList').findOneAndUpdate({id: parseInt(req.params.userId, 10)}, {$set: {completed: true}}, {}, (err, result) => {
    if (!err)
      res.json(result);
  });
});

router.put('/(:userId)/update/uncompleted', async (req, res, next) => {
  mongo.connection.db.collection('todoList').findOneAndUpdate({id: parseInt(req.params.userId, 10)}, {$set: {completed: false}}, {}, (err, result) => {
    if (!err)
      res.json(result);
  });
});

module.exports = router;
