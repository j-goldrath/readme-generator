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
  switch (license) {
    case 'MIT':
      return `${renderLicenseBadge(license)}
      ${renderLicenseLink(license)}
      
      # Released under MIT License

      Copyright (c) 2013 Mark Otto.
      
      Copyright (c) 2017 Andrew Fong.
      
      Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
      
      The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
      
      THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.`;
    case 'BSD 3-Clause':
      return `${renderLicenseBadge(license)}
      ${renderLicenseLink(license)}

      Copyright <YEAR> <COPYRIGHT HOLDER>

      Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
      
      1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
      
      2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
      
      3. Neither the name of the copyright holder nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.
      
      THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.`;
    case 'GNU GPLv3':
      return `${renderLicenseBadge(license)}
      ${renderLicenseLink(license)}
      
      <one line to give the program's name and a brief idea of what it does.>
      Copyright (C) <year>  <name of author>
  
      This program is free software: you can redistribute it and/or modify
      it under the terms of the GNU General Public License as published by
      the Free Software Foundation, either version 3 of the License, or
      (at your option) any later version.
  
      This program is distributed in the hope that it will be useful,
      but WITHOUT ANY WARRANTY; without even the implied warranty of
      MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
      GNU General Public License for more details.
  
      You should have received a copy of the GNU General Public License
      along with this program.  If not, see <https://www.gnu.org/licenses/>.`;
    default:
      return '';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {

  let readmeTop;
  let readmeTableOfContents = '## Table of Contents\n';
  let readmeContents;
  // create title section if user inputted a title
  if (answers.title !== '') {
    readMeTop += `# ${answers.title}\n`;
  }
  // create description section if user inputted a description
  if (answers.description !== '') {
    readMeTop += `${answers.description}\n\n`;
  }
  // create installation section if user inputted installation instructions
  if (answers.installation !== '') {
    readmeTableOfContents += '- [Installation](#installation)\n';
    readMeBody += `## Installation\n${answers.installation}\n`;
  }
  // create usage section if user inputted usage instructions
  if (answers.usage !== '') {
    readmeTableOfContents += '- [Usage](#usage)\n';
    readMeBody += `## Usage\n${answers.usage}\n`;
  }
  // create contributing section if user inputted contributing guidelines
  if (answers.contributing !== '') {
    readmeTableOfContents += '- [Contributing](#contributing)\n';
    readMeBody += `## Contributing\n${answers.contributing}\n`;
  }
  // create tests section if user inputted test instructions
  if (answers.tests !== '') {
    readmeTableOfContents += '- [Tests](#tests)\n';
    readMeBody += `## Tests\n${answers.tests}\n`;
  }
  // create license section if user inputted license
  if (answers.license !== '') {
    readmeTableOfContents += '- [License](#license)\n';
    readMeBody += `## License\n${renderLicenseSection(answers.license)}\n`;
  }

  let finalReadme = readmeTop + readmeTableOfContents + readmeContents;

  return finalReadme;
}

module.exports = generateMarkdown;
