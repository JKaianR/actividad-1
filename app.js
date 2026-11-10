function enviar() {
    alert ("prueba!!!")
    var contenido = document.querySelector('#contenido');
    var v1 = document.querySelector('#t1').value;
    var v2 = document.querySelector('#t2').value;
    var v3 = document.querySelector('#t3').value;
    var url = "";

    if (document.querySelector('#opcion1').checked) {
        url = 'http://127.0.0.1:5000';
    } else if (document.querySelector('#opcion2').checked) {
        url = 'http://127.0.0.1:5000/notas/' + v1 + '/' + v2 + '/' + v3;
    } else if (document.querySelector('#opcion3').checked) {
        url = 'http://127.0.0.1:5000/edades/' + v1;
    } else if (document.querySelector('#opcion4').checked) {
        url = 'http://127.0.0.1:5000/arreglos/' + v1 + '/' + v2 + '/' + v3;
    } else {
        swal("Mensaje", "Seleccione una opción", "warning");
        return;
    }

    fetch(url)
        .then(function(response) {
            if (response.ok) {
                return response.text();
            } else {
                throw "Error en la llamada";
            }
        })
        .then(function(texto) {
            console.log(texto);
            contenido.innerHTML = texto;
        })
        .catch(function(error) {
            console.log(error);
            swal({
                title: "Advertencia",
                text: error,
                icon: "warning",
                buttons: true,
                dangerMode: true,
            });
        });
}

// Opción para mensaje
function opcion1() {
    var t1 = document.querySelector('#t1');
    var t2 = document.querySelector('#t2');
    var t3 = document.querySelector('#t3');
    
    t1.disabled = true;
    t2.disabled = true;
    t3.disabled = true;
    
    t1.value = "";
    t2.value = "";
    t3.value = "";
    
    t1.placeholder = "";
    t2.placeholder = "";
    t3.placeholder = "";
}

// Opción para notas
function opcion2() {
    var t1 = document.querySelector('#t1');
    var t2 = document.querySelector('#t2');
    var t3 = document.querySelector('#t3');
    
    t1.disabled = false;
    t2.disabled = false;
    t3.disabled = false;
    
    t1.value = "";
    t2.value = "";
    t3.value = "";
    
    t1.placeholder = "Nota 1";
    t2.placeholder = "Nota 2";
    t3.placeholder = "Nota 3";
}

// Opción para edad
function opcion3() {
    var t1 = document.querySelector('#t1');
    var t2 = document.querySelector('#t2');
    var t3 = document.querySelector('#t3');
    
    t1.disabled = false;
    t2.disabled = true;
    t3.disabled = true;
    
    t1.value = "";
    t2.value = "";
    t3.value = "";
    
    t1.placeholder = "Edad";
    t2.placeholder = "";
    t3.placeholder = "";
}

// Opción para arreglos
function opcion4() {
    var t1 = document.querySelector('#t1');
    var t2 = document.querySelector('#t2');
    var t3 = document.querySelector('#t3');
    
    t1.disabled = false;
    t2.disabled = false;
    t3.disabled = false;
    
    t1.value = "";
    t2.value = "";
    t3.value = "";
    
    t1.placeholder = "Valores permitidos";
    t2.placeholder = "Columnas";
    t3.placeholder = "Filas";
}




// function enviar() {
//     var contenido = document.querySelector('#contenido');
//     var v1 = document.querySelector('#t1').value;
//     var v2 = document.querySelector('#t2').value;
//     var v3 = document.querySelector('#t3').value;
//     var url = "";

//     if (document.querySelector('#opcion1').checked) {
//         url = 'http://127.0.0.1:5000/';
//     } else if (document.querySelector('#opcion2').checked) {
//         if(v1 === "" || v2 === "" || v3 === "") {
//             swal("Advertencia", "Por favor ingrese todas las notas", "warning");
//             return;
//         }
//         url = 'http://127.0.0.1:5000/notas/' + v1 + '/' + v2 + '/' + v3;
//     } else if (document.querySelector('#opcion3').checked) {
//         if(v1 === "") {
//             swal("Advertencia", "Por favor ingrese la edad", "warning");
//             return;
//         }
//         url = 'http://127.0.0.1:5000/edades/' + v1;
//     } else if (document.querySelector('#opcion4').checked) {
//         if(v1 === "" || v2 === "" || v3 === "") {
//             swal("Advertencia", "Por favor ingrese los valores, columnas y filas", "warning");
//             return;
//         }
//         url = 'http://127.0.0.1:5000/arreglos/' + v1 + '/' + v2 + '/' + v3;
//     } else {
//         swal("Mensaje", "Seleccione una opción", "warning");
//         return;
//     }

//     fetch(url)
//         .then(function(response) {
//             if (response.ok) {
//                 return response.text();
//             } else {
//                 throw "Error en la llamada al servidor";
//             }
//         })
//         .then(function(texto) {
//             console.log(texto);
//             contenido.innerHTML = texto;
//         })
//         .catch(function(error) {
//             console.log(error);
//             swal({
//                 title: "Advertencia",
//                 text: "No se pudo conectar con la API de Flask. Asegúrate de que esté encendida.",
//                 icon: "warning",
//                 buttons: true,
//                 dangerMode: true,
//             });
//         });
// }

// // Opción para mensaje
// function opcion1() {
//     var t1 = document.querySelector('#t1');
//     var t2 = document.querySelector('#t2');
//     var t3 = document.querySelector('#t3');
    
//     t1.disabled = true;
//     t2.disabled = true;
//     t3.disabled = true;
    
//     t1.value = "";
//     t2.value = "";
//     t3.value = "";
    
//     t1.placeholder = "";
//     t2.placeholder = "";
//     t3.placeholder = "";
// }

// // Opción para notas
// function opcion2() {
//     var t1 = document.querySelector('#t1');
//     var t2 = document.querySelector('#t2');
//     var t3 = document.querySelector('#t3');
    
//     t1.disabled = false;
//     t2.disabled = false;
//     t3.disabled = false;
    
//     t1.value = "";
//     t2.value = "";
//     t3.value = "";
    
//     t1.placeholder = "Nota 1 (30%)";
//     t2.placeholder = "Nota 2 (30%)";
//     t3.placeholder = "Nota 3 (40%)";
// }

// // Opción para edad
// function opcion3() {
//     var t1 = document.querySelector('#t1');
//     var t2 = document.querySelector('#t2');
//     var t3 = document.querySelector('#t3');
    
//     t1.disabled = false;
//     t2.disabled = true;
//     t3.disabled = true;
    
//     t1.value = "";
//     t2.value = "";
//     t3.value = "";
    
//     t1.placeholder = "Edad";
//     t2.placeholder = "";
//     t3.placeholder = "";
// }

// // Opción para arreglos
// function opcion4() {
//     var t1 = document.querySelector('#t1');
//     var t2 = document.querySelector('#t2');
//     var t3 = document.querySelector('#t3');
    
//     t1.disabled = false;
//     t2.disabled = false;
//     t3.disabled = false;
    
//     t1.value = "";
//     t2.value = "";
//     t3.value = "";
    
//     t1.placeholder = "Valores límite";
//     t2.placeholder = "Columnas";
//     t3.placeholder = "Filas";
// }



