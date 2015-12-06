angular.module('MyApp', []).
  controller('MyAppCtrl', function() {
    var self = this;
    self.after_click = false;
    self.click_func = function() {
      alert('クリック');
      self.after_click = true;
    };
  });
