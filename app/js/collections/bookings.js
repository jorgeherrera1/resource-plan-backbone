var App = App || {};

(function() {
  'use strict';

  App.Bookings = Backbone.Collection.extend({
    model: App.Resource
  });
})();