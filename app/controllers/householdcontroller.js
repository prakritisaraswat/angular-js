app.controller('householdctrl',['$scope','$http',
    function($scope,$http){

$scope.household=[];

$http.get('app/data/household.json').success(function(response){
$scope.household=response.householditems;
console.log(response);

}).error(function(response){
console.log(response);
});

}]);