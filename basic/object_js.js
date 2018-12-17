const cat = {
    age:2,
    name:'nige',
    meow: function(){
        console.log('shuai');
    }
}
cat.age += 1;
//remove properties
delete cat.age;

const triangle = {
    type: 'scalene',
    identify: function () {
      console.log(`This is a ${this.type} triangle.`);//use this reference type property
    }
  };

  function SoftwareDeveloper(name) {
    this.favoriteLanguage = 'JavaScript';
    this.name = name;
 }

 let a = new SoftwareDeveloper("ni");
 a instanceof SoftwareDeveloper;

 //call() apply() change this
 function multiply(n1,n2){
     return n1*n2;
 }

 multiply.call(a,3,4);//let object use this function
 const mockingbird = {
    title: 'To Kill a Mockingbird',
    describe: function () {
      console.log(`${this.title} is a classic novel`);
    }
  };
  const pride = {
    title: 'Pride and Prejudice'
  };
  mockingbird.describe.call(pride);
// 'Pride and Prejudice is a classic novel'
//using apply
multiply.apply(window, [3, 4]);

const dave = {
    name: 'Dave'
  };
  
  function sayHello(message) {
    console.log(`${message}, ${this.name}. You're looking well today.`);
  }
sayHello.apply(dave,['nihao']);

//bind() save this
const dog = {
    age:5,
    growoneyear:function(){
        this.age+=1;
    }
}
function invoketwice(fun){
    fun();
    fun();
}
const mygrow = dog.growoneyear.bind(dog);//save function in a variable and bind dog object
invoketwice(mygrow);

//use prototype to inheritance
const rodent = {
    favoriteFood: 'cheese',
    hasTail: true
  };
  function Mouse() {
    this.favoriteFood = 'cheese';
  }
  
  Mouse.prototype = rodent;//mouse inheritence rodent

  const ralph = new Mouse();

  const result = rodent.isPrototypeOf(ralph);//check ralph is a object created by rodent class

  //an object's .prototype property points to just one object. 
  //This is because JavaScript only supports single inheritance. 
  //If there is an object A and an object B, object C can only be prototype-linked
  // to either A _or_ B.
  const aircraft = {
    flies: true
  };
  
  const helicopter = Object.create(aircraft);
  
  console.log(helicopter.flies);
  // true
// Object.create()方法是 ECMAScript 5中新增的方法，这个方法用于创建一个新对象。
//被创建的对象会继承另一个对象的原型，在创建新对象时还可以指定一些属性。