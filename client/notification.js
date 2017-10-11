
import { Session } from 'meteor/session'
import { Meteor } from 'meteor/meteor'

function UpdateProgress() {
    // check what tasks are complete, update information about them
}

var FMT="X";

function ResetProgress() {
    Meteor.call('reset_tasks');
}

function GetTimeStamp() {
    return moment().format(FMT);
}

function GetLastCheckTimeStamp() {
    ts=Session.get('lastcheck');
    if (ts == null) {
        ts=GetTimeStamp();
        Session.set({'lastcheck': ts});
    }
    return ts;
}

export var GetLastCheckTime=function() {
    return moment(GetLastCheckTimeStamp(),FMT).format('MMM DD HH:mm:ss');
}


function UpdateLastCheckTimeStamp() {
    Session.set({'lastcheck': GetTimeStamp()});
}

export var GetResetTimeStamp=function() {
    var ts=GetTimeStamp();
    return moment(ts,FMT).add(27,'hour').format(FMT);
}

export var GetRemainingTime=function() {
    return Chronos.moment(GetResetTimeStamp(),FMT).fromNow();
}

export var GetResetTime=function() {
    var ts=GetTimeStamp();
    return moment(ts,FMT).add(27,'hour').format("MMM DD HH:mm:ss");
}

export var CheckProgress=function() {
    var next_reset=GetResetTime();
    if (GetTimeStamp()>next_reset) { // time to reset
        UpdateLastCheckTimeStamp();
        UpdateProgress();
        ResetProgress();
    }
    console.log("fin check");
}

