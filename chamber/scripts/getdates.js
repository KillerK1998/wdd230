function setCopyrightYear() {
    const year = new Date().getFullYear(); // Get the current year
    document.querySelector('.copyright').textContent = `© ${year} Saint George Chamber`; 
}
function setLastModifiedDate() {
    const lastModified = document.lastModified; 
    const modifiedParagraph = document.querySelector('.lastmodified'); 
    if (modifiedParagraph) {
        modifiedParagraph.textContent = `Last Updated: ${lastModified}`; 
    }
}
window.onload = function() {
    setCopyrightYear();
    setLastModifiedDate();
};
