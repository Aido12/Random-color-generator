const randomColor = require('randomcolor');
const chalk = require('chalk');
// this will give a random color,when asked will give
// a color when requested either dark or light.
const color = randomColor({
  hue: process.argv[2], // access 3rd element in the array of arguments
  luminosity: process.argv[3], // access 4th element in the array of arguments
});

// this will log in the terminal the colored hexbox with hexcolor
console.log(chalk.hex(color)`###############################
###############################
###############################
#####                     #####
#####    ${color}          #####
#####                     #####
###############################
###############################
###############################`);
