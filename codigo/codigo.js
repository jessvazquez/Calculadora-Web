//Propiedades de la calculadora
var p = {

    //Propiedad teclas: Seleccionamos todos los item numericos
    teclas: document.querySelectorAll("#calculadora ul li"),

    //accion es para saber si obtenemos un numero
    //un signo, un decimal o un igual.
    accion: null,

    digito: null,

    operaciones: document.querySelector("#operaciones")

}

//metodos de la calculadora
var m = {

    inicio: function () {
        //Creamos un for hasta la longitud de teclas  
        for (var i = 0; i < p.teclas.length; i++) {
            //A cada item de las teclas se le agrega un addEventListener
            p.teclas[i].addEventListener("click", m.oprimirTecla);

        }
    },

    //Recibimos el objeto tecla.
    oprimirTecla: function (tecla) {
        //con target obtenemos el evento seleccionado
        //getAttribute permite seleccionar un elemento
        //del DOM
        p.accion = tecla.target.getAttribute("class");
        //Tomamos lo que esta dentro del HTML.
        p.digito = tecla.target.innerHTML;
        m.calculadora(p.accion, p.digito);

    },

    calculadora: function (accion, digito) {

        switch (accion) {
            case "numero":
                //Mostramos operaciones en pantalla.
                p.operaciones.innerHTML += digito;
                console.log("numero", digito);
                break;
            case "signo":
                p.operaciones.innerHTML += digito;
                console.log("signo", digito);
                break;
            case "igual":
                console.log("igual", digito);
                p.operaciones.innerHTML += digito;
                break;
            case "decimal":
                p.operaciones.innerHTML += digito;
                console.log("decimal", digito);
                break;
        }

    }

}

//disparamos funcion inicio()
m.inicio();
