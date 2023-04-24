const express = require('express');
const mysql = require('mysql2');
const PORT = process.env.PORT || 3001;
const app = express();
const inquirer = require('inquirer');
const cTable = require("console.table");
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'test'
  });

inquirer
    .prompt([
        {
            type: 'list',
            name: 'task',
            message: 'What would you like to do?',
            choices: ["View all departments", "View all roles", "View all employees", "Add a department", "Add a role", "Add an employee", "Update an employee role"]
        },
    ])
    .then((data) => {
        switch (type) {
            case 'View all departments': {
               return viewDepartments();
               break;
            }
            case 'View all roles': {
                return viewRoles();
                break;
            }
            case 'View all employees': {
                return viewEmployees();
                break;
            }
            case 'Add a department': {
                return addDepartment();
                break;
            }
            case 'Add a role': {
                return allowedNodeEnvironmentFlags();
                break;
            }
            case 'Add an employee': {
                return addEmployee();
                break;
            }
            case 'Update an employee role': {
                return updateEmployee();
                break;
            }


            default:
                return undefined;
        }

    });

function viewDepartments() {

}








app.listen(PORT, () =>
    console.log(`App listening at http://localhost:${PORT} 🚀`)
);