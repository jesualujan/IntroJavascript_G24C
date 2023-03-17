//*COCINANDO FUNCIONES
//? MANTRA DE FUNCIONES 
    //1) DECLARAR NUESTRA FUNCIÓN
   // 2) INVOCAR NUESTRA FUNCIÓN

   //* HACER UNA FUNCION QUE PIDA DOS PARAMETROS Y TE DE COMO RESULTADO LA SUMA DE AMBOS 
    // function Sumar(a,b){

       //! AQUÍ VA TODA NUESTRA LÓGICA

    //     let suma = a+b 
    //     // console.log("LA SUMA ES: " + suma )
    //     console.log(` 🚀 La suma es: ${suma} `) //TEMPLATE STRING CADENAS STRINGS + DATOS (VARIABLES)
    // }
    // Sumar(2,2)

    //* HACER UNA FUNCIÓN QUE PIDA UN PARAMETRO Y NOS DE COMO RESULTADO 
    //* LA TABLA DE MULTIPLICAR DE UN NÚMERO

    // function table(x){
    //    for(let i=1; i<10; i++){
    //     console.log(x + " x " + i + " : " + i*x)
    //    }
    // }
    // table(2)

    //* HACER UNA FUNCIÓN QUE PIDA A UN USUARIO SU EDAD 
    //* Y SABER SI ES MAYOR O MENOR DE EDAD 

    function getAge(){
        var edad = window.prompt("¿Cuantos años tienes?")
         if(edad < 18 ){
           console.log("eres menor de edad")
         }else if (edad >= 18){
            console.log("eres mayor de edad")
         }else {
            console.log("edad no valida 🤯")
         }

    }
    getAge()