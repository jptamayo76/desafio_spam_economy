const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

function logEmail(to, subject, html) {

    let data = `Para: ${to}\n`;;
    data += `Tema: ${subject}\n\n`;
    data += `#####################################################\n`;
    data += `###          CONTENIDO HTML DEL CORREO            ###\n`;
    data += `#####################################################\n\n`;
    data += html;

    let randomName = uuidv4() + ".log";
    fs.writeFile(randomName, data, (err) => {
        if (err)
            console.log(`Error al escribir LOG ${randomName}: \n`, err);
        else {
            console.log(`Archivo LOG ${randomName} escrito correctamente.\n`);
        }
    });
}

module.exports = logEmail