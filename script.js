var c, ng;

c = console;

ng = angular;

$(function() {
  return c.log('ready');
});

ng.module('app', []).controller('ResumeCtrl', function($scope) {
  c.log('resumeData', resumeData);
  return $scope = $.extend($scope, resumeData);
});
