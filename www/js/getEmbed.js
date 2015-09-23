function GetEmbedFactory($http, CLIENT_ID) {
  return function (uri) {
    console.log(uri);
    return $http.get('https://soundcloud.com/oembed', {
      params: {
        url: uri,
        format: 'json'
      }
    });
  };
}

angular.module('starter')

.factory('GetEmbedFactory', GetEmbedFactory);