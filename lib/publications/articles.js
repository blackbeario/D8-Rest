Meteor.publish('articles', function() {
  var articles = Articles.find();

  if ( articles ) {
    return articles;
  }

  return this.ready();
});
