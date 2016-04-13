

Template.nav.helpers({
  create: function(){

  },
  rendered: function(){

  },
  destroyed: function(){

  },
});

Template.nav.events({
  "click .logout": function(event){
    event.preventDefault();
    Meteor.logout();
  }
});
