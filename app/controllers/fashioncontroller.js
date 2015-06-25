app.controller('fashionctrl',
    ['$scope', 'fashionService',
    function ($scope, fashionService) {
        fashionService.getApparels().then(function(response){
           $scope.fashion = response;
        });
}]);