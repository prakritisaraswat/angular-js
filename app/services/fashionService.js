/**
 * Created by aalap on 6/11/2015.
 */
app.service('fashionService',['$http','$q',
    function($http,$q){
        var dress =[];
        return{
            getApparels : function(){
                
                var dfd = $q.defer();
                if(dress.length>0){
                      dfd.resolve(dress);
                }
                else {
                    $http.get('app/data/fashion.json')
                        .success(function (response) {
                            dress = response.dresses;
                            dfd.resolve(dress);
                        }).error(function (response) {
                            dfd.reject(response);
                        });
                }
                return dfd.promise;
            }
        }
}]);

