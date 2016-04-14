import { Meteor } from 'meteor/meteor';

Meteor.startup(function() {
  if (Documents.find().count() === 0) {
    return Documents.insert({
      name: "Sample doc",
      text: "Write here..."
    });
  }
});
