// function to generate markdown for README
function generateMarkdown(data) {
    // console.log(data.license);
    let badge = "";
    switch (data.license) {
        case "MIT":
            badge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
            break;
        case "Apache 2.0":
            badge = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
            break;
        case "BSD 3-Clause":
            badge = "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
            break;
        case "ISC":
            badge = "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)";
            break;
        default:
            badge = "Error";
    }

    return `
# ${data.title} ${badge}
## Description 
${data.description} 
## Table of Contents 
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contribution](#contribution)
* [Tests](#tests)
* [Questions](#questions)
## Installation
Install dependencies:
\`\`\`
${data.dependencyCommand}
\`\`\`
## Usage
${data.usage}
## License

## Contribution 
${data.contribution}
## Tests
\`\`\`
${data.testCommand}
\`\`\`
## Questions 
GitHub Username: ${data.username} \
GitHub Profile: [github.com/${data.username}](https://github.com/${data.username}) \
Please email additional questions at ${data.email}. 
`;
}

module.exports = generateMarkdown;
