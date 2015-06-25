app.controller('gadgetsctrl', ['$scope', '$rootScope', '$http', 'cartService',
    function ($scope, $rootScope, $http, cartService) {


        $scope.gadgetTypes = [{name: "LED", id: "tv", type: "Television"},
            {name: "LCD", id: "tv", type: "Television"},
            {name: "3D", id: "tv", type: "Television"},
            {name: "4G", id: "mob", type: "Mobiles"},
            {name: "Android", id: "mob", type: "Mobiles"},
            {name: "iOS", id: "mob", type: "Mobiles"},
            {name: "Windows", id: "mob", type: "Mobiles"}
        ];

        $scope.selectGadget = function () {
            console.log($scope.gadgetType);
        };
        $http.get('app/data/gadgets.json').success(function (response) {
            $scope.gadgets = response.electronics;
            console.log(response);

        }).error(function (response) {
            console.log(response);
        });


        $scope.addToCart = function (item) {
           // $rootScope.noOfCartitems = cartService.addOrSelectCart(item).length;
            cartService.addOrSelectCart(item);
            $scope.$emit('itemAdded');
        };


    }]);