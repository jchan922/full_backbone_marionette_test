
// Entry point for application

var Backbone = require('backbone');
var Marionette = require('backbone.marionette');

// Views
var TodoView = require('./views/layout');

// Models
var ToDoModel = require('./models/todo');

// Initial placeholder data that's hardcoded to populate To Do list
var initialData = [
    {assignee: 'Scott', text: 'Write a book about Marionette'},
    {assignee: 'Andrew', text: 'Do some coding'}
];

// Marionette.Application class
    // Take pre-defined data from your page and feed it into your application
    // Render your initial views
    // Start the Backbone.history and initialize your application's Router

var app = new Marionette.Application({

    // on app.start, render placeholder data initialData
    onStart: function(dataOnStart) {
        var todo = new TodoView({
            collection: new Backbone.Collection(dataOnStart.initialData),
            model: new ToDoModel(),
        });
        todo.render();
        todo.triggerMethod('show');
    console.log(todo);
    }

});

app.start({initialData: initialData, passedData: "Other data you want to pass on start"});
