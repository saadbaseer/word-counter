#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt({
    name: "sentence",
    type: "input",
    message: "enter your sentence",
});
let words = answer.sentence.trim().split(" ");
console.log(words);
console.log(`your sentence posseses ${words.length} words`);
