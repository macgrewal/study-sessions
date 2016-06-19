(function(data) {

  var seedData = require('./seedData');
  var database = require('./database');


  data.material = function(options, next) {

    var filter = {},
      ObjectId = require('mongodb').ObjectId;

    if (options.tags) {
      filter.tags = {
        $in: options.tags
      };
    }

    if (options.type) {
      filter.type = new RegExp('^' + options.type + '$', 'i');
    }

    if (options.id) {
      filter = {"_id" : new ObjectId(options.id.toString())};
    }

    database.get(function(err, db) {
      if (err) {
        next(err);
      } else {
        db.material.find(filter).toArray(function(err, results) {
          if (err) {
            next(err);
          } else {
            next(null, results);
          }
        });
      }
    });
  };

  function seedDatabase() {
    database.get(function(err, db) {
      if (err) {
        console.log('Failed to seed database: ' + err);
      } else {
        db.material.count(function(err, count) {
          if (count === 0) {
            console.log('Seeding collection "material"');
            seedData.material.forEach(function(item) {
              db.material.insert(item, function(err) {
                if (err) console.log('Failed to insert material into database');
              });
            });
          } else {
            console.log('Collection "material" already seeded');
          }
        });
      }
    });
  };

  data.insert = function (item, next) {
    database.get(function (err, db) {
      if (err) {
        next(err);
      } else {
        db.material.insert(item, function (err) {
          if (err) {
            next(err);
          } else {
            next(null, item);
          }
        });
      }
    });
  };

  seedDatabase();

})(module.exports);
