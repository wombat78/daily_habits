import { Mongo } from 'meteor/mongo'; 
export const Tasks=new Mongo.Collection('tasks');

export var state=new ReactiveDict();

// ground the task collection
if (Meteor.isCordova) Ground.Collection(Tasks);


Meteor.methods({
    // methods go here
    reset_tasks() {
        Tasks.update({},{$set : { checked: false } } , { multi: true} );
    },
    tally_tasks() { // tally tasks at end of day
        // if you miss a habit it resets
        Tasks.update({checked:false},{$set: { success_count: 0 } },{multi:true});
        Tasks.update({checked:true},{$inc: { success_count: 1 } },{multi:true});
        Tasks.update({},{$set : { checked: false } } , { multi: true} );
    }
});
