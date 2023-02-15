function generateHTML(data) {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>My Team</title>
    <link rel="stylesheet" href="style.css">
    </head>
    <body>
    ${renderEmployeeCard(data)}
    </body>
    </html>
    `;
};

function renderEmployeeCard(data) {
    data.map( function() {
        return `
        <article id="${getId()}">
        <ul>
        <li>Employee ID #: ${getId()}</li>
        <li>Name: ${getName()}</li>
        <li>Email: ${getEmail()}</li>
        </ul>
        </article>
        `;
    })
};

module.exports = generateHTML;