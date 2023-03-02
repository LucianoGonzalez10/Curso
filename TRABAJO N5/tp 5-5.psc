Algoritmo sin_titulo
	Definir value, sum, nota Como Entero
	definir prom Como real
    sum = 0;
	
	Para value = 1 Hasta 10 Con Paso 1 hacer
		Escribir "Ingrese su nota";
		leer nota
		sum = sum + nota;
	FinPara
	
	prom = sum / 10;
	Escribir  "El promedio es: ", prom
	Escribir "La suma total es de: ", sum
FinAlgoritmo