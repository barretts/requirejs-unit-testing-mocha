define([
  'underscore',
  'marionette'
],
function (_, Marionette) {
  "use strict";

  var main_template_html = '<div id="sample">put some content <%= contentPlacement %>.</div>';

  var MainView = Marionette.ItemView.extend({
    template: _.template(main_template_html)
  });

  var Controller = Marionette.Object.extend({
    show: function(region){
      var model = new Backbone.Model({
          contentPlacement: "here"
      });

      var view = new MainView({
          model: model    
      });
      
      region.show(view);
    }
  });

  var controller = new Controller();
  return controller;
});