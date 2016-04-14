Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemaplate: 'notFound',
  yieldRegions: {
    'nav': {to: 'nav'},
    'footer': {to: 'footer'},
  }
})



// Router.map( function(){
//   this.route('footer', {
//     path: '/',
//   });
// });


let loginRequired = function() {
  if(!Meteor.userId()) {
    this.render('nav', {
      to: 'nav'
    });
    this.render('footer',{
      to: 'footer',
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
