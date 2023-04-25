const express = require('express');
const mysql = require('mysql2');
const PORT = process.env.PORT || 3001;
const app = express();
const inquirer = require('inquirer');
const cTable = require("console.table");
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


const db = mysql.createConnection(
    {
      host: 'localhost',
      // MySQL username,
      user: 'root',
      // MySQL password
      password: 'Correcthorse',
      database: 'company_db'
    },
    console.log(`Connected to the company_db database.`)
  );

inquirer
    .prompt([
        {
            type: 'list',
            name: 'task',
            message: 'What would you like to do?',
            choices: ["View all departments", "View all roles", "View all employees", "Add a department", "Add a role", "Add an employee", "Update an employee role"]
        },
    ])
    .then(function(answer) {
        if (answer == "View all departments") {
                return viewDepartments();
            } else if (answer == "View all roles")
{
                return viewRoles();

            } else if (answer == "View all employees")
{
                return viewEmployees();
            } else if (answer == "Add a department")
{
                return addDepartment();

            } else if (answer == "Add a role"){
                return addRole();
            } else if (answer == "Add an employee")
{
                return addEmployee();
            } else if (answer == "Update an employee role") {
                return updateEmployee();
            } else {
                return;
            }



    });

const viewDepartments = () => {
    db.query('SELECT id AS "Department ID, name AS "Department Name"'), (err, result) => { if (err) {
        throw err }
        console.log(results)
        console.table(result); }
}
const viewRoles = () => {
    db.query('SELECT role.id AS "Role ID, role.title AS "Role", role.department_id AS "Department ID"'), (err, result) => { if (err) {
        throw err }
        console.log(results)
        console.table(result); }
}
const viewEmployees = () => {
    db.query('SELECT id AS "Employee ID, employee.first_name AS "First Name", employee.last_name AS "Last Name", employee.role_id AS "Role ID", employee.manager_id AS "Manager"'), (err, result) => { if (err) {
        throw err }
        console.table(result); }
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
            const query = (`INSERT INTO employee(first_name, last_name, role_id, manager_id) VALUES ("${answer.empFirstName}"), ("${answer.empLastName}"),(SELECT id FROM role WHERE title = "${answer.empRole}"), (SELECT id FROM employee WHERE last_name = "${answer.empManager}")`)

        })
}








app.listen(PORT, () =>
    console.log(`App listening at http://localhost:${PORT} 🚀`)
);