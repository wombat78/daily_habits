import { Template } from 'meteor/templating';

import { Tasks } from '../api/tasks.js';

import './tasks.js';
import './body.html';

Template.body.helpers({
    tasks() {
            return Tasks.find({});
    },
});

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
        });

        // clear the form
        target.text.value="";
    },
});

