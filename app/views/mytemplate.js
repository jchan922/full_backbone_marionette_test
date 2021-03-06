
////// PART 3 //////
console.log("PART 3 TEST");


// Mytemplate View
var Marionette = require('backbone.marionette');

var MyTemplateView = Marionette.LayoutView.extend({
    template: require('../templates/mytemplate.html'),

    // jQuery selectors stored as references
    ui: {
        content: '.mytext',
        input: '.myinput',
        save: '.mybutton'
    },

    // DOM events mapped with jQuery selectors
    events: {
        // when you click .mybutton, run changeDiv method
        'click @ui.save': 'changeDiv'
    },

    // set .mytext to value of input
    changeDiv: function() {
        var text = this.$el.find('.myinput').val();
        console.log("changeDiv", text);
        this.$el.find('.mytext').text(text);
    },

});

module.exports = MyTemplateView;
