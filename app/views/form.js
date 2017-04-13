
// Form View

var Marionette = require('backbone.marionette');

// Form object constructor
var FormView = Marionette.LayoutView.extend({
    tagName: 'form',
    template: require('../templates/form.html'),

    triggers: {
        submit: 'add:todo:item'
    },

    modelEvents: {
        change: 'render'
    },

    ui: {
        assignee: '#id_assignee',
        text: '#id_text',
        errors: '#errors'
    },
});

module.exports = FormView;
