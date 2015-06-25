/**
 * Created by aalap on 6/23/2015.
 */
app.service('cartService',function(){
    var purchasedItems=[]
   return{
       addOrSelectCart : function(item){
           if(item) {
               purchasedItems.push({
			   name: item.name,
			   price:item.price			   
			   });
           }
          return purchasedItems;
       }
   }
});