Articles = new Mongo.Collection('articles');

if (Meteor.isClient) {
  // This code only runs on the client
  Template.body.helpers({
    articles: function () {
      return Articles.find({});
    }
  });
}
