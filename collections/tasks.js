import { Mongo } from 'meteor/mongo';

export const Tasks=new Mongo.Collection('tasks');

export var state=new ReactiveDict();

// ground the task collection
if (Meteor.isCordova) Ground.Collection(Tasks);


Meteor.methods({
    // methods go here
    reset_tasks() {
        Tasks.update({},{$set : { checked: false } } , { multi: true} );
    }
});
