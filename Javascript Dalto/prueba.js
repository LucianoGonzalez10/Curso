string = 'Cadena de texto'; // Texto
Number = 19; // Numero
Boolean = true; false; // True o False
// Casos especiales (Undefined, Null, Nan) Variable no definida o error

// Formas de declarar una variable
var numero = 15; // (Funciona Globalmente)
let nombre = 'Luciano'; // Forma recomendada (Funciona dentro del codigo)
// Const (No puede cambiar, es una constante, no puede volverse a inicializar, se inicializa una sola vez).

// DECLARACION DE VARIABLE
let numero1; // DECLARARLA
numero = 29; // INICIALIZARLA
let numero2 = 22; // Declararla e inicializarla en la misma linea.
numero2 = 23; // Modificacion de variable.

// Multiples Variables
let animal, animal2, animal3; // Multiples Variables 
animal = 'Gato';
animal2 = 'Perro';
animal3 ='Pez';

let animal4 = 'Leon', animal5 = 'Tigre'; // Todas en linea.

let numero3 = null; // Esta inicializada, se le da un valor que es vacio.
let numero4 = undefined; // No esta inicializada ni tiene valor.

prompt('Hola'); // Solicita un dato.
let nombre2 = prompt('Decime tu nombre');
alert('Bienvenido ' + nombre2);

// OPERADORES DE ASIGNACION 
numero += 5; // Le estoy sumando 5 a la variable numero. Buscar foto con operadores de asignacion.
alert(numero);

// OPERADORES ARIGMETICOS
numero5 = 10;
numero6 = 5;
resultado = numero5 + numero6;
console.log(resultado)
numero5++; // INCREMENTO
console.log(numero5); // Mostrar el numero con el incremento.

// CONCATENACION
saludo = 'Hola hermano';
pregunta = ' Todo bien?';
frase = saludo + pregunta;  

numero7 = 5;
numero8 = 4;
frase2 = 'El numero es' + numero7 + numero8; // SE TRANSFORMA EN TEXTO 
frase3 = numero7.concat(numero8); // Si o si hay que tener un string, funciona con cadenas.

oracion = 'Juancru'
oracion2 = 'Segunda frase'
frase4 =  `Mi nombre es ${oracion}`; // Importante usar backsticks, sino no funciona.
console.log(frase4);

frase5 = `<h1> JUAN </h1>`

let nombrePrueba = prompt('Ingrese su nombre')
frase5 = `<h1> Su nombre es ${nombrePrueba} </h1>`
document.write(frase5); 

frase6 = 'Mi nombre es "Luciano" y juego al counter.' // PONER COMILLAS DOBLE 
frase7 = "Mi nombre es 'Luciano' y juego al counter." // PONER COMILLAS SIMPLE

// OPERADORES DE COMPARACION
let numero9 = 25;
let numero10 = 14;
document.write(numero9 == numero10); // COMPARADOR, VERIFICA QUE NUM9 SEA IGUAL A NUM10.
document.write(numero9 != numero10); // COMPARADOR, VERIFICA QUE NUM9 SEA DISTINTO A NUM10.
document.write(numero9 === numero10); // COMPARADOR, VERIFICA QUE SEA ESTRICTAMENTE IGUALES (DATO Y VALOR).
document.write(numero9 !== numero10); // COMPARADOR, VERIFICA QUE SEA ESTRICTAMENTE DISTINTOS (DATO Y VALOR).
console.log(numero9 > numero10); // COMPARADOR, VERIFICA QUE NUMERO 9 SEA MAYOR A NUMERO 10.
console.log(numero9 < numero10); // COMPARADOR, VERIFICA QUE NUMERO 9 SEA MENOR A NUMERO 10.
console.log(numero9 <= numero10); // COMPARADOR, VERIFICA QUE NUMERO 9 SEA MENOR O IGUAL A NUMERO 10.
console.log(numero9 >= numero10); // COMPARADOR, VERIFICA QUE NUMERO 9 SEA MAYOR O IGUAL A NUMERO 10.

// OPERADORES LOGICOS
let valor1 = true;
let valor2 = true;

let comparador1 = valor1 && valor2; // AND, DEVUELVE TRUE SI AMBAS CONDICIONES SE CUMPLEN. (SOLO TRUE O FALSE).;
let comparador2 = valor1 || valor2; //  OR, DEVUELVE TRUE SI AL MENOS UNA DE LAS CONDICIONES SE CUMPLEN (SOLO TRUE O FALSE).
let comparador3 = !valor; // TRANSFORMA ALGO FALSE EN TRUE O VISEVERSA (SOLO TRUE O FALSE).

num1 = 12;
num2 = 24;

afirmacion1 = num1 < num2;
afirmacion2 = num1 != num2;
document.write(afirmacion1 && afirmacion2); // SI AMBAS SE CUMPLEN DEVUELVE TRUE    

num3 = 25;
num4 = 92;
num5 = 91;

op = (num1 < num2 || num2 < num3) && (!(num1 != num2) && num5 != num3);
result = (true|| true) && (false && true);
result2 = (true) && (false)
resultFinal = false;

// CAMEL CASE (Primer letra en minuscula y cada palabra que comienza va con mayuscula); Ej: decimeAlgoPorFavor;
document.getElementById; // Ejemplo

// CONDICIONALES. Funcionan para ejecutar un bloque si una condicion se cumple.
if (true){ // SI ES TRUE SE EJECUTA
    alert('Hola')
};

if (10 < 15){ // SI 10 ES MENOR QUE 15 SE EJECUTA
    alert('Hola')
};

if (10 > 15){ // SI 10 ES MAYOR A 15 SE EJECUTA (No se ejecuta ya que 10 no es mayor a 15s)
    alert('Hola')
}

else if (15 == 15){ // SI LA PRIMERA CONDICION NO SE CUMPLE EJECUTA ESTA SI ESTA SI SE CUMPLE.
    alert('Hola bro')
}

else{ // SE EJECUTA SI NI EL IF NI EL ELSE IF SE CUMPLEN.
    alert('Chau')
};

// ARRAYS 
let frutas = ['Manzana','Banana', 'Frutilla', 'Naranja']; // ARRAY
document.write(frutas); // MUESTRA TODO EL ARRAY.
document.write(frutas[0]); // MUESTRA LA POSICION 0 (Manzana)

// ARRAYS ASOCIATIVOS
let pc = { // Array Asociativo
    nombre: 'Luciano',
    procesador: 'Ryzen 5 3600',
    ram: '16gb',
    espacio: '1TB'
};
alert(pc['nombre']); // Formas de llamar al elemento
alert(pc['procesador']); 

let nombrePC = pc['nombre'];
let procesador  = pc['procesador'];
let ram = pc['ram'];
let espacio = pc['espacio'];

// BUCLES E ITERACION
// Bucles: Son similares a un If pero se pasan preguntando si la condicion se cumple todo el tiempo. (WHILE)
let numero11 = 0;

while (numero11 < 6) { // Preguntamos si 6 es mayor que numero 11. Y se pregunta todo el tgiempo, osea se ejecuta y vuelve a preguntar si 6 es mayor a numero11, si se cumple se ejecuta.

    numero11++; // Sumamos 1 a numero 11

    document.write(numero11); // Mostramos el valor de numero 11.
}

do { // Primero digo lo que se hace y despues preguntamos si se cumple la condicion.
    document.write(numero11 = "<br>");

    numero11++;
}

while (numero <= 6); // Condicion (Si la condicion NO se cumple se eejcuta una vez.)

// SENTENCIA BREAK

let numero12  = 0;

while(numero12 < 1000) { // Si numero 12 es menor a 1000, esto se ejecuta.
    numero12++; // Numero12 suma de a uno.
    document.write(numero12); // Muestra numero12 en pantalla
    if(numero12 = 10){ // Si numero12 es igual a 10...
        break; // Se corta la instruccion. Fin de la historia.
    }
} 

// BUCLE FOR
for (let i = 0; i < 6; i++) { // Bucle For (Declaracion, Condicion, aumento o decremento.)
    document.write(i + "<br>");
}