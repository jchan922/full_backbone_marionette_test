
// Mytemplate View

var Marionette = require('backbone.marionette');

var MyTemplateView = Marionette.LayoutView.extend({
    template: require('../templates/mytemplate.html'),

    events: {
        'click .mybutton': 'alertBox'
    },

    alertBox: function() {
        alert('Button Clicked');
    }

});

module.exports = MyTemplateView;

console.log("TEST")

// view = new MyView();
// view.render();
