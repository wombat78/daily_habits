import { Meteor } from 'meteor/meteor';

import { Tasks } from '../lib/collections.js';

Meteor.startup(() => {
  // code to run on server at startup
  console.log(Tasks.find().count());
  if (Tasks.find().count() != 0 ) return;
   
  Tasks.insert({
            text: "Code stuff",
            createdAt: new Date(),
            checked: false
  });
});
