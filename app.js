const { argv } = require('./config/yargs')
const { multiplicar, listar } = require('./TablasMulti/multiplicacion');

let comando = argv._[0];
switch (comando) {
    case "listar":
        listar(argv.base, argv.limite);
        break;
    case "crear":
        multiplicar(argv.base, argv.limite)
            .then(archivo => {
                console.log(`Se ha creado el archivo ${ archivo }`);
            })
            .catch(mensaje => {
                console.log(`ERROR: ${ mensaje }`);
            });
        break;
    default:
        console.log('Comando ingresado no es válido.');
}