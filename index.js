const testCollection = new Mongo.Collection(null);

if (Meteor.isClient) {
  testCollection.upsert({
    _id: new Mongo.ObjectID()
  }, {
    $setOnInsert: {
      a: 123
    }
  });
}
