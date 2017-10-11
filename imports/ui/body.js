import { Template } from 'meteor/templating';
import { ReactiveDict } from 'meteor/reactive-dict';
import { Tasks } from '../../collections/tasks.js';
import { state } from '../../collections/tasks.js';
import { CheckProgress } from '../../client/notification.js';
import { GetRemainingTime } from '../../client/notification.js';
import { GetLastCheckTime } from '../../client/notification.js';

import './tasks.js';
import './body.html';

Template.body.helpers({
    last_tally() {
        return GetLastCheckTime();
    },
    remaining_time() {
        return GetRemainingTime();
    },
    tasks() {
        return Tasks.find({});
    },
    incompleteCount() {
        var v=Tasks.find({checked: { $ne: true }}).count();
        console.log("count "+v);
        return v;
    },
});

//Template.body.onCreated(function bodyOnCreated() {
 //   state = new ReactiveDict();
//});

Template.body.events({
    'submit .new-task'(event) {
        // prevent default browser event submit
        event.preventDefault();

        // get value from form element
        const target=event.target;
        const text=target.text.value;

        // Insert a task into the collection
        Tasks.insert({
            text,
            createdAt: new Date(),
            checked: false
        });

        // clear the form
        target.text.value="";
    },
    'change .edit-tasks input'(event,instance) {
        console.log("Run");
        state.set('editTasks', event.target.checked);
    },
    'click .reset-tasks'(event,instance) {
        console.log("resetting tasks");
        Meteor.call('reset_tasks');
    },
    'click .tally-tasks'(event,instance) {
        console.log("tallyting tasks");
        Meteor.call('tally_tasks');
    },
});

