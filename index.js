const { Manager } = require("./lib/Engineer");
const { Engineer } = require("./lib/Engineer");
const { Intern } = require("./lib/Intern");

const fs = require("fs");
const inquirer = require("inquirer");
const { managerArr } = require("./lib/Employee");

const teamArray = [];

const addManager = () => {
  console.log(`function to call the Manager`);
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Who's your Team Manager?",
      },
      {
        type: "input",
        name: "id",
        message: "input your Manager's ID.",
        validate: (nameInput) => {
          if (isNaN(nameInput)) {
            console.log(`Please input your Manager's ID!`);
            return false;
          } else {
            return true;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "Please input your manager's email.",
        validate: (email) => {
          //using the regex mail check validation metehod.
          valid =
            /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(
              email
            );
          if (valid) {
            return true;
          } else {
            console.log(`Please enter an email!`);
            return false;
          }
        },
      },
      {
        type: "input",
        name: "officeNumber",
        message: "Please enter the manager's office number",
        validate: (nameInput) => {
          if (isNaN(nameInput)) {
            console.log(`Please enter an office number!`);
            return false;
          } else {
            return true;
          }
        },
      },
    ])
    .then((managerInput) => {
      const { name, id, email, officeNumber } = managerInput;
      const manager = new Manager(name, id, email, officeNumber);

      teamArray.push(manager);
      console.log(manager);
    });
};

const employeeArr = () => {
  console.log(`function to add employee`);
return inquirer 
.prompt([
  {
type: "list", 
name: "role", 
message: "Please select your employee's role", 
choices: ["Engineer", "Intern"], 
  }
  {
    type: "input", 
    name: "name", 
    message: "Input your Employee's Name", 
    validate: (nameInput) => {
      if (nameInput) {
        return true; 
      } else {
        console.log(`Please input a valid Employee's name`)
        return false; 
      }
    }
  },
{
  type: "input", 
  name: "email", 
  message: "Please sinput your employee's email.", 
  validate: (email) => {
    validate = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(
      email
    );
    if (valid) {
      return true; 
    } else {
      console.log(`Please enter a valid Email.`)
      return false;
    }
     }
},
{
type: "input", 
name: "github", 
message: "Please input your employee's github user name",
when(input) {
  return input.role === "Engineer";
  },
  validate: (nameInput) => {
    if (nameInput) {
return true; 
    } else {
      console.log(`Please input a github username!`)
    }
  }
},

{
type: "input", 
name: "school", 
message: "Please input your Intern's School", 
when(input) {
  return input.role === "Intern"; 
}, 
validate: (nameInput) => {
  if (nameInput) {
    return true; 
  }else {
    console.log(`Please enter your Intern's School!!!`)
  }
}
}, 
{
  type: "confirm", 
  name: "confirmEmployeeArr", 
  message: "Would you like to add more members for your Team?", 
  default: false,
}, 
])





};
