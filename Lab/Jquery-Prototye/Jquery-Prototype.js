'use strict'


/* Function's prototype: A funtion prototupe is a object 
instance that will become a prototype for all objects created
using this function as constructor */

/* Object's Prototype: A object prototype is the object
 instance from which object is inherited*/
 function Animals(_voice){
     console.log(_voice)
     this.voice = _voice;
 }

 Animals.prototype.speaks = function(){
     console.log( this.voice);
 }

 function Cat(_name,_color){
     Animals.call(this,"Meawooo");
     
      this.name = _name;
      this.color = _color;
 }
 

 Cat.prototype = Object.create(Animals.prototype);
 Cat.prototype.constructor = 'Cat';
 Cat.prototype.age = 5;
 Cat.prototype.whatCatIs = function(){
      console.log(this.name + " is a "+ this.color +" color car!!");
 };


 var fluffy = new Cat("Fluffy","White");
 var rocky = new Cat("Rocky rocks","Gray");

 fluffy.whatCatIs();
 fluffy.speaks();

 rocky.whatCatIs();
 rocky.speaks();
 
 Object.defineProperty(rocky,"nameLenght", {
    get:function(){
        console.log(this.name);
        //return this.name.toString().length;
    }
})

 console.log("Fluffy age is => " + fluffy.age);
 console.log("Rocky age is => " + rocky.age);
 
 console.log("Updating Rocky object age on object __proto__.age = 60 will update Fluffy age too"  );
 
 rocky.__proto__.age = 60

 console.log("Fluffy age is => " + fluffy.age);
 console.log("Rocky age is => " + rocky.age);
 
 console.log("length of name is => " + rocky['name'])
