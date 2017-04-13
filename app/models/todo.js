// Model - ToDo

var Backbone = require('backbone');

var ToDo = Backbone.Model.extend({
    defaults: {
        assignee: '',
        text: '',
    },

    // A job shouldn't be added to the list unless it has some text and has been assigned to someone.
    validate: function(attrs) {

        var errors = {};
        var hasError = false;

        if (!attrs.assignee) {
            errors.assignee = 'assignee must be set';
            hasError = true;
        }

        if (!attrs.text) {
            errors.text = 'text must be set';
            hasError = true;
        }

        if (hasError) {
            attrs.errors = errors;
            return attrs;
        }

    }

});

// export this module so others can use
module.exports = ToDo;
