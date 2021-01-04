window.app = angular.module('app',[
    'dc.landing',
	'dc.products',
	'dc.customers',
    'ui.bootstrap',
    'ui.router',
	'dc.sonicpad',
	'dc.contact'
    ])

.run(['$rootScope', function ($rootScope) {


}])

.controller('appCtrl',['$scope','$uibModal','$state',function($scope,$uibModal,$state){
    console.dir("in app ctrl");
    $scope.firstName;
    $scope.email;
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
    
    $scope.login = function(){
        var params = {
            screenSet: 'Default-RegistrationLogin',
            onAfterSubmit: event => {
                if (event.screen === "gigya-login-screen"){    
                  this.firstName = event.profile.firstName;
                  this.email = event.profile.email;

                  document.getElementById("loggedIn").style.display = "none";
                  document.getElementById("loggedOut").style.display = "block";
                  document.getElementById("profile").style.display = "block";

                  window.dataLayer.push({
                    'visitorEmail': this.email
                });
                }
            }
        }
        var result = gigya.accounts.showScreenSet(params);      
    }

    $scope.profile = function() {
        gigya.accounts.showScreenSet({screenSet: 'Default-ProfileUpdate'});
}
	$scope.navigateTab = function(ind)
	{
		console.log("tab index "+ind); 
		if(ind == 1)
		{
			$state.go('products');
		}
		else if(ind == 2)
		{
			$state.go('customers');
		}
		else if(ind == 3)
		{
			$state.go('careers');
		}
		else if(ind == 4)
		{
			$state.go('contact');
		}
		else
			$state.go('landing')
		
		$(document).ready(function() {
			$('.navbar ul li').click(function(e) {
				$('.navbar ul li.active').removeClass('active');
				var $this = $(this);
				if (!$this.hasClass('active')) {
					$this.addClass('active');
				}
				e.preventDefault();
			});
		});
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
	.state('careers',{
        url:'/careers',
        views:{

            'main@':{
                templateUrl:'js/app/careers/view/careers.html',
                controller :'careersCtrl'
            }
        }
    })
	.state('sonicpad',{
        url:'/sonicpad',
        views:{

            'main@':{
                templateUrl:'js/app/sonicpad/view/sonicpad.html',
                controller :'sonicpadCtrl'
            }
        }
    })
	.state('contact',{
        url:'/contact',
        views:{

            'main@':{
                templateUrl:'js/app/contact/view/contact.html',
                controller :'contactCtrl'
            }
        }
    })
  $urlRouterProvider.otherwise('/landing');
 //function that allows you to determine if the gigya.js has loaded
 $(document).ready(function() {
    document.getElementById("loggedOut").style.display = "none";
    document.getElementById("loggedIn").style.display = "block";
    document.getElementById("profile").style.display = "none";
});

}]);