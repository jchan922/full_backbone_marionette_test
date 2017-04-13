
// List View
    // Responsible for rendering data onto list
    // Listens for changes and only adds what's new

var Marionette = require('backbone.marionette');

// ToDo item object constructor
var ToDo = Marionette.LayoutView.extend({
    tagName: 'li',
    template: require('../templates/todoitem.html')
})

// TodoList object constructor
var TodoList = Marionette.CollectionView.extend({
    tagName: 'ul',
    childView: ToDo
});

module.exports = TodoList;
