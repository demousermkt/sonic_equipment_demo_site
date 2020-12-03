var contactModule = angular.module('dc.contact');

 contactModule.controller('contactCtrl',['$scope','$state', '$http','$rootScope','$interval',
    function($scope,$state,$http,$rootScope,$interval){
		$scope.selectedTab = 0;
    }]);