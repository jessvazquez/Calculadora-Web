//Propiedades de la calculadora
var p = {

    //Propiedad teclas: Seleccionamos todos los item numericos
    teclas: document.querySelectorAll("#calculadora ul li"),

    //accion es para saber si obtenemos un numero,
    //un signo, un decimal o un igual.
    accion: null,

    digito: null,

    operaciones: document.querySelector("#operaciones"),

    cantidadSignos: 0,

    decimal: false,

    resultado: false
}

//metodos de la calculadora
var m = {

        inicio: function() {
            //Creamos un for hasta la longitud de teclas  
            for (var i = 0; i < p.teclas.length; i++) {
                //A cada item de las teclas se le agrega un addEventListener
                p.teclas[i].addEventListener("click", m.oprimirTecla);

            }
        },

        //Recibimos el objeto tecla.
        oprimirTecla: function(tecla) {
            //con target obtenemos el evento seleccionado
            //getAttribute permite seleccionar un elemento
            //del DOM
            p.accion = tecla.target.getAttribute("class");
            //Tomamos lo que esta dentro del HTML.
            p.digito = tecla.target.innerHTML;
            m.calculadora(p.accion, p.digito);

        },

        calculadora: function(accion, digito) {
            switch (accion) {

                case "numero":
                    p.cantidadSignos = 0;
                    //Mostramos operaciones en pantalla.
                    if (p.operaciones.innerHTML == 0) {
                        p.operaciones.innerHTML = digito;
                    } else {
                        if (p.resultado) {
                            p.resultado = false;
                            p.operaciones.innerHTML = digito;
                            console.log("numero", digito);
                        } else {
                            p.operaciones.innerHTML += digito;
                            console.log("numero", digito);
                        }
                    }
                    break;
                case "signo":
                    p.cantidadSignos++;
                    if (p.cantidadSignos == 1) {
                        if (p.operaciones.innerHTML == 0) {
                            p.operaciones.innerHTML = 0;
                        } else {
                            p.operaciones.innerHTML += digito;
                            p.decimal = false;
                            p.resultado = false;
                            console.log("signo", digito);
                        }

                    }
                    break;
                case "igual":
                    p.cantidadSignos++;
                    if (p.cantidadSignos == 1) {
                        if (p.operaciones.innerHTML == 0) {
                            p.operaciones.innerHTML = 0;
                        } else {
                            // eval() toma la cadena, separa en base a signos matematicos y retorna el total de dicha operacion.
                            p.operaciones.innerHTML = eval(p.operaciones.innerHTML);
                            p.resultado = true;
                        }
                    }

                    break;
                case "decimal":
                    p.cantidadSignos++;
                    if (p.cantidadSignos == 1) {
                        if (p.operaciones.innerHTML == 0) {
                            p.operaciones.innerHTML = 0
                        } else {
                            if (!p.decimal) {
                                p.operaciones.innerHTML += digito;
                                p.decimal = true;
                                console.log("decimal", digito);
                            }

                        }

                    }
                    break;
            }

        },


        borrar: function() {

            if (p.operaciones.innerHTML != 0) {
                p.operaciones.innerHTML = 0;
            }
        },

        teclado: function() {
            document.addEventListener("keydown", (tecla) => {
                console.log(tecla.keyCode);
                if (tecla.keyCode == 48) {
                    p.accion = "numero";
                    p.digito = 0;
                }
                if (tecla.keyCode == 49) {
                    p.accion = "numero";
                    p.digito = 1;
                }
                if (tecla.keyCode == 50) {
                    p.accion = "numero";
                    p.digito = 2;
                }
                if (tecla.keyCode == 51) {
                    p.accion = "numero";
                    p.digito = 3;
                }
                if (tecla.keyCode == 52) {
                    p.accion = "numero";
                    p.digito = 4;
                }
                if (tecla.keyCode == 53) {
                    p.accion = "numero";
                    p.digito = 5;
                }
                if (tecla.keyCode == 54) {
                    p.accion = "numero";
                    p.digito = 6;
                }
                if (tecla.keyCode == 55) {
                    p.accion = "numero";
                    p.digito = 7;
                }
                if (tecla.keyCode == 56) {
                    p.accion = "numero";
                    p.digito = 8;
                }
                if (tecla.keyCode == 57) {
                    p.accion = "numero";
                    p.digito = 9;
                }

                if (tecla.keyCode == 187) {
                    p.accion = "signo";
                    p.digito = "+";
                }

                if (tecla.keyCode == 189) {
                    p.accion = "signo";
                    p.digito = "-";
                }

                if (tecla.keyCode == 56) {
                    p.accion = "signo";
                    p.digito = "*";
                }

                if (tecla.keyCode == 191) {
                    p.accion = "signo";
                    p.digito = "/";
                }

                if (tecla.keyCode == 190) {
                    p.accion = "decimal";
                    p.digito = ".";
                }

                if (tecla.keyCode == 32) {
                    p.accion = "igual";
                    p.digito = "+";
                }

                if (tecla.keyCode == 8) {
                    p.accion = "false";
                    m.borrar();
                }
                m.calculadora(p.accion, p.digito);
            })

        }
    }
    //disparamos funcion inicio()
m.inicio();
m.teclado();