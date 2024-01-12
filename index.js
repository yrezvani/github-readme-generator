import inquirer from 'inquirer';
import fs from 'fs';

inquirer
    .prompt([
        {
            type: 'input',
            message: 'Title of the project? ',
            name: 'title',
        }])
    .then((response) => {
        console.log(`Project title: ${response.title}`);
        fs.writeFile('README2.md',
            `
# ${response.title}
 
        `, (err) => {
            if (err) {
                console.log('Error:', err);
            } else {
                console.log('File written successfully!');
            }
        })
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
    ])
    .then((response) => {
        fs.writeFile('README2.md',
            `
# ${response.title}

## Description

${response.description}
    
## Table of Contents
    
${response.tcontents}

## Installation

${response.installNotes}

## Usage

${response.usage}

## License

License

${response.license}

## Contributing

${response.contributing}

## Tests

${response.test}

## Questions

${response.questions}
---

© 2024 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.
    `, (err) => {
            if (err) {
                console.log('Error:', err);
            } else {
                console.log('File written successfully!');
            }
        })
    })
    .catch((err) => {
        console.log(err);
    })
