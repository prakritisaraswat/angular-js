app.controller('mainCtrl', ['$scope','$rootScope','menuService','cartService',
    function ($scope,$rootScope,menuService,cartService) {
    $scope.menuitems = [];

       /*  menuService.getMenuItems()
             .success(function(response){
                 $scope.menuitems= response.menu;
         }).error(function(response){
                 console.log(response);
             });
*/
        menuService.getMenuItems()
                .then(function(data){
            $scope.menuitems = data.menu;
        });
    $scope.templateUrl = "app/templates/home.html";

    $scope.select = function (param) {
        $scope.templateUrl = param.templateUrl;
    };
        $scope.cartItems = cartService.addOrSelectCart();
        //$rootScope.noOfCartitems =$scope.cartItems.length?$scope.cartItems.length:0;

        $scope.$on('itemAdded',function(){
           // $scope.noOfCartitems =$scope.cartItems.length?$scope.cartItems.length:0;		   
		   $scope.noOfCartitems =$scope.cartItems;
		
        })
}]);