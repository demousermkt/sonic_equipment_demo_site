var productsModule = angular.module('dc.products');

 productsModule.controller('productsCtrl',['$scope','$state', '$http','$rootScope','$interval',
    function($scope,$state,$http,$rootScope,$interval){
    	$scope.navigateToSonic = function()
    	{
    		$state.go('sonicpad');
    	}
    }]);