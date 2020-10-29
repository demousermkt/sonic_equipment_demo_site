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

      


          $scope.dataArray = [
      {
        src: 'https://www.travelexcellence.com/images/movil/La_Paz_Waterfall.jpg'
      },
      {
        src: 'http://www.parasholidays.in/blog/wp-content/uploads/2014/05/holiday-tour-packages-for-usa.jpg'
      },
      {
        src: 'http://clickker.in/wp-content/uploads/2016/03/new-zealand-fy-8-1-Copy.jpg'
      },
      {
        src: 'http://images.kuoni.co.uk/73/indonesia-34834203-1451484722-ImageGalleryLightbox.jpg'
      },
      {
        src: 'http://www.holidaysaga.com/wp-content/uploads/2014/09/Day08-SIN-day-Free-City-View.jpg'
      },
      {
        src: 'http://images.kuoni.co.uk/73/malaysia-21747826-1446726337-ImageGalleryLightbox.jpg'
      },
      {
        src: 'http://www.kimcambodiadriver.com/uploads/images/tours/kim-cambodia-driver-angkor-wat.jpg'
      },
      {
        src: 'https://www.travcoa.com/sites/default/files/styles/flexslider_full/public/tours/images/imperialvietnam-halong-bay-14214576.jpg?itok=O-q1yr5_'
      }
    ];

        $scope.couponsList = [{
                    offerBrand : "Faasos",
                    offer : "30% off on all items1",
                    logo : "img/coupon1.png"
        },
        {
                    offerBrand : "Jabong",
                    offer : "20% off on selected items2",
                    logo : "img/coupon2.png"
        },
        {
                    offerBrand : "Shoppers Stop",
                    offer : "10% off on all medicines3",
                    logo : "img/coupon3.png"
        },
        {
                    offerBrand : "Biba",
                    offer : "10% off on selected items4",
                     logo : "img/coupon4.png"
        },{
                    offerBrand : "eat.fit",
                    offer : "30% off on all items5",
                    logo : "img/coupon5.png"
        },
        {
                    offerBrand : "Amazon",
                    offer : "20% off on selected items6",
                    logo : "img/coupon6.png"
        }];

        $scope.trendsInMyBrand = [{
                trendTitle:"Big Clearance Sale",
                brandName : "Cure it",
                logo: "img/myBrandTrend1.png",
                expiresOn : "31-08-2018 09:30"},
            {
                trendTitle:"Offer ends today",
                brandName : "Cult.fit",
                logo: "img/myBrandTrend2.png",
                expiresOn : "06-08-2018 10:30"},
            {
                trendTitle:"End of Season Sale",
                brandName : "Aza",
                logo: "img/myBrandTrend3.png",
                expiresOn : "10-08-2018 20:00"
        }];

        $scope.recommendedBrands = [{
            brandName : "Brand 1",
            brandDescription : "Brand Description 1",
            logo : "img/popbrand1.png"
        },
        {
            brandName : "Brand 2",
            brandDescription : "Brand Description 2",
            logo : "img/popbrand2.png"
        },
        {
            brandName : "Brand 3",
            brandDescription : "Brand Description 3",
            logo : "img/popbrand3.png"
        },
        {
            brandName : "Brand 4",
            brandDescription : "Brand Description 4",
            logo : "img/popbrand4.png"
        },
        {
            brandName : "Brand 5",
            brandDescription : "Brand Description 5",
            logo : "img/popbrand5.png"
        },
        {
            brandName : "Brand 6",
            brandDescription : "Brand Description 6",
            logo : "img/popbrand6.png"
        }];

        $scope.selectedTab = 1;
        $scope.flipCoupons = true;
    	$scope.init = function(){
    		console.dir("here");
            angular.forEach($scope.couponsList,function(coupon,index){
                if(index % 2 == 0)
                    coupon.showCoupon = true;
                else
                    coupon.showCoupon = false;
            });
    	}
    	$scope.init();

    	$scope.navigateToBrowseBrands = function()
    	{
    		$state.go('products');
    	}

    	$scope.navigateToMyBrands = function()
    	{
    		$state.go('userPreference');
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
				$state.go('customers');
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