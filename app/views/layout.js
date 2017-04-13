
// Application Layout
var $ = require('jQuery');
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
        // clear error list
        var errorList = $('#errors')
        errorList.empty();

        // create model
        this.model.set({
            assignee: child.ui.assignee.val(),
            text: child.ui.text.val()
        }, {validate: true});

        // if there are errors, append them to the error list
        if (this.model.validationError) {
            var errors = this.model.validationError.errors;

            _.each(errors, function(value, key) {
                errorList.append('<li>'+value+'</li>');
            });

            return false;
        }

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
    },

});

module.exports = Layout;
