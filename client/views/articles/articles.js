Articles = new Mongo.Collection('articles');

Meteor.subscribe('articles');

Template.Articles.helpers({
  articles:function(){
    return Articles.find();
  }
});

Template.Tabs.events({
  "click .fav": function(e, t) {
    var nid, node;
    e.preventDefault();
    nid = e.currentTarget.id;
    console.log(nid);
    node = Articles.findOne({
      'nid': nid
    });
    // if (status.field_completed) {
    //   return IonPopup.confirm({
    //     title: 'Mark as incomplete?',
    //     template: "This will reset completion date for " + objective.title,
    //     onOk: function() {
    //       return Meteor.call('toggleObjective', status._id);
    //     },
    //     onCancel: function() {}
    //   });
    // } else {
      return IonPopup.confirm({
        title: 'THE HOTNESS',
        template: "Mark " + nid + " as the hotness?",
        onOk: function() {
          return "Marked as favorite"/*Meteor.call('toggleObjective', status._id);*/
        },
        onCancel: function() {}
      });
    // }
  }
});

Template.Tabs.events({
  "click .beer": function(e, t) {
    var nid, node;
    e.preventDefault();
    nid = e.currentTarget.id;
    console.log(nid);
    node = Articles.findOne({
      'nid': nid
    });
    // if (status.field_completed) {
    //   return IonPopup.confirm({
    //     title: 'Mark as incomplete?',
    //     template: "This will reset completion date for " + objective.title,
    //     onOk: function() {
    //       return Meteor.call('toggleObjective', status._id);
    //     },
    //     onCancel: function() {}
    //   });
    // } else {
      return IonPopup.confirm({
        title: 'THIRSTY?',
        template: "Yeah, it's time for a beer.",
        onOk: function() {
          return "Must be 5:00"/*Meteor.call('toggleObjective', status._id);*/
        },
        onCancel: function() {}
      });
    // }
  }
});
