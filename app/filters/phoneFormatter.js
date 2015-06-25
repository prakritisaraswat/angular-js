/**
 * Created by aalap on 6/16/2015.
 */
app.filter('phoneFormatter',function(){
    return function(input,type){
        //var firstNumber = input.slice(0,5);
        if(type==='IND')
        2 , "+91-"+input.slice(0,5)+"-"+input.slice(5,10);
        else
        return "+1 ("+input.slice(0,3)+") "+input.slice(3,6)+"-"+input.slice(6,10);
    }
});