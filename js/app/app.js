window.app = angular.module('app',[
    'dc.landing',
	'dc.products',
	'dc.customers',
    'ui.bootstrap',
    'ui.router'
    ])

.run(['$rootScope', function ($rootScope) {


}])

.controller('appCtrl',['$scope','$uibModal','$state',function($scope,$uibModal,$state){
    console.dir("in app ctrl");
    $scope.switchPersona = function(){
       /* var modalInstance = $uibModal.open({
            templateUrl : 'js/app/landing/view/switchPersonaDialog.html',
            controller : 'switchPersonaCtrl',
            backdrop: 'static',
            windowClass: 'center-modal',
            backdropClass: 'modal-backdrop',  
        });
        $('#myModal').appendTo("body").modal('show');
        $("#myModal").modal("show");
        $("#myModal").css("z-index", "1500");*/
        $state.go('landing');
    }
	
	$scope.navigateToProducts = function()
	{
		$state.go('products');
	}
	
	$scope.navigateToCustomers = function()
	{
		$state.go('customers');
	}
}])
.config(['$stateProvider','$urlRouterProvider','$locationProvider',
            function($stateProvider,$urlRouterProvider,$locationProvider){
    console.dir("test");
    $stateProvider
    .state('landing',{
        url:'/landing',
        views:{

            'main@':{
                templateUrl:'js/app/landing/view/landing.html',
                controller :'landingCtrl'
            }
        }
    })
	.state('products',{
		url:'/products',
		views:{

		'main@':{
			templateUrl:'js/app/products/view/products.html',
			controller :'productsCtrl'
			}
		}
	})
	.state('customers',{
        url:'/customers',
        views:{

            'main@':{
                templateUrl:'js/app/customers/view/customers.html',
                controller :'customersCtrl'
            }
        }
    })
  $urlRouterProvider.otherwise('/landing');


}]);