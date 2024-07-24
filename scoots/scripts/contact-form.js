function getQueryParams() {
    const params = {};
    const queryString = window.location.search.substring(1);
    const pairs = queryString.split('&');
    pairs.forEach(pair => {
        const [key, value] = pair.split('=');
        params[decodeURIComponent(key)] = decodeURIComponent(value);
    });
    return params;
}

// Display the submitted form data
function displaySubmittedData() {
    const params = getQueryParams();
    const submittedDataDiv = document.getElementById('submitted-data');
    const name = params['name'];
    const email = params['email'];
    const comment = params['comment'];
    submittedDataDiv.innerHTML = `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Comment:</strong> ${comment}</p>
    `;
}

// Execute the function to display submitted data on page load
window.onload = displaySubmittedData;