// Function to set the copyright year
function setCopyrightYear() {
    const year = new Date().getFullYear(); // Get the current year
    document.querySelector('footer p').textContent = `© ${year} Kaler Sappington, Utah`; 
}

// Function to set the last modified date
function setLastModifiedDate() {
    const lastModified = document.lastModified; 
    const modifiedParagraph = document.getElementById('lastModified'); 
    if (modifiedParagraph) {
        modifiedParagraph.textContent = `Last Updated: ${lastModified}`; 
    }
}

// Call the functions when the window loads
window.onload = function() {
    setCopyrightYear();
    setLastModifiedDate();
};
