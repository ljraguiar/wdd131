
const yearSpan = document.getElementById('currentyear');
yearSpan.textContent = new Date().getFullYear();

const lastModifiedParagraph = document.getElementById('lastModified');
lastModifiedParagraph.textContent = `Last Modification: ${document.lastModified}`;