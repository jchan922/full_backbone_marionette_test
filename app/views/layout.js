
// Application Layout

var Backbone = require('backbone');
var Marionette = require('backbone.marionette');

// Views
var FormView = require('./form');
var ListView = require('./list');

// App LayoutView object constructor
var Layout = Marionette.LayoutView.extend({
    // render app on this id with this layout
    el: '#app-hook',
    template: require('../templates/layout.html'),

    regions: {
        form: '.form',
        list: '.list'
    },

    collectionEvents: {
        add: 'itemAdded'
    },

    // render the views into the jQuery selectors referenced in regions hash
    onShow: function() {
        // create new FormView and ListView objects
        var formView = new FormView({model: this.model});
        var listView = new ListView({collection: this.collection});

        // set formView and listView to their regions
        this.showChildView('form', formView);
        this.showChildView('list', listView);
    },

    onChildviewAddTodoItem: function(child) {
        // create model
        this.model.set({
            assignee: child.ui.assignee.val(),
            text: child.ui.text.val()
        }, {validate: true});

        // take new model keys/value pairs
        var items = this.model.pick('assignee', 'text');
        // add items to the entire collection of data
        this.collection.add(items);
    },

    itemAdded: function() {
        // on successful add, re assign model to blank
        this.model.set({
            assignee: '',
            text: ''
        });
    }

});

module.exports = Layout;


// 1 - Import Marionette
// 2 - Create a new type of view called HelloWorld that borrows from the standard Marionette LayoutView. We'll go into more depth in that shortly.
// 3 - We direct the view to the element we want to attach it to. This is a jQuery selector and we can use any valid jQuery selector here.
// 4 - We must set a template to display to our users.
// 5 - We must create an instance of our HelloWorld class before we can do anything useful with it.
// 6 - Now the fun stuff begins and we call render() to display the template on the screen.
