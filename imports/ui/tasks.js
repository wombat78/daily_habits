import { Template } from 'meteor/templating';
import { Tasks } from '../../collections/tasks.js';
import { state } from '../../collections/tasks.js';

import './tasks.html';

Template.task.helpers({
    editable() {
        //return true
        //#console.log("edit tasks");
        return state.get('editTasks');
    }
    , 
    reset_completeness() {
        Tasks.update(this._id, { 
            $set: { checked: false },
        });
    }
})

Template.task.events({
    'click .toggle-checked'() {
        Tasks.update(this._id, { 
            $set: { checked: ! this.checked },
        });
    },
    'click .delete'() {
        Tasks.remove(this._id);
    },
})

