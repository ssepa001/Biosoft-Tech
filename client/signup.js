Router.route('/signup');


Template.signup.helpers({
});

Template.signup.events({
  "submit form" (event){
    event.preventDefault();
    const name = event.target.regName.value;
    const email = event.target.regEmail.value;
    const password = event.target.regPass.value;
    const passwordConf = event.target.regPassConf.value;
    const number = event.target.regNum.value;
    const company = event.target.regComp.value;
    const userObject = {
      name: name,
      email: email,
      password: password,
      number: number,
      company: company,
    };

    Accounts.createUser(userObject, function(err){
      if(err)
        console.log(err);
      else{
        Documents.insert({
          name: 'New Doc',
          text: 'Write here...',
          owner: Meteor.userId(),
        });
        console.log("Signup submitted.");
        Router.go('/notebook');
      }
    });
  },
});
