// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (liscense !== "No license") {
    switch (license) {
      case "Apache 2.0":
        licenseBadge = `[![License](https://img.shields.io/badge/License-Apache%202.0-yellowgreen.svg)]`;
        break;
      case "BSD 3-Clause":
        licenseBadge = `[![License](https://img.shields.io/badge/License-BSD%203--Clause-orange.svg)]`;
        break;
      case "GNU GPLv3.0":
        licenseBadge = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]`;
        break;
      case "MIT":
        licenseBadge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]`;
        break;
      case "Mozilla Public 2.0":
        licenseBadge = `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)]`;
        break;
      default:
        break;
    }
    return liscenseBadge;
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "No license") {
    switch (license) {
      case "Apache 2.0":
        licenseLink = `(https://opensource.org/licenses/Apache-2.0)`;
        break;
      case "BSD 3-Clause":
        licenseLink = `(https://opensource.org/licenses/BSD-3-Clause)`;
        break;
      case "GNU GPLv3.0":
        licenseLink = `(https://www.gnu.org/licenses/gpl-3.0)`;
        break;
      case "MIT":
        licenseLink = `(https://opensource.org/licenses/MIT)`;
        break;
      case "Mozilla Public 2.0":
        licenseLink = `(https://opensource.org/licenses/MPL-2.0)`;
        break;
      default:
        break;
    }
    return licenseLink;
  } else {
    return " ";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "No license") {
    return `
    The application is covered under the following license: ${renderLicenseBadge(
      license
    )}${renderLicenseLink(license)}
      `;
  } else {
    return " ";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
    
  ${renderLicenseBadge(data.license)}${renderLicenseLink(data.license)}
## Description 📝 
  ${data.description}
## Table of Contents
  - [Description 📝](#description-)
  - [Installation 🗳](#installation-)
  - [Usage 💻](#usage-)
  - [License 🚀](#license-)
  - [Contribution 👩🏻‍💻](#contribution-)
  - [Test 🧩](#test-)
  - [Questions ❓](#questions-)
## Installation 🗳 
  ${data.installation}
## Usage 💻 
  ${data.usage}
## License 🚀
  ${renderLicenseSection(data.license)}
## Contribution 👩🏻‍💻 
  ${data.contribution}
## Test 🧩
  ${data.test}
## Questions ❓
📩 If you have any question, email me here at : ${data.email}<br/>
:octocat: My Github page is [${data.username}](https://github.com/${
    data.username
  })


`;
}

module.exports = generateMarkdown;
