const precioBase = 2000
const edad18 = 0.10
const edad25 = 0.20
const edad50 = 0.30
const cantidadHijos = precioBase * 0.20
const propiedad = precioBase * 0.35
const salary = 0.05

var recargo = 0

function main() {

  while (true) {
    const nombre = prompt("Ingrese su nombre, por favor")
    if (nombre.toUpperCase() == "SALIR") {
      return;
    }
    var edad = prompt("¿Cuantos años tiene?", "Ingrese solamente números")
    if (edad.toUpperCase() == "SALIR") {
      return;
    } else if (isNaN(parseInt(edad))) {
      while (isNaN(parseInt(edad))) {
        if (edad.toUpperCase() == "SALIR") {
          return;
        } else {
          edad = prompt("¿Cuantos años tiene?", "Ingrese solamente números")
        }
      }
    }
    if (edad < 18) {
      alert("No es mayor de edad");
      return;
    } else if (edad <= 24 && edad >= 18) {
      recargo = precioBase * edad18;
    } else if (edad <= 49 && edad >= 25) {
      recargo = precioBase * edad25;
    } else {
      recargo = precioBase * edad50;
    }
    const casado = prompt("¿Está casado actualmente?", "si/no")
    if (casado.toUpperCase() == "SALIR") {
      return;
    }
    if (casado.toUpperCase() == "SI") {
      var edadConyuge = prompt("¿Que edad tiene su esposo/a?")
      if (edadConyuge.toUpperCase() == "SALIR") {
        return;
      } else if (isNaN(parseInt(edadConyuge))) {
        while (isNaN(parseInt(edadConyuge))) {
          if (edadConyuge.toUpperCase() == "SALIR") {
            return;
          }
          edadConyuge = prompt("¿Que edad tiene su esposo/a?")
        }
      }
      if (edadConyuge <= 24 && edadConyuge >= 18) {
        recargo = recargo + precioBase * edad18;
      } else if (edadConyuge <= 49 && edadConyuge >= 25) {
        recargo = recargo + precioBase * edad25;
      } else {
        recargo = recargo + precioBase * edad50;
      }
    } else {}
    const hijos = prompt("¿Tiene hijos o hijas?", "si/no")
    if (hijos.toUpperCase() == "SALIR") {
      return;
    }
    if (hijos.toUpperCase() == "SI") {
      var cuantosHijos = prompt("¿Cuantos hijos tiene?")
      if (cuantosHijos.toUpperCase() == "SALIR") {
        return;
      } else if (isNaN(parseInt(cuantosHijos))) {
        while (isNaN(parseInt(cuantosHijos))) {
          if (cuantosHijos.toUpperCase() == "SALIR") {
            return;
          }
          cuantosHijos = prompt("¿Cuantos hijos tiene?")
        }
      }
      recargo = recargo + (cuantosHijos * cantidadHijos);
    }
    var propiedades = prompt("¿Cuantas propiedades tiene?")
    if (propiedades.toUpperCase() == "SALIR") {
      return;
    } else if (isNaN(parseInt(propiedades))) {
      while (isNaN(parseInt(propiedades))) {
        if (propiedades.toUpperCase() == "SALIR") {
          return;
        }
        propiedades = prompt("¿Cuantas propiedades tiene?")
      }
    }
    if (propiedades >= 1) {
      recargo = recargo + (propiedad * propiedades)
    }
    var salarioMensual = prompt("¿Cual es su salario mensual?")
    if (salarioMensual.toUpperCase() == "SALIR") {
      return;
    } else if (isNaN(parseInt(salarioMensual))) {
      while (isNaN(parseInt(salarioMensual))) {
        if (salarioMensual.toUpperCase() == "SALIR") {
          return;
        }
        salarioMensual = prompt("¿Cual es su salario mensual?")
      }
    }
    if (salarioMensual > 0) {
      recargo = recargo + (salarioMensual * salary)
    }
    alert("Para el asegurado: " + nombre)
    alert("El recargo total sera de: " + recargo)
    alert("El precio total sera de: " + (recargo + precioBase))
  }
  return;
}

main();
