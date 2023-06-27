const getFlags = require('./getFlag.js');


const arguments = ['getFlags', '--version', '123', '232', '--name', 'jonathas', 'laksjdfkasdf', '--', 'oi', '--age', '24', 'ok'];

let name = getFlags(arguments, '--name');
let age = getFlags(arguments, '--age');


if (process.argv.length > 2) {
    name = getFlags(process.argv, '--name');
    age = getFlags(process.argv, '--age');
}
console.log(name, age);
