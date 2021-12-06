// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'MIT':
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    case 'BSD 3-Clause':
      return '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
    case 'GNU GPLv3':
      return '[![License: GNU GPLv3 v2](https://img.shields.io/badge/License-GNU GPLv3%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/GNU GPLv3-2.0.en.html)';
    default:
      return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'MIT':
      return '[MIT License](https://www.mit.edu/~amini/LICENSE.md)';
    case 'BSD 3-Clause':
      return '[BSD 3-Clause License](https://opensource.org/licenses/BSD-3-Clause)';
    case 'GNU GPLv3':
      return '[GNU GPLv3](https://www.gnu.org/licenses/old-licenses/GNU GPLv3-2.0.en.html)';
    default:
      return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `This application is covered under the license of ${renderLicenseLink(license)}`;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {

  let readmeTop;
  let readmeTableOfContents = '## Table of Contents\n';
  let readmeContents;
  // create title section if user inputted a title
  if (answers.title !== '') {
    readMeTop += `# ${answers.title}\n${renderLicenseBadge(answers.license)}\n\n`;
  }
  // create description section if user inputted a description
  if (answers.description !== '') {
    readMeTop += `## Description\n${answers.description}\n\n`;
  }
  // create installation section if user inputted installation instructions
  if (answers.installation !== '') {
    readmeTableOfContents += '- [Installation](#installation)\n';
    readMeBody += `## Installation\n${answers.installation}\n\n`;
  }
  // create usage section if user inputted usage instructions
  if (answers.usage !== '') {
    readmeTableOfContents += '- [Usage](#usage)\n';
    readMeBody += `## Usage\n${answers.usage}\n\n`;
  }
  // create contributing section if user inputted contributing guidelines
  if (answers.contributing !== '') {
    readmeTableOfContents += '- [Contributing](#contributing)\n';
    readMeBody += `## Contributing\n${answers.contributing}\n\n`;
  }
  // create tests section if user inputted test instructions
  if (answers.tests !== '') {
    readmeTableOfContents += '- [Tests](#tests)\n';
    readMeBody += `## Tests\n${answers.tests}\n\n`;
  }
  // create license section if user inputted license
  if (answers.license !== '') {
    readmeTableOfContents += '- [License](#license)\n';
    readMeBody += `## License\n${renderLicenseSection(answers.license)}\n\n`;
  }

  let finalReadme = readmeTop + readmeTableOfContents + readmeContents;

  return finalReadme;
}

module.exports = generateMarkdown;
