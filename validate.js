document.getElementById("claimForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Az űrlap alapértelmezett beküldésének megakadályozása
    let form = new FormData(this);
    let params = new URLSearchParams(form).toString();
    
    let eventDate = new Date(form.get("eventDate"));
    if (eventDate > new Date()) {
        alert("A biztosítási esemény dátuma nem lehet a jövőben!");
        return;
    }
    
    window.location.href = "thankyou.html?" + params; // Átirányítás az adatokkal
});
