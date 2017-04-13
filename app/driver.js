var Backbone = require('backbone');
var Marionette = require('backbone.marionette');

var ToDo = Marionette.LayoutView.extend({
    tagName: 'li',
    template: require('./templates/todoitem.html')
})

var TodoList = Marionette.CompositeView.extend({
    el: '#app-hook',
    template: require('./templates/todolist.html'),

    childView: ToDo,
    childViewContainer: 'ul',

    ui: {
        assignee: '#id_assignee',
        form: 'form',
        text: '#id_text'
    },

    triggers: {
        'submit @ui.form': 'add:todo:item'
    },

    collectionEvents: {
      add: 'itemAdded'
    },

    onAddTodoItem: function() {
        this.collection.add({
            assignee: this.ui.assignee.val(),
            text: this.ui.text.val()
        });
    },

    itemAdded: function() {
        this.ui.text.val('');
        this.ui.assignee.val('');
    }
});

var todo = new TodoList({
    collection: new Backbone.Collection([
        {assignee: 'Scott', text: 'Write a book about Marionette'},
        {assignee: 'Andrew', text: 'Do some coding'}
    ])
});

todo.render();

// 1 - Import Marionette
// 2 - Create a new type of view called HelloWorld that borrows from the standard Marionette LayoutView. We'll go into more depth in that shortly.
// 3 - We direct the view to the element we want to attach it to. This is a jQuery selector and we can use any valid jQuery selector here.
// 4 - We must set a template to display to our users.
// 5 - We must create an instance of our HelloWorld class before we can do anything useful with it.
// 6 - Now the fun stuff begins and we call render() to display the template on the screen.
