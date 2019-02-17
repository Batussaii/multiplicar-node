//Requireds

const argv = require(`./config/yargs`).argv;
var colors = require('colors');



// const fs = require('fs');
//const fs = require('express');
//const fs = require('./fs');

// despues de un const y {} es una destructuracion
const { crearArchivo , listarTabla} = require (`./multiplicar/multiplicar`);

let comando = argv._[0];
//es como un if
switch( comando ){
   case `listar`:
   listarTabla(argv.base, argv.limite);
   break;
   case `crear`:
   crearArchivo(argv.base, argv.limite)
   .then (archivo => console.log(`Archivo creado:`+` ${archivo}`.red))
   .catch(e => console.log(e));
   break;

   default
   : console.log(`Comando no reconocido`);
}


// let base = `9`;


let argv2 = process.agrv;

// console.log(process.argv);
// console.log(argv.base);
// console.log(`Limite`, argv.limite);
// let parametro = argv [2];
// let base = parametro.split (`=`)[1]


 