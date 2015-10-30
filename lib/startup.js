// Get the contents of a json url
Meteor.startup(function() {

  // Here, we make sure that our collection MaintMode is available and is
  // actually a Mongo collection. We could just do if ( MaintMode ) here, but
  // this allows us to be certain our variable is a collection. Hat tip to
  // @chicagogrooves (Dean Radcliffe) for this technique!

  if ( typeof Articles == "object" && Articles.constructor == Mongo.Collection ) {

    // Add default maintenance mode document if missing.
    // if (!Articles.find().count()) {
      Meteor.methods({
        'getArticles':function(){
          if (Meteor.isServer) {
            return Meteor.http.call('GET','http://d8.jfraz/articles/rest')
          }
        }
      })
      // Meteor.methods({
      //   'getArticles':function(){
      //     return Meteor.http.call('GET','http://d8.jfraz/articles/rest'),function(err,results) {
      //       var mycontent = results.data;
      //       console.log(mycontent);
      //       Articles.insert(mycontent);
      //     }
      //   }
      // });
      Articles.insert( { status: false, message: "This site is currently under maintenance. We should be back shortly. Thank you for your patience." } );
    // }

  }
});
