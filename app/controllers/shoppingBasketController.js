/**
 * Created by aalap on 6/23/2015.
 */
app.controller('shoppingBasketController',function($scope,cartService){
    $scope.items = cartService.addOrSelectCart();
});