function soundCloudAudioDirective(GetEmbedFactory) {
  return {
    restrict: 'E',
    templateUrl: 'templates/soundCloudAudioDirective.html',
    scope: {
      playlist: '@'
    },
    link: function (scope, elem, attrs) {
      function setEmbed(res) {
        var embed = res.data.html;
        document.getElementById('embed').innerHTML = embed;
      }
      var playlist = attrs.playlist;
      GetEmbedFactory(playlist).then(setEmbed);
    }
  };
}

angular.module('starter')

.directive('soundCloudAudio', soundCloudAudioDirective);