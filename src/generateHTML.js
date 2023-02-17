// main function to export

function generateHTML(data) {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>My Team</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css"> 
    </head>
    <body>
    <section class="hero is-primary">
            <div class="hero-body">
              <p class="title">
                My Team
              </p>
            
            </div>
        </section>
    <section class="container mt-5">
<div class="columns is-multiline">
    ${renderEmployeeCards(data)}
</div>
    </section>
    </body>
    </html>
    `;
};

function renderEmployeeCards(array) {
    let html = array.map(function(employee) {
        if (employee.getRole() === 'Manager') {
            return `
            <div class="column is-half">
                <div class="card">
                    <div class="card-content">
                        <div class="media">
                            <div class="media-left">
                            <figure class="image is-48x48">
                            <img src="https://cdn-icons-png.flaticon.com/512/4205/4205906.png" alt="Manager Icon">
                            </figure>
                            </div>
                            <div class="media-content">
                            <p class="title is-4">${employee.getName()}</p>
                            <p class="subtitle is-6">Manager</p>
                            </div>
                        </div>
                    </div>
                    <div class="card-footer">
                        <p class="card-footer-item">EID # ${employee.getId()}</li>
                        <p class="card-footer-item"><a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a></p>
                        <p class="card-footer-item">Office #: ${employee.getOfficeNumber()}</p>
                    </div>
                </div>
            </div>
            `
        } else if (employee.getRole() === 'Engineer') {
            return `
            <div class="column is-half">
                <div class="card">
                    <div class="card-content">
                        <div class="media">
                            <div class="media-left">
                            <figure class="image is-48x48">
                            <img src="https://cdn-icons-png.flaticon.com/512/122/122462.png" alt="Engineer Icon">
                            </figure>
                            </div>
                            <div class="media-content">
                            <p class="title is-4">${employee.getName()}</p>
                            <p class="subtitle is-6">Engineer</p>
                            </div>
                        </div>
                    </div>
                    <div class="card-footer">
                        <p class="card-footer-item">EID # ${employee.getId()}</li>
                        <p class="card-footer-item"><a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a></p>
                        <p class="card-footer-item">GitHub:	%20<a href="https://www.github.com/${employee.getGithub()}">${employee.getGithub()}</a></p>
                    </div>
                </div>
            </div>
            `
        } else {
            return `
            <div class="column is-half">
                <div class="card">
                    <div class="card-content">
                        <div class="media">
                            <div class="media-left">
                            <figure class="image is-48x48">
                            <img src="https://cdn-icons-png.flaticon.com/512/9734/9734312.png" alt="Intern Icon">
                            </figure>
                            </div>
                            <div class="media-content">
                            <p class="title is-4">${employee.getName()}</p>
                            <p class="subtitle is-6">Intern</p>
                            </div>
                        </div>
                    </div>
                    <div class="card-footer">
                        <p class="card-footer-item">EID # ${employee.getId()}</li>
                        <p class="card-footer-item"><a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a></p>
                        <p class="card-footer-item">School: ${employee.getSchool()}</p>
                    </div>
                </div>
            </div>
            `;
        }
    }).join(''); // .join prevents unexpected "," added between <article> tags in html
    return html; 
    // had trouble with renderEmployeeCards returning 'undefined' as I thought return in .map function would return to the parent function.
    // needed to define this html variable to hold the .map returns, then return the variable to renderEmployeeCards.
};

module.exports = generateHTML;