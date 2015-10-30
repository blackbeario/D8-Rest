Router.route('/articles', function () {
  this.render('Articles');
  // subscriptions: function() {
  //   return Meteor.subscribe('articles');
  // }
}, {
  name: 'articlesView'
});
