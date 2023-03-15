//* ALGUNOS EJEMPLOS DE CICLOS 


//* EJEMPLO DE UN CICLO WHILE 
var index = 0; // contador en 0
    while( index < 11 ){ // 0 < 11 , 1 < 11 , 2 < 11 
        //aquí nuestro código / lógica
        console.log("VOY EN EL NÚMERO: " + index ) //concatenando
                  // VOY EN EL NÚMERO:       1
                  // VOY EN EL NÚMERO:       2 

                  //CONTADOR
                  index++
    }

//* EJEMPLO DE TABLAS DE MULTIPLICAR CON CICLO WHILE Y FOR 

var indexDos = 1;
while( indexDos < 10) {
    console.log(indexDos + " * " + 2 + " = " + (indexDos*2)) 
    
                    // 1      *    2   =  2
                    // 2      *    2   =  4
    indexDos++
    // console.table(indexDos*2)
}

var numero=5
         //condición
for (let i=2; i<10; i++) {
        console.log("5 x " + i + " : " + i*numero)
                 //   5 x 2 : , 5 x 3 :
}

//* EJEMPLO DE UNA CONTRASEÑA DO WHILE 
                //HARCODEADO
let contraseña = "gatito"
let input 
do {
    //PREGUNTAMOS POR LA CONTRASEÑA
    input = prompt("CONTRASEÑA:") 
}
while( input != contraseña ) //REPITE SI LA CONTRASEÑA NO ES IGUAL 

alert("BIENVENIDO!")

//* EJEMPLO DE CONTRASEÑA CON 3 INTENTOS 

var contraseñaDos = "patito"
input = ""
intentos = 0

   do{
     //MIENTRAS TENGAS INTENTOS PREGUNTA , SI NO LE MANDA ERROR 
     //ESTRUCTURA DE CONTROL 
     if(intentos >= 3){ // SE CUMPLE ESTO (VERDADERO)
            throw Error ("Acceso Denegado")
     } 
     input = prompt("CONTRASEÑA:")
     intentos++
   }
   while( input != contraseñaDos) //REPITE SI LA CONTRASEÑA NO ES IGUAL MAX DE INTENTOS 3
   alert("BIENVENIDO!")
