// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { 
  switch (license) {
    case 'MIT':
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    case 'BSD':
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
      return '(https://www.mit.edu/~amini/LICENSE.md)';
    case 'BSD 3-Clause':
      return '(https://opensource.org/licenses/BSD-3-Clause)';
    case 'GNU GPLv3':
      return '(https://www.gnu.org/licenses/old-licenses/GNU GPLv3-2.0.en.html)';
    default:
      return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { 
  switch (license) {
    case 'MIT':
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    case 'BSD':
      return '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
    case 'GNU GPLv3':
      return '[![License: GNU GPLv3 v2](https://img.shields.io/badge/License-GNU GPLv3%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/GNU GPLv3-2.0.en.html)';
    default:
      return '';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
          ${data.description}

          ## Table Of Contents
          - [Installation](#installation)
          - [Usage](#usage)
          - [Screen Shots](#screen-shots)
          - [License](#License)

          ## Installation
          ${data.installation}

          ## Usage
          ${data.usage}

          ## Screen-Shots
          
          ## Walkthrough
          
          ## License

          ## Contributing

          ## Tests

         `;
}

module.exports = generateMarkdown;
