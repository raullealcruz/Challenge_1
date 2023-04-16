
// Extraer datos del area text con un clic
// primera funcion
let encriptar = document.querySelector('#encriptar')
encriptar.onclick = encriptar_datos;

let desencriptar = document.querySelector('#desencriptar')
desencriptar.onclick = desencriptar_datos;

function encriptar_datos(){
    let datos = document.querySelector('.encriptador').value
    console.log(datos)

    if (datos <= ""){
        alert('No olvides que es necesario ingresar el texto, para poder utilizar esto');
    }else {
        // remplazar valores a encriptar
        data = datos.replaceAll("á", "a")
        .replaceAll("é", "e")
        .replaceAll("í", "i")
        .replaceAll("ó", "o")
        .replaceAll("u", "u")
            .replaceAll("e", "enter")
            .replaceAll("i", "imes")
            .replaceAll("a", "ai")
            .replaceAll("o", "ober")
            .replaceAll("u", "ufat")
            
        console.log('Encriptados: ' + data)
        // Terminamos de encriptar los caracteres

        // Escribir en lugar del muñeco
        document.querySelector('.sindatos').innerHTML =

            "<textarea disabled class='tencriptado '  rows='14'>" + data + "</textarea>" +
            "<button class='copiar'> Copiar </button>"

        let copiar = document.querySelector('.copiar')
        copiar.onclick =
            function copiarData() {
                navigator.clipboard.writeText(data).then(
                    () => {
                        document.querySelector('.copiar').textContent = 'Copiado!';
                        document.querySelector('.copiar').classList.add('azul');
                        console.log('Texto copiado :' + data);
                         document.querySelector('.encriptador').value = "";
                         document.querySelector('.encriptador').focus();
                    }, () => {
                        console.log('No copiado :(')
                    }
                )

                // traido de https://developer.mozilla.org/en-US/docs/Web/API/Clipboard/writeText
            }
    }
}

// Segunda funcion

function desencriptar_datos() {
    let datos = document.querySelector('.encriptador').value
    console.log(datos)

    if (datos <= ""){
        alert('No olvides que es necesario ingresar el texto, para poder utilizar esto');
    }else{

    // remplazar valores a encriptar
    data = datos.replaceAll("enter", "e")
        .replaceAll("imes", "i")
        .replaceAll("ai", "a")
        .replaceAll("ober", "o")
        .replaceAll("ufat", "u")
    console.log('Desencriptado: ' + data)
    // Terminamos de encriptar los caracteres

    // Escribir en lugar del muñeco
    document.querySelector('.sindatos').innerHTML =

        "<textarea disabled class='tencriptado '  rows='14'>" + data + "</textarea>" +
        "<button class='copiar'> Copiar </button>"

    let copiar = document.querySelector('.copiar')
    copiar.onclick =
        function copiarData() {
            navigator.clipboard.writeText(data).then(
                () => {
                    document.querySelector('.copiar').textContent = 'Copiado!';
                    document.querySelector('.copiar').classList.add('azul');
                    console.log('Texto copiado :' + data );
                     document.querySelector('.encriptador').value = "";
                     document.querySelector('.encriptador').focus();
                }, () => {
                    console.log('No copiado :(')
                }
            )

            // traido de https://developer.mozilla.org/en-US/docs/Web/API/Clipboard/writeText
        }

    }
}
