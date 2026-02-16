var opcion = "";

while (opcion != "Salir") {

    var precio = 2000;

    var nombre = prompt("Escriba su nombre (o escriba Salir para terminar)");

    if (nombre == "Salir") {
        opcion = "Salir";
    } else {

        var edad = prompt("Escriba su edad");
        edad = parseInt(edad);

        if (edad < 18) {

            alert("No puede asegurarse porque es menor de edad");

        } else {

            var total = precio;

            // recargo por edad del asegurado
            if (edad >= 18 && edad <= 24) {
                total = total + (precio * 0.10);
            }

            if (edad >= 25 && edad <= 49) {
                total = total + (precio * 0.20);
            }

            if (edad >= 50) {
                total = total + (precio * 0.30);
            }

            // preguntar si esta casado
            var casado = prompt("Esta casado? si o no");

            if (casado == "si") {

                var edadConyuge = prompt("Edad del conyuge");
                edadConyuge = parseInt(edadConyuge);

                if (edadConyuge >= 18 && edadConyuge <= 24) {
                    total = total + (precio * 0.10);
                }

                if (edadConyuge >= 25 && edadConyuge <= 49) {
                    total = total + (precio * 0.20);
                }

                if (edadConyuge >= 50) {
                    total = total + (precio * 0.30);
                }
            }

            // hijos
            var hijos = prompt("Cuantos hijos tiene");
            hijos = parseInt(hijos);

            if (hijos > 0) {
                total = total + (precio * 0.20 * hijos);
            }

            // propiedades
            var propiedades = prompt("Cuantas propiedades tiene");
            propiedades = parseInt(propiedades);

            if (propiedades > 0) {
                total = total + (total * 0.35 * propiedades);
            }

            // ingresos
            var salario = prompt("Cual es su salario mensual");
            salario = parseFloat(salario);

            if (salario > 0) {
                total = total + (salario * 0.05);
            }

            alert("Senor/a " + nombre + " el total a pagar es Q." + total);
        }
    }
}