OVERVIEW
========

This daily habits app is based on the idea that it takes 60 days to consistently ingrain a positive habit. It allows us to add the maximum of one new habit a day, and to propose a 20 minute self improvement action.

Planned features
 - send notification or reminder if we have not done the job
 - make a daily score.
 - allow us to set a "reset timer" to indicate when we should clear the list for the next day

QUICK HELP
==========
To setup for development, clone this directory, then go inside and use

```
meteor create .
```

to run in dev mode, type 
```
meteor
```
then access the app throught localhost:3000

to build production code for deployment with nodejs and nginx servers, use ... (to be completed)

to build ios app first install the ios-platform like this:
```
meteor add ios-platform
```
then use the following line from a Mac notebook. 
```
meteor run ios-device
```
Note that there may be some additional requirements for your mac to get this to work - e.g. cocoapods, xcode

TODO
====
 - add ability to order task list
 - add statistics for each task
 - add attributes for tasks - e.g. when you should be doing your habits - location based reminders, or time based reminders.
 - notifications.

AUTHOR
======
contact: boonpang DOT lim AT gmail DOT com
