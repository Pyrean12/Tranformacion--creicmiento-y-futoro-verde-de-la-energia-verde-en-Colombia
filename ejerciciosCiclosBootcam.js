// Suma de pares

for(let i = 1; i <=100; i++)
{
    if(i%2 ==0)
    {
        let sumaPares = sumaPares + i;
    }   
}
alert("La suma de todos los pares es: " + sumaPares);

//Tabla de multiplicar

let numMulti = parseInt(prompt("Ingrese el Numero que desea realizar la tabla de multiplicar"));
let ragoTabla = parseInt(prompt("Ingrese el rango de la tabla de multiplicar"));
let multinum = 0;
for(let i = 1; i <=ragoTabla; i++ )
{
    multinum= numMulti * i;
    console.log(numMulti+ " x " + i + " = " + numMulti);
}

// contador de vocales

let palabra = prompt("Ingrese un tengo: ");
let vocales = "aeiouAEIOU";
let contador = 0;

for( let i = 0; i <= palabra.length; i++)
{
    if(vocales.includes(palabra[i]))
    {
        contador++;
    }
}
console.log("El texto tiene " + contador + " vocales(es)");

//triangulo con *

let filas = Number(prompt("Ingrese el número de filas para el triángulo:"));

for (let i = 1; i <= filas; i++) 
{
    let linea = "";
    for (let j = 1; j <= i; j++) 
    {
        linea += "*";
    }
  console.log(linea);
}

//Factorial de un número

let numFacto = parseInt(prompt("Ingrese el número del cual quiere hallar el factorial"));
let resulFacto = 1;

for (let i = 1; i <= numFacto; i++) {
  resulFacto = resulFacto * i;
}

console.log("El factorial de " + numFacto + " es: " + resulFacto);


//Adivinar numero aleatorio

let numeroSecreto = Math.floor(Math.random()*100) + 1;
let bandera = false;

while( !bandera)
{
    let adivinarNumero = parseInt(prompt("Ingrese el número que para adivinar"));

    if(adivinarNumero < numeroSecreto)
    {
        console.log("El número es mayor");
    }
    else if(adivinarNumero> numeroSecreto)
    {
        console.log("El numero es menor")
    }
    else
    {
        cosole.log("acertaste el numero secretoo: " + numeroSecreto);
        bandera = true;
    }

}

//suma de numeros positivos

let banderaUno = false;
let sumaPositivos = 0;
while(!banderaUno)
{
    let numSumar = parseInt(prompt("Ingrese un número"));
    if(numSumar <= -1)
    {
        banderaUno = true;
    }
    else 
    {
        sumaPositivos = sumaPositivos + numSumar;
    }
}
console.log("la suma total de los positivos fue: " + sumaPositivos);

//Contraseña segura
let banderaDos = false;

while(!banderaDos)
{
    let contraseñaUno  = prompt("Ingrese la contraseña, esta debe de contar con mas de 8 dijitos: ");
    if(contraseñaUno.length < 8)
    {
        console.log("La contraseña es muy pequeda");
    }
    else
    {
        console.log("Contraseña creada");
        banderaDos = true;
    }
}

//imprimir primos


let ragoPrim= parseInt(prompt("ingrese el rango de los primos"));
let contadordos= 1;


while(contadordos <=ragoPrim)
{
    if(contadordos != 1 && contadordos%2 != 0)
    {
        onsole.log("numero primo: " + contadordos);
        contadordos++
    }
    contador++
    
}

// Calculadora

let banderatres = false;
let numUno = 0;
let numDos = 0;
let resultado = 0;

while(!banderatres)
{
    let calcular = parseInt(prompt("Ingrese la opcion de la operacion que desea realizar \n 1 Suma\n 2 Resta\n 3 Multiplicación\n 4 División \n 5 salir"));
    switch(calcular)
    {
        case 1:
            numUno = parseInt(prompt("primero número: "));
            numDos = parseInt(prompt("segundo número: "));
            resultado = numUno + numDos;
            console.log(numUno+" + " + numDos+ " = " + resultado);
            break
        case 2:
            numUno = parseInt(prompt("primero número: "));
            numDos = parseInt(prompt("segundo número: "));
            resultado = numUno - numDos;
            console.log(numUno+" - " + numDos+ " = " + resultado)
            break
        case 3:
            numUno = parseInt(prompt("primero número: "));
            numDos = parseInt(prompt("segundo número: "));
            resultado = numUno * numDos;
            console.log(numUno+" * " + numDos+ " = " + resultado);
            break

        case 4:
            numUno = parseInt(prompt("primero número: "));
            numDos = parseInt(prompt("segundo número: "));
            resultado = numUno / numDos;
            console.log(numUno+" / " + numDos+ " = " + resultado)
            break
        case 5:
            banderatres = true
            break
    }


}