var App = App || {};

(function() {
  'use strict';

  App.Resource = Backbone.Model.extend({

    defaults: {
      name: 'Resource',
      role: 'Developer'
    },

    initialize: function() {
      this.bookings = new App.Bookings();
    }

  });
})();
