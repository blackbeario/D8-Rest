Articles = new Mongo.Collection("articles");

articlesUrl = 'http://d8.jfraz/articles/rest';

Meteor.startup(function() {
  fetchArticles();
  // Check for new articles every 60 seconds.
  Meteor.setInterval(fetchArticles, 60000);
});

fetchArticles = function() {
  // Get the nodes from the drupal rest url.
  HTTP.get(articlesUrl, {timeout:10000}, function(error, response) {
    // Set global variable for response.
    nodes = response.data;
    if (error) {
      console.log(error);
    } else {
      // console.log( nodes );

      var index, results, node;
      results = [];
      for (index in nodes) {
        node = nodes[index];

        // Search mongo for existing nids.
        nid = Articles.find({
          nid: node.nid
        });

        // Insert in mongo if node doesn't already exist.
        if (!nid.count()) {
          results.push(Articles.insert({
            nid: node.nid,
            title: node.title,
            body: node.body
          }));
        } else {
          results.push(void 0);
        }
      }
    }
  });
}
