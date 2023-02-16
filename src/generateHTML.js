function generateHTML(data) {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>My Team</title>
    <link rel="stylesheet" href="style.css">
    </head>
    <body>
    ${renderEmployeeCards(data)}
    </body>
    </html>
    `;
};

function renderEmployeeCards(array) {
    let html = array.map(function(employee) {
        if (employee.getRole() === 'Manager') {
            return `
            <article class="Manager">
            <h2>${employee.getName()}</h2>
            <h3>Manager</h3>
            <ul>
            <li>Employee ID #: ${employee.getId()}</li>
            <li>Email: <a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a></li>
            <li>Office #: ${employee.getOfficeNumber()}</li>
            </ul>
            </article>
            `
        } else if (employee.getRole() === 'Engineer') {
            return `
            <article class="Engineer">
            <h2>${employee.getName()}</h2>
            <h3>Engineer</h3>
            <ul>
            <li>Employee ID #: ${employee.getId()}</li>
            <li>Email: <a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a></li>
            <li>GitHub: <a href="https://www.github.com/${employee.getGithub()}">${employee.getGithub()}</a></li>
            </ul>
            </article>
            `
        } else {
            return `
            <article class="Intern">
            <h2>${employee.getName()}</h2>
            <h3>Intern</h3>
            <ul>
            <li>Employee ID #: ${employee.getId()}</li>
            <li>Email: <a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a></li>
            <li>School: ${employee.getSchool()}</li>
            </ul>
            </article>
            `;
        }
    }).join(''); // .join prevents unexpected "," added between <article> tags in html
    return html; 
};

module.exports = generateHTML;