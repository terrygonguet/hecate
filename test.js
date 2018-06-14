const MongoClient = require('mongodb').MongoClient;
const url = `mongodb+srv://admin:rucr9tsmub@webwidecomments-tmlbl.mongodb.net/test`;
const _ = require('lodash');

function instantiate(obj) {
  return _.mapValues(obj, function (val, key) {
    if (_.isArray(val)) {
      if (_.isNumber(val[0])) {
        return _.random(val[0], val[1], true);
      } else {
        return val[_.random(0, val.length, false)];
      }
    } else if (_.isObject(val)) {
      return instantiate(val);
    } else {
      return val;
    }
  });
}

(async function () {
  let data = require('./testdata');
  let urls = require('./urls');

  let client = await MongoClient.connect(url);
  let db = await client.db('hecate');
  let coll = await db.collection('area');

  for (let url of urls) {
    let flora = [];

    for (var i = 3; i < 10; i++) {
      let familyName = _.keys(data.flora)[_.random(0, _.keys(data.flora).length - 1, false)];
      let family = data.flora[familyName];
      let baseprops = _.omit(family, ['species']);
      let speciesName = _.keys(family.species)[_.random(0, _.keys(family.species).length - 1, false)];
      let species = family.species[speciesName];

      let props = _.merge({}, baseprops, species, {
        family: familyName,
        species: speciesName,
      });
      flora.push(instantiate(props));
    }

    await coll.insertOne({
      url,
      flora,
      fauna: {},
      universe: "5b1fcc18df49dc349886160c",
    });
  }

})()
.then(function (...a) {
    console.log(a);
    process.exit();
  })
  .catch(function (...a) {
    console.error(a);
    process.exit();
  });