(function (data) {

  'use strict';

  var seedData = require('./seedData'),
    database = require('./database');


  data.material = function (options, next) {

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

    if (options.id && options.id.trim() !== '') {
      filter = {"_id": new ObjectId(options.id.toString())};
    }

    database.get(function (err, db) {
      if (err) {
        next(err);
      } else {
        db.material.find(filter).toArray(function (err, results) {
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
    database.get(function (err, db) {
      if (err) {
        console.log('Failed to seed database: ' + err);
      } else {
        db.material.count(function (err, count) {
          if (count === 0) {
            console.log('Seeding collection "material"');
            seedData.material.forEach(function (item) {
              db.material.insert(item, function (err) {
                if (err) {
                  console.log('Failed to insert material into database');
                }
              });
            });
          } else {
            console.log('Collection "material" already seeded');
          }
        });

        db.plan.count(function (err, count) {
          if (count === 0) {
            console.log('Seeding collection "plan"');
            seedData.plan.forEach(function (item) {
              db.plan.insert(item, function (err) {
                if (err) {
                  console.log('Failed to insert plan into database');
                }
              });
            });
          } else {
            console.log('Collection "plan" already seeded');
          }
        });
      }
    });
  }

  data.insertMaterial = function (item, next) {
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

  data.insertPlan = function (item, next) {
    database.get(function (err, db) {
      if (err) {
        next(err);
      } else {
        db.plan.insert(item, function (err) {
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

}(module.exports));
