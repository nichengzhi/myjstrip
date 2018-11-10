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

