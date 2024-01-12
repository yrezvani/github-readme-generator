import inquirer from 'inquirer';
import fs from 'fs';

let title = '';
let description = '';
let installation = '';
let usage = '';
let license = '';
let contributing = '';
let test = '';
let githubUsername = '';
let emailAddress = '';

inquirer
    .prompt([
        {
            type: 'input',
            message: 'Title of the project? ',
            name: 'title',
        }])
    .then((response) => {
        console.log(`Project title: ${response.title}`);
        title = response.title
    })
    .catch((err) => {
        console.log(err);
    });

inquirer
    .prompt([
        {
            type: 'input',
            message: 'Enter a description: ',
            name: 'description',
        },
        {
            type: 'input',
            message: 'Enter your table of contents: ',
            name: 'tcontents',
        },
        {
            type: 'input',
            message: 'Enter installation notes: ',
            name: 'installNotes',
        },
        {
            type: 'input',
            message: 'Enter usage comments: ',
            name: 'usage',
        },
        {
            type: 'input',
            message: 'Enter your license: ',
            name: 'license',
            choices: ['MIT License', 'Apache License 2.0', 'GNU General Public License (GPL)', 'BSD 2Clause "Simplified" License', 'BSD 3-Clas "New" or "Revised" License', 'Boost Software License 1.0', 'Creative Commons Zero v1.0', 'Eclipse Public License 2.0']
        },
        {
            type: 'input',
            message: 'Who are the contributers (blank if only you): ',
            name: 'contributing',
        },
        {
            type: 'input',
            message: 'Enter test instructions: ',
            name: 'test',
        },
        {
            type: 'input',
            message: 'Enter your questions: ',
            name: 'questions',
        },
        {
            type: 'input',
            message: 'Enter your GitHub Username: ',
            name: 'github',
        },
        {
            type: 'input',
            message: 'Enter your email address: ',
            name: 'email',
        },

    ])
    .then((response) => {
        description = response.description;
        installation = response.installNotes;
        usage = response.usage;
        contributing = response.contributing;
        test = response.test;
        license = response.license;
        githubUsername = response.github;
        emailAddress = response.email;
    });

