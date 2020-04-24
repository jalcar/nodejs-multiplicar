const fs = require('fs');

let multiplicar = (p_Base, p_Limite) => {

    return new Promise((resolve, reject) => {
        if (!Number(p_Base)) {
            reject(`El valor ${p_Base} ingresado no es válido.`);
            return;
        }
        let dataTabla = '';
        for (let i = 1; i <= p_Limite; i++) {
            dataTabla += `${ p_Base } * ${ i } = ${ p_Base * i }\n`;
        }

        fs.writeFile(`Archivos/Tablas-${p_Base}.txt`, dataTabla, (err) => {
            if (err)
                reject(err);
            else
                resolve(`Tabla-${p_Base}.txt`);
        });
    });

};

let listar = (p_Base, p_Limite) => {
    for (let i = 1; i <= p_Limite; i++) {
        console.log(`${ p_Base } * ${ i } = ${ p_Base * i }`);
    }
};

module.exports = {
    multiplicar,
    listar
};