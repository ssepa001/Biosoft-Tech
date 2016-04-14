Router.route('/notebook')


Template.notebook.helpers({
  documents(){
    let docs = Documents.find({owner: Meteor.userId()}).fetch();
    return docs;

  },
  tabs: function () {
    delete Session.keys['activeTab'];
    // Every tab object MUST have a name and a slug!
    var documents = Documents.find({owner: Meteor.userId()}).fetch();
    var tabs = [];
    for (let doc in documents){
      tabs.push({ name: documents[doc].name, slug: documents[doc]._id });
    }
    Session.set('activeTab', 'ikC8nukiME2s93Dee');  //Temp slug id to see if works for tab activation
    return tabs;
  },
  activeTab: function () {
    // Use this optional helper to reactively set the active tab.
    // All you have to do is return the slug of the tab.

    // You can set this using an Iron Router param if you want--
    // or a Session variable, or any reactive value from anywhere.

    // If you don't provide an active tab, the first one is selected by default.
    // See the `advanced use` section below to learn about dynamic tabs.
    console.log(Session.get('activeTab'));
    return Session.get('activeTab'); // Returns "people", "places", or "things".
  }
});

Template.notebook.events({
  'click #new-document'(event) {
    const name = $('#new-doc-name').val();
    if(name){
      Documents.insert({
        owner: Meteor.userId(),
        name: name,
        text: '',
      }, function(err){
        if (err)
          console.log(err);
        else {
          console.log('sucess');
          $('#new-doc-name').val('');
        }
      });
    }
  },
  'click #update'(event){
    const text= $('#'+this._id).val();
    Documents.update(this._id, {
      $set:{text: text},
    });

  },
  'click .openNotes'(event) {
    const text = Documents.findOne(this._id);
    $('#' + this._id).val(text.text);
  },
  'click #delete-document'(event){
    Documents.remove(this._id);
    $('#' + this._id).val('');
  },
});

ReactiveTabs.createInterface({
  template: 'basicTabs',
  onChange: function (slug, template) {
    // This callback runs every time a tab changes.
    // The `template` instance is unique per {{#basicTabs}} block.
    //console.log('[tabs] Tab has changed! Current tab:', slug);
    //console.log('[tabs] Template instance calling onChange:', template);
  }
});
