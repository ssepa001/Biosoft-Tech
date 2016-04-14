Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemaplate: 'notFound',
  yieldRegions: {
    'nav': {to: 'nav'},
  }
})



// Router.map( function(){
//   this.route('main', {
//     path: '/',
//   });
// });


let loginRequired = function() {
  if(!Meteor.userId()) {
    this.render('nav', {
      to: 'nav'
    });
    this.render('login');
  }
  else{
    this.next();
  }
}

Router.onBeforeAction(loginRequired, {
  except: [
    'home',
    'login',
    'signup',
  ]
});
