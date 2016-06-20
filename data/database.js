(function (database) {

  'use strict';

  var mongo = require('mongodb'),
    client = mongo.MongoClient,
    mongoUrl = 'mongodb://localhost:27017/study-sessions',
    _db = null;

  database.get = function (next) {
    if (!_db) {
      client.connect(mongoUrl, function (err, db) {
        if (err) {
          next(err);
        } else {
          _db = {
            db: db,
            material: db.collection('material'),
            plan: db.collection('plan')
          };
          next(null, _db);
        }
      });
    } else {
      next(null, _db);
    }
  };
}(module.exports));