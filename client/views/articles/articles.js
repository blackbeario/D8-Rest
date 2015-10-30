Template.Articles.helpers({
  articles:function(){
    Meteor.call('getArticles',function(err,results){
      console.log(results);
      title = results.data[1].title;
      // body = results.data[0].body[0].value;
      Session.set('articles',title);
    })
    return Session.get('articles');
  }
});
