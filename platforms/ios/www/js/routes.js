function routes($routeProvider) {
  
  $routeProvider
  
  .when('/', {
    redirectTo: '/moods'
  })
  .when('/moods', {
    templateUrl: 'templates/moods.html',
    controller: 'MoodsController'
  })
  
}

angular.module('starter')

.config(routes);