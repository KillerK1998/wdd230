
function setCopyrightYear() {
    const year = new Date().getFullYear(); 
    const copyright = document.querySelector('.copyright');
    if (copyright) {
        copyright.textContent = `© ${year} Saint George Chamber`;
    }
}


function setLastModifiedDate() {
    const lastModified = document.lastModified;
    const modifiedParagraph = document.querySelector('.lastmodified');
    if (modifiedParagraph) {
        modifiedParagraph.textContent = `Last Updated: ${lastModified}`;
    }
}

document.addEventListener("DOMContentLoaded", function() {
    
    setCopyrightYear();
    setLastModifiedDate();
});
