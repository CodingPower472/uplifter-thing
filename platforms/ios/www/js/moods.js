function MoodsController($scope, MoodsFactory) {
  function setMoods(res) {
    $scope.moods = res.data;
  }
  
  MoodsFactory.then(setMoods);
}

function MoodsFactory($http) {
  return $http.get('/moods.json');
}

angular.module('starter')

.controller('MoodsController', MoodsController)

.factory('MoodsFactory', MoodsFactory);