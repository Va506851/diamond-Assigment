for(var i = 0; i < 5; i++){
    var str = "";
    for(var j =5; j > i; j--){
        str += " ";
    }
    for(var k = 0; k <= i; k++){
          str +="*";
    }
    for(var l = 1; l <= i; l++){
          str += "*";
    }
   console.log(str);
}
for(var i = 5; i >= 0; i--){
   var str = "";
   for(var j = 5; j > i; j--){
       str += " ";
   }
   for(var k = 0; k <= i; k++){
      str += "*";
   }
   for(var l = 1; l <= i; l++ ){
      str += "*";

   }
   console.log(str);
}





  