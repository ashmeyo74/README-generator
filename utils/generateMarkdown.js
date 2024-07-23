
// Returns badge based on user selection. f there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return ' ';
  } else if(license === "MIT License") {
    return badge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";

  } else if(license === "GNU GPLv3") {
    return badge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";

  } else if(license === "Apache License 2.0") {
    return badge = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";

  } else if(license === "BSD 3-Clause") {
    return badge = "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";

  } else if(license === "CC0 (Creative Commons)") {
    return badge = "[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)";
 
  }; 
  
}

// Returns license link based on user selection. f there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return ' ';
  } else if(license === "MIT License") {
    return link = "[License: MIT](https://opensource.org/licenses/MIT)";

  } else if(license === "GNU GPLv3") {
    return link = "[License: GPL v3](https://www.gnu.org/licenses/gpl-3.0)";

  } else if(license === "Apache License 2.0") {
    return link = "[License](https://opensource.org/licenses/Apache-2.0)";

  } else if(license === "BSD 3-Clause") {
    return link = "[License](https://opensource.org/licenses/BSD-3-Clause)";

  } else if(license === "CC0 (Creative Commons)") {
    return link = "[License: CC0-1.0](http://creativecommons.org/publicdomain/zero/1.0/)";
 
  };
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return ''
  } else {
    return `${renderLicenseBadge(license)} \n
    See License: ${renderLicenseLink(license)}`
  }
  }


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
\n
\n

  ## Description
\n
${data.description}
  \n
  \n

# Table of Contents
\n [Installation](#Installation)
\n [Usage](#Usage)
\n [Credits](#Credits)
\n [License](#License)
\n [Questions](#Questions)

\n
\n

  ## Installation
  \n
  ${data.installation}
  \n
  \n

## Usage
\n
${data.usage}
  \n
  \n

## Credits
\n
${data.credits}

## License
${renderLicenseSection(data.License)}

\n

## Questions
Have any questions about this project? You can reach the author under the following: \n
[github.com/${data.Username}](github.com/${data.Username})\n
**Email:** ${data.Email}
`;
}

module.exports = generateMarkdown;
