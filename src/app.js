function validate() {
  const cardnumber = document.getElementById("cardnumber").value;//por medio del btnValidate, se captura el valor en caja vacía
  if (cardnumber === "") {
    alert("Ingresa los números de tu tarjeta") //Marcar un error cuando no ingresa texto (Operadores lógicos)
  } else {
    isValid(cardnumber); // enviamos argumento a nueva funcion
  }
}

const btnValidate = document.getElementById("btnValidate");// Llamar al boton
btnValidate.addEventListener("click", validate);//Manejador de eventos, añade funcionalidad

function isValid(cardnumber) {// recibes el parametro
  console.log(cardnumber)
  const numberValid = cardnumber.split("");//separar los números en string individuales
  console.log(numberValid)
  const inverse = numberValid.reverse();//array en orden inverso
  console.log(inverse)
  const posicionesPares = [];
  const posicionesImpares = [];
  let a = 0;
  let b = 0;
  let c = 0;
  for (let i = 0; i < inverse.length; i++) {//separar por posiciones
    const array = inverse[i];
    console.log(array)
    if (i % 2 === 1){//selecciona pocisiones pares (operador modulo)
      const multiplication = + (array*2);//multiplicar por 2 el valor de posiciones pares
      console.log(multiplication)
      posicionesPares.push(array);//valor pocisiones pares en array
      if(multiplication >9){//seleccionar números mayores a 9
        const dosDigitos = multiplication.toString().split("");//convertir a string mi true en mayores de 9 (suma pares)
        const sumaDosDigitos = (Number(dosDigitos[0]) + Number(dosDigitos[1]));//Sumar ambos dígitos
        console.log (dosDigitos)
        console.log (sumaDosDigitos)
        a = a + sumaDosDigitos;//sumar el resultado de todos los "sumaDosDigitos" se declara una variable fuera del for =0 para que comience a partir de ese número
      }else{
        b = b + multiplication;//suma pocisiones pares sin multiplicar
      }
    }
    if(i % 2 === 0){//selecciona pocisiones impares
      c = c + (Number(array));
      posicionesImpares.push(array);//valor pocisiones impares en array
    }
  }
  const sumaTotal = (a + b + c);//Suma total
  if(sumaTotal %10 === 0){//si mi residual es =0, me da una tarjeta valida
    alert ("Tarjeta Valida")
  } else{
    alert ("Tú tarjeta NO es valida. Por favor, ingresa nuevamente tu Card Number")
  }
  console.log(posicionesImpares)
  console.log(posicionesPares)
  console.log (c)//suma de posiciones impares
  console.log (b)
  console.log (a)
  console.log (sumaTotal)//suma de todos los digitos agregando el resultado anterior
}

//  numero ejemplo tarjeta valida 4083952015263