c = console
ng = angular

$ ->
	c.log 'ready'

ng.module('app', []).controller 'ResumeCtrl', ($scope) ->
	c.log('resumeData', resumeData)
	$scope = $.extend($scope, resumeData)
