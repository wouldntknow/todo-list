#! /usr/bin/env node
import inquirer from "inquirer"
let todos = [];

let i = true;

while(i){
let Addtasks = await inquirer.prompt(
    [
        {
          name:"todo",
          type: "input",
          message:"Add todos",
        },
        {
            name:"Addmore",
            type: "confirm",
            message: "Do you want to add more?",
            default: "false",
        },
    ]
);
todos.push(Addtasks.todo)
i=Addtasks.Addmore
console.log(todos)
}