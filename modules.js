const {people, ages} = require('./people'); // Destructuring the object

console.log(people, ages);

const os = require('os'); // Built-in module, no need to create this module (operating system module)
console.log(os.platform(), os.homedir()); // Some of the methods we can use from the os module: os.platform(), os.homedir(), os.freemem(), os.totalmem()