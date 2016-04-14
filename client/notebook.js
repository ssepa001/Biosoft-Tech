Router.route('/notebook')


Template.notebook.helpers({
  documents(){
    return Documents.find({});
  },

});

Template.notebook.events({
  'click #new-document'(event) {
    const name = $('#new-document-name').val();
    const text = $('#document-text').val();
    if(name){
      Documents.insert({
        name: name,
        text: text,
      }, function(err){
        if (err)
          console.log(err);
        else {
          console.log('sucess');
          $('#new-document-name').val('');
        }
      });
    }
  },
  'click .openNotes'(events) {
    const text = Documents.findOne(this._id);
    console.log('hey' + text);
    $('#document-text').val(text.text);
  },
  'click #delete-document'(event){
    Documents.remove(this._id);
    $('#document-text').val('');
  },
});
