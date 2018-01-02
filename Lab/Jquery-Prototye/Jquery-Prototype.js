'use strict'

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
 Cat.prototype.whatCatIs = function(){
      console.log(this.name + " is a "+ this.color +" color car!!");
 };


 var fluffy = new Cat("Fluffy","White");
 var rocky = new Cat("Rocky rocks","Gray");

 fluffy.whatCatIs();
 fluffy.speaks();

 rocky.whatCatIs();
 rocky.speaks();
