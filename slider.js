window.onload = function() {
    var yearSpan = document.getElementById('year');
    var currentYear = new Date().getFullYear();
    yearSpan.textContent = currentYear;
}
