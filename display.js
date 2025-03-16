document.addEventListener("DOMContentLoaded", function() {
    let params = new URLSearchParams(window.location.search);
    let summaryDiv = document.getElementById("summary");
    
    params.forEach((value, key) => {
        let p = document.createElement("p");
        p.textContent = `${key}: ${value}`;
        summaryDiv.appendChild(p);
    });
});
