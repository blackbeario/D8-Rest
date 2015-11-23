Router.configure({
  layoutTemplate: 'Layout'
});

// All articles.
Router.route('/articles', function () {
  this.render('Articles');
}, {
  name: 'articles'
});

// Individual articles.
Router.route('/article/:_id', {
  name: 'article',
  data: function() {return Articles.findOne(this.params._id);}
});

// Home view.
Router.route('/', function () {
  this.render('Home');
}, {
  name: 'home'
});
