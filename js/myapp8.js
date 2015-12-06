angular.module('MyApp', []).
  controller('MyAppCtrl', function() {
    var self = this;

    self.obj = {};
    self.obj.users = [];
    self.obj.users[0] = {};
    self.obj.users[1] = {};
    self.obj.users[2] = {};
    self.obj.users[3] = {};
    self.obj.users[4] = {};
    self.obj.users[5] = {};
    self.obj.users[0].name = 'tack';
    self.obj.users[0].age  = '23';
    self.obj.users[1].name = 'johnny';
    self.obj.users[1].age  = '27';
    self.obj.users[2].name = 'tanaka';
    self.obj.users[2].age  = '60';
    self.obj.users[3].name = 'takahashi';
    self.obj.users[3].age  = '43';
    self.obj.users[4].name = 'uchida';
    self.obj.users[4].age  = '13';
    self.obj.users[5].name = 'saitoh';
    self.obj.users[5].age  = '37';
    console.log(self.obj);


  });
