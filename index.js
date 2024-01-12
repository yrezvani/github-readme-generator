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
