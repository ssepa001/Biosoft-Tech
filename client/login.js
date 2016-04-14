Router.route('/login');


Template.login.helpers({
  create: function(){

  },
  rendered: function(){

  },
  destroyed: function(){

  },
});

Template.login.events({
  "submit form" (event){
    event.preventDefault();
    const email = event.target.loginEmail.value;
    const password = event.target.loginPass.value;
    Meteor.loginWithPassword(email, password, function(err){
      if(err)
        console.log(err);
      else
        console.log("Login submitted.");
        Router.go('/notebook');

    });
  },
});
