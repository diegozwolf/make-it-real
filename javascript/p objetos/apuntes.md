THIS Y FUNCIONES CONSTRUCTORAS


this:
se define en el momento de la invocación

lexical scope=> estatico

this => dinamico
=================Condiciones de this ===============
=uso en constructores
*(1) USANDO new

new this{} usa  un onjeto global

function House (address,floor, color){
	this.address = addres //=>
	this.floors = floors
	this.color = color
}
var miCasa = new House('cedritos', 1, blanca) //=> crea una instancia y la agrega a la funcion casa

*(2) USANDO el default -el objeto global

{ address: cedritos}


var house = {
	color: 'blanca',
	area: 30,
	growArea: function() {
	this.area = this.area + 30 //=> this se vuelve el objeto house 
	}
}
house.growArea();

==================== cambiar contexto de this======================
* .call y .apply
lo que hace que cambie this es la forma en la que se invoque esta función
var house = {
	color: 'blanca',
	area: 30,
	growArea: function() {
	this.area = this.area + 30 
	}
}
var apartment = {
	area:50,
}
house.growArea.call(apartment)//=> cambio del valor del objeto toma el valor 50 

*****call

var house = {
	color: 'blanca',
	area: 30,
	growArea: function(size) {
	this.area = this.area + 30 
	}
}
var apartment = {
	area:50,
}
house.growArea.call(apartment, argumentos) =>call permite usar el primer argumento o arguments dentro de la funcion


========================== FUNCION CONSTRUCTORA==================================
se encarga de crear objetos con varios atributos 

function Dog (name, age,color) {
	this.name = name  => this puede ser cualquier objeto que se ejecute con la funcion
	this.age = age
	this.color = color
}
**** invocación por .new********
var ozu = new Dog("ozu",6,"negro"); 

  .dog => es la funcion
=>this es asignada cuando es invocada
despues de crear .dog this crea un objeto vacio this= {}

luego se asignan las propiedades  dentro del objeto
 this.name  this.age  this.color

**** invocación por default********

var ozu = dog(); 

es mejor evitarlo dentro de las funciones constructoras por que se crean variables globales


**** invocación sobre el objeto ********

function dog (name, age,color) {
	this.name = name  => this puede ser cualquier objeto que se ejecute con la funcion
	this.age = age
	this.color = color{
		this.tricks = function(){
		console.log(this.name)
	}
}
ozu.tricks()
this = ozu
****CALL y APPLY ********

var ozu= new dog('ozu', 5, 'negro')
var moshi = {
	age:4
}
azu.grow.call(moshi, 5)
ozu.grow.apply(moshi, [])

=============comando para crear carpeta mkdir nombre======



















