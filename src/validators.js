function validateEmail(email) {
    // Regex email check test found on regexr.com (https://regexr.com/3e48o)
    var valid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    // alert via console.log if invalid
    if (valid !== true) {
        console.log("\n Please enter a valid email.");
        return;
    } else {
        return valid;
    }
}

function validateUsername(username) {
    // Regex GitHub username check test found on npmjs.com (https://www.npmjs.com/package/github-username-regex?activeTab=explore)
    var valid = /^[a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,38}$/i.test(username);
    // alert via console.log if invalid
    if (valid !== true) {
        console.log("\n Please enter a valid GitHub username.");
        return;
    } else {
        return valid;
    }
}

function validateId(id) {
    // Regex email check test found on regexr.com (https://regexr.com/3e48o)
    var valid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(id);
    // alert via console.log if invalid
    if (valid !== true) {
        console.log("\n Please enter a valid employee ID.");
        return;
    } else {
        return valid;
    }
}

exports.Id = validateId;
exports.Email = validateEmail;
exports.Username = validateUsername;