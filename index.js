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
                message: 'Title of the project? ',
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
                message: 'Enter a description: ',
                name: 'description',
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
                type: 'list',
                message: 'Enter your license: ',
                name: 'license',
                choices: ['MIT License', 'Apache License 2.0', 'GNU General Public License (GPL)', 'BSD 2-Clause "Simplified" License', 'BSD 3-Clause "New" or "Revised" License', 'Boost Software License 1.0', 'Creative Commons Zero v1.0', 'Eclipse Public License 2.0']
            },
            {
                type: 'input',
                message: 'Enter contribution instructions: ',
                name: 'contributing',
            },
            {
                type: 'input',
                message: 'Enter test instructions: ',
                name: 'test',
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


    generateREADME()

}

prompt()

function generateREADME() {

    const licenseBadge = genearateLicenseBadge(license);

    const readmeContent = `
${licenseBadge}

# ${title}

## Description

${description}

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
`;

    fs.writeFile('README2.md', readmeContent, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log('REAME.md generated successfully');
        }
    })
}
