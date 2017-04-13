
// Entry point for application

var Backbone = require('backbone');
var Marionette = require('backbone.marionette');

// Views
var TodoView = require('./views/layout');
var MyTemplate = require('./views/mytemplate');

// Models
var ToDoModel = require('./models/todo');

// Initial placeholder data that's hardcoded
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
    onStart: function(options) {
        var todo = new TodoView({
            collection: new Backbone.Collection(options.initialData),
            model: new ToDoModel()
        });
        todo.render();
        todo.triggerMethod('show');
    }

});

app.start({initialData: initialData});
