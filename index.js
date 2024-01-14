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

const questions = [
    'Enter the title of the project: ',
    'Enter a description: ',
    'Enter installation notes: ',
    'Enter usage comments: ',
    'Enter your license: ',
    'Enter contribution instructions: ',
    'Enter test instructions: ',
    'Enter your GitHub Username: ',
    'Enter your email address: ',
];


const genearateLicenseBadge = function (license) {
    const badgeURL = `https://img.shields.io/badge/license-${encodeURIComponent(license)}-brightgreen`;

    if (license === 'BSD 3-Clause "New" or "Revised" License') {
        return '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
    } else if (license === 'BSD 2-Clause "Simplified" License') {
        return '[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)';
    } else {
        return `![License](${badgeURL})`
    }
}


async function prompt() {

    const response = await inquirer
        .prompt([
            {
                type: 'input',
                message: questions[0],
                name: 'title',
            }])
        .then((response) => {
            title = response.title
            console.log(`Project title: ${title}`);
        })

    await inquirer
        .prompt([
            {
                type: 'input',
                message: questions[1],
                name: 'description',
            },
            {
                type: 'input',
                message: questions[2],
                name: 'installNotes',
            },
            {
                type: 'input',
                message: questions[3],
                name: 'usage',
            },
            {
                type: 'list',
                message: questions[4],
                name: 'license',
                choices: ['MIT License', 'Apache License 2.0', 'GNU General Public License (GPL)', 'BSD 2-Clause "Simplified" License', 'BSD 3-Clause "New" or "Revised" License', 'Boost Software License 1.0', 'Creative Commons Zero v1.0', 'Eclipse Public License 2.0']
            },
            {
                type: 'input',
                message: questions[5],
                name: 'contributing',
            },
            {
                type: 'input',
                message: questions[6],
                name: 'test',
            },
            {
                type: 'input',
                message: questions[7],
                name: 'github',
            },
            {
                type: 'input',
                message: questions[8],
                name: 'email',
            },

        ])
        .then((response2) => {
            description = response2.description;
            installation = response2.installNotes;
            usage = response2.usage;
            contributing = response2.contributing;
            test = response2.test;
            license = response2.license;
            githubUsername = response2.github;
            emailAddress = response2.email;
        });


    generateREADME('sampleREADME.md')

}

prompt()

function generateREADME(filename) {

    const licenseBadge = genearateLicenseBadge(license);

    const readmeContent = `
${licenseBadge}

# ${title}

## Description

${description}

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#installation">Installation</a></li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#tests">Tests</a></li>
    <li><a href="#questions">Questions</a></li>
  </ol>
</details>

## Installation

${installation}

## Usage

${usage}

## License

Distributed under the ${license}.

## Contributing

${contributing}

## Tests

${test}

## Questions

GitHub: [${githubUsername}](https://github.com/${githubUsername})

Email: ${emailAddress}

If you have any queries, you can contact me using the email above.
`;

    fs.writeFile(filename, readmeContent, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log('REAME.md generated successfully');
        }
    })
}
