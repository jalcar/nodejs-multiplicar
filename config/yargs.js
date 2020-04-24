let options = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
};

let argv = require('yargs')
    .command('listar', 'Muestra la tabla de multiplicar en la consola.', options)
    .command('crear', 'Crea un archivo de texto conteniendo la tabla de multiplicar.', options)
    .help()
    .argv;

module.exports = {
    argv
};