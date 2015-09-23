function MoodController($scope, $routeParams, MoodsFactory) {
  var id = $routeParams.id;
  function setMood(res) {
    $scope.mood = res.data[id];
  }
  MoodsFactory.then(setMood);
}

angular.module('starter')

.controller('MoodController', MoodController);