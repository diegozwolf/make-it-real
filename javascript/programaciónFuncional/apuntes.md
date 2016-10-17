::::::::::::::::::::::::::::::::
Clousures
:::::::::::::::::::::::::::::::..
are first citizens......................

function sumx (x) {
	return function(y){
	return x + y
	}
}

var resoult = sum(5)
var resoult = sum(8)
var resoult = sum(10)

============los valores se van guardando al pasar por la función=============

function favoriteFood(name) {
	var sentence = 'La comida favorita de ' + name + 'es: '
	return function(food){
	return sentence  + food
	}
}
var juanFavorite = favoriteFood('Juan')=> se llama a la funcion favoriteFood con argumento name
juanFavorite('pizza')=>se llama a la segunda funcion con argumento food y devuelve la concatenación
:::::::::::::::::::::::::::::::::::::::::::::::
Map
:::::::::::::::::::::::::::::::::::::::::::::::
map recibe un callback   como argumento
var nums = [1,2,3,4,5]

var twiceNums = nums.map(function(num)){ // cuando se llama una funcion como argumento es un callback
	return num * 2
})
::::::::::::::::::::::::::::::::::::::::::::
Filter
::::::::::::::::::::::::::::::::::::::::::::
var evens = nums.filter(function(num)){
	return num % 2 === 0| //=> filter hace un prueba  y crea un arreglo donde lo que se cumpla es llevado a esa variable
})


solucion  suma arreglo normal
var result = 0
var nums = [2,4,6,8,12]
for(var i; i < nums.length; i++){
	result +=n num[i]
}
solucion  suma arreglo con reduce

var sum = num.reduce(function(accumalator, num){
	return accumulator + num
}, 0) //=> el primer agumento de reduce es un callback y el segundo es un acumulador que guarda resultados

function nonSense(string){
	var blab =function(){
	alert(string);
	}blab();
}









