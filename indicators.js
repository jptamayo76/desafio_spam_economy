const axios = require("axios");

async function getIndicators() {
    let result = await axios
        .get("https://mindicador.cl/api")
        .then(({ data }) => {
            let template = '<br><p>Los indicadores economicos de hoy son los siguientes: </p><br>';
            template += `<p>El valor del dolar al dia de hoy es : ${data.dolar.valor}</p>`;
            template += `<p>El valor del euro al dia de hoy es : ${data.euro.valor}</p>`;
            template += `<p>El valor de la UF al dia de hoy es : ${data.uf.valor}</p>`;
            template += `<p>El valor de la UTM al dia de hoy es : ${data.utm.valor}</p>`;
            return template;
        })
        .catch((e) => {
            console.log("Error: ", e);
        });
    return result;
}

module.exports = getIndicators