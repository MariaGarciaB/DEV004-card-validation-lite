function validate() {
  const cardnumber = document.getElementById("cardNumber").value;//Capturo datos de mi input
  if (cardnumber === "") {
    alert("Ingresa los números de tu tarjeta") //Marcar un error cuando mi caja de texto está vacía
  } else {
    isValid(cardnumber); // Envío argumento a nueva función
  }
}

const btnValidate = document.getElementById("btnValidate");// Llamo a mi boton
btnValidate.addEventListener("click", validate);//Agrego un manejador de eventos para "capturar el valor al dar click"

function isValid(cardnumber) {
  const numberValid = cardnumber.split("");//Separo mis caracteres
  const inverse = numberValid.reverse();//Invierto mis caracteres
  const posicionesPares = [];//Tomo todo mi array puesto en la condicional con .push
  const posicionesImpares = [];
  let sumA = 0;//Variables para inicializar a partir del 0 como valor
  let sumB = 0;
  let sumC = 0;
  for (let i = 0; i < inverse.length; i++) {//Separo por pocisiones
    const array = inverse[i];
    if (i % 2 === 1){//Selección posiciones pares (operador módulo)
      const multiplication = + (array*2);//Multiplico *2 mis pocisiones pares
      posicionesPares.push(array);
      if(multiplication >9){//Selecciono números de dos digitos
        const dosDigitos = multiplication.toString().split("");
        const sumaDosDigitos = (Number(dosDigitos[0]) + Number(dosDigitos[1]));//Sumo ambos dígitos del resultado de "multiplication"
        sumA = sumA + sumaDosDigitos;//suma total "sumaDosDigitos"
      }else{
        sumB = sumB + multiplication;//suma pocisiones pares sin multiplicar
      }
    }
    if(i % 2 === 0){//Selección pocisiones impares
      sumC = sumC + (Number(array));
      posicionesImpares.push(array);
    }
  }
  const sumaTotal = (sumA + sumB + sumC);//Suma total
  console.log (sumaTotal)
  if(sumaTotal %10 === 0){//Resultado algoritmo de Luhn; residual es = 0 es una numero de tarjeta válido
    alert ("Gracias, Tu tarjeta es válida")
  } else{
    alert ("Tu tarjeta es inválida. Intentalo nuevamente")
  }
}




//  numero ejemplo tarjeta valida 4083952015263