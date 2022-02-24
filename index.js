const enviar = require('./mailer');
const getIndicators = require('./indicators');
const logEmail = require('./logger');

const url = require('url');
const http = require('http');
const fs = require('fs');

http
    .createServer(function (req, res) {
        let { correos, asunto, contenido } = url.parse(req.url, true).query
        if (req.url == '/') {
            res.setHeader('content-type', 'text/html')
            fs.readFile('index.html', 'utf8', (err, data) => {
                res.end(data)
            })
        }
        if (req.url.startsWith('/mailing')) {
            res.setHeader('content-type', 'text/html')
            getIndicators()
                .then((template) => {
                    enviar(correos.split(','), asunto, contenido + template)
                        .then(() => {
                            logEmail(correos, asunto, contenido + template);
                            res.write("Correo enviado con exito!");
                            res.end();
                        })
                        .catch(err => {
                            console.log("Error al Enviar el Correo : ", err);
                            res.end();
                        })
                })
                .catch(err => {
                    console.log("Error al obtener los Indicadores : ", err);
                    res.end();
                })
        }
    })
    .listen(3000, () => {
        console.log("Listening on Port 3000 with PID ", process.pid);
    });