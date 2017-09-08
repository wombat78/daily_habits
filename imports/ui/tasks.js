import { Template } from 'meteor/templating';
import { Tasks } from '../api/tasks.js';

import './tasks.html';

Template.task.events({
    'click .toggle-checked'() {
        Tasks.update(this._id, { 
            $set: { checked: ! this.checked },
        });
    },
    'click .delete'() {
        Tasks.remove(this._id);
    }
})

