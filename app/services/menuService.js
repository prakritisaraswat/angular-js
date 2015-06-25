/**
 * Created by aalap on 6/11/2015.
 */
app.service('menuService',['$http','$q',
    function($http,nature){
    return {
        getMenuItems : function(){
            var dfd = nature.defer();
            $http.get('app/data/data.json')
                .success(function(response){
                    dfd.resolve(response);
                }).error(function(response){
                    dfd.reject(response);
                });

            return dfd.promise;
        }
    }
}])