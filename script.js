//This runs the functions of the website

// Reveals extra content when the button is clicked
function revealMore() {
    const content = document.getElementById('hiddenContent');
    if (content.style.display === 'none') {
        content.style.display = 'block';
    } else {
        content.style.display = 'none';
    }
}
