function routes($routeProvider) {
  
  $routeProvider
  
  .when('/', {
    redirectTo: '/moods'
  })
  .when('/moods', {
    templateUrl: 'templates/moods.html',
    controller: 'MoodsController'
  })
  .when('/moods/:id', {
    templateUrl: 'templates/mood.html',
    controller: 'MoodController'
  })
  
}

angular.module('starter')

.config(routes);