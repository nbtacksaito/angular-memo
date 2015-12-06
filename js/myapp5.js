angular.module('MyApp', []).
  controller('MyAppCtrl', function() {
    var self = this;

    self.color = {
      is_red : true,
      is_blue: false
    };

    self.change_color = function () {
      self.color.is_red  = !self.color.is_red;
      self.color.is_blue = !self.color.is_blue;
    };
  });
