#!/usr/bin/env node

import chalk from 'chalk';
import boxen from 'boxen';
import clear from 'clear';
import clui from 'clui';
import figlet from 'figlet';
import inquirer from 'inquirer';
import centerAlign from 'center-align';
import child_process, { exec } from 'child_process';
import chalkAnimation from 'chalk-animation';


clear();

var text = "C r y p t o D a r t h ";
const name2 = chalk.hex('#000000').bgBlue.bold(text);
const name2x = chalk.bold.hex('#000000').bgWhite(` 𝕯 𝖗 𝖞 𝖞 𝖕 `);
const name3 = centerAlign(name2,200)
const name4 = centerAlign(name2x,205)






var namegen = `
░█████╗░██████╗░██╗░░░██╗██████╗░████████╗░█████╗░██████╗░░█████╗░██████╗░████████╗██╗░░██╗
██╔══██╗██╔══██╗╚██╗░██╔╝██╔══██╗╚══██╔══╝██╔══██╗██╔══██╗██╔══██╗██╔══██╗╚══██╔══╝██║░░██║
██║░░╚═╝██████╔╝░╚████╔╝░██████╔╝░░░██║░░░██║░░██║██║░░██║███████║██████╔╝░░░██║░░░███████║
██║░░██╗██╔══██╗░░╚██╔╝░░██╔═══╝░░░░██║░░░██║░░██║██║░░██║██╔══██║██╔══██╗░░░██║░░░██╔══██║
╚█████╔╝██║░░██║░░░██║░░░██║░░░░░░░░██║░░░╚█████╔╝██████╔╝██║░░██║██║░░██║░░░██║░░░██║░░██║
░╚════╝░╚═╝░░╚═╝░░░╚═╝░░░╚═╝░░░░░░░░╚═╝░░░░╚════╝░╚═════╝░╚═╝░░╚═╝╚═╝░░╚═╝░░░╚═╝░░░╚═╝░░╚═╝`

console.log('\n')
console.log(centerAlign(namegen,0));
console.log('\n')





inquirer.prompt([
    {
        type : 'list',
        name : 'test',
        message : '|----- CHOOSE -----',
        choices : ['NFT Projects','Portfolio','Contact Me','Visit Website']
    }
])