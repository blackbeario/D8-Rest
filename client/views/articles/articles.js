Articles = new Mongo.Collection('articles');

Meteor.subscribe('articles');

Template.Articles.helpers({
  articles:function(){
    return Articles.find();
  }
});
