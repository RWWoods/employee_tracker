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

const viewDepartments = () => {
    db.query('SELECT id AS "Department ID, name AS "Department Name"'), (err, result) => {console.table(result);}
}
const viewRoles = () => {
    db.query('SELECT role.id AS "Role ID, role.title AS "Role", role.department_id AS "Department ID"'), (err, result) => {console.table(result);}
}
const viewEmployees = () => {
    db.query('SELECT id AS "Employee ID, employee.first_name AS "First Name", employee.last_name AS "Last Name", employee.role_id AS "Role ID", employee.manager_id AS "Manager"'), (err, result) => {console.table(result);}
}
const addDepartment = () => {
    inquirer
        .prompt([{
            name: empFirstName,
            type: input,
            message: "new employee's first name?"
        },
    {
        name: empLastName,
        type: input,
        message: "new employee's last name?"
    },
{
    name: empRole,
    type: input,
    message: "new employee's role?"
},
{
    name: empManager,
    type: input,
    message: "new employee's manager?"
}
])
    .then(answer => {
    const query = db.query('SELECT id AS "Department ID, name AS "Department Name"'), (err, result) => {console.table(result);}

})
}








app.listen(PORT, () =>
    console.log(`App listening at http://localhost:${PORT} 🚀`)
);