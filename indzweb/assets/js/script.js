function initMap() {
    const location = { lat: 50.4501, lng: 30.5234 }; // Координати Києва
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 10,
        center: location,
    });
    const marker = new google.maps.Marker({
        position: location,
        map: map,
    });
}
