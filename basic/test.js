function emotions(myString, myFunc) {
    return"I am " + myString + ", " + myFunc(2);
}
var laugh = function(t){
    var s = "";
    for(var i = 0; i < t; i++){
        s += "ha";
    }
    s+="!";
    return s;
}
var catSays = function(max) {
    var catMessage = "";
    for (var i = 0; i < max; i++) {
      catMessage += "meow ";
    }
    return catMessage;
  };
// your code goes here
// call the emotions function here and pass in an
// inline function expression
console.log(laugh(2))
emotions("happy", catSays);