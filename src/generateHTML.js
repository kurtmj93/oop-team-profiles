function generateHTML(data) {
    console.log(data);
    var employees = renderEmployeeCards(data);
    console.log(employees); // using console.log to debug issues
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
    ${employees}
    </body>
    </html>
    `;
};

function renderEmployeeCards(array) {
    let html = array.map(function(employee) {
        return `
        <article id="${employee.getId()}" class="${employee.getRole()}">
        <ul>
        <li>Employee ID #: ${employee.getId()}</li>
        <li>Name: ${employee.getName()}</li>
        <li>Email: ${employee.getEmail()}</li>
        </ul>
        </article>
        `;
    }).join(''); // .join prevents unexpected , added between <article> tags in html
    return html; 
};


module.exports = generateHTML;