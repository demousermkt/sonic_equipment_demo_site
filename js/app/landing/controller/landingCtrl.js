var landingModule = angular.module('dc.landing');

 landingModule.controller('landingCtrl',['$scope','$state', '$http','$rootScope','$interval',
    function($scope,$state,$http,$rootScope,$interval){
        $scope.userBrandList = [{brandName : "Press Release",
                                description : "Lastest Communications from Sonics",
                                logo : "img/press.png",
                                brandOptionsVisible : true
                                },
                                {
                                brandName : "Blogs",
                                description : "Visit for latest blogs",
                                logo : "img/blogs.png"
                                },
								{
								brandName : "Upcoming Events",
                                description : "Look up for upcoming events",
                                logo : "img/events.png"
								},
								{
								brandName : "Help Center",
                                description : "One stop for your Learning journeys ",
                                logo : "img/help.png"	
								}];

        $scope.popOffersList = [{
                    offerBrand : "Introducing the New Sonic pad",
                    offerImage : "img/SonicPad-Floating.png",
					ctaText:"More Information Here",
                    logo : "img/offericon1.png"
        },
        {
                    offerBrand : "Its Time for Sonic Live Again",
                    offerImage : "img/event.jpg",
					ctaText:"Register Here",
                    logo : "img/offericon2.png"
        },
        {
                    offerBrand : "XMWorld 2020 Award for Sonic",
                    offerImage : "img/award.jpg",
					ctaText:"Read more here",
                    logo : "img/offericon3.png"
        }];

        $scope.selectedTab = 1;

    	$scope.navigateToProducts = function()
    	{
    		$state.go('sonicpad');
    	}

        $scope.setSelectedBrand = function(ind)
        {
            $scope.selectedTab = ind;
        }

        $scope.viewBrandDetails = function(recommendedBrand){
            $state.go('branddetails');
        }

        $interval(function () 
                {angular.forEach($scope.couponsList,function(coupon,index){ 
                    coupon.showCoupon = !coupon.showCoupon; 
                })
                }, 4000);

        $interval(function()
            {
                if($scope.selectedTab < $scope.popOffersList.length -1)
                $scope.selectedTab = $scope.selectedTab + 1;
            else
                $scope.selectedTab = 0;

            },6000);

        $scope.goToMyPage = function(){
            $state.go('branddetails')
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
    }]);

landingModule.controller('switchPersonaCtrl',['$scope','$state','$uibModalInstance',function($scope,$state,$uibModalInstance){
    $scope.cancelDelete = function()
    {
        $uibModalInstance.close();      
    }

    $scope.deleteGoal = function()
    {
        $uibModalInstance.close();  
        $state.go('brandLanding');
    }
}]);