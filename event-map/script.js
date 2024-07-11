var map = L.map('map').setView([31.3055, 121.5041], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var locations = [
    {lat: 31.3055, lon: 121.5041, title: '上海财经大学', imageUrl: './images/23112501.jpg'},
    {lat: 35.7054, lon: 139.7519, title: '231209-异次元歌合战day1(东京巨蛋)', imageUrl: './images/23120901.jpg'},
    {lat: 31.3046, lon: 121.4986, title: '240310-甲子园day2观影会(上海财经大学)', imageUrl: './images/24031001.jpg'},
    {lat: 31.2327, lon: 121.4751, title: '240622-鲤鱼上海演唱会(人民广场站前)', imageUrl: './images/24062201.jpg'},
    {lat: 31.2916, lon: 121.4532, title: '240622-鲤鱼上海演唱会(静安体育中心)', imageUrl: './images/24062202.jpg'},
];

function addLocationMarker(location) {
    var marker = L.marker([location.lat, location.lon]).addTo(map);
    var popupContent = '<h3>' + location.title + '</h3>' +
                       '<img src="' + location.imageUrl + '" class="thumbnail" onclick="openModal(\'' + location.imageUrl + '\')" style="width: 100px; cursor: pointer;">';

    marker.bindPopup(popupContent);
}

locations.forEach(function(location) {
    addLocationMarker(location);
});

var latlngs = locations.map(function(location) {
    return [location.lat, location.lon];
});

if (latlngs.length > 0) {
    var polyline = L.polyline(latlngs, {color: 'blue'}).addTo(map);
    map.fitBounds(polyline.getBounds());
} else {
    var polyline = L.polyline(latlngs, {color: 'blue'}).addTo(map);
}

function openModal(imageUrl) {
    var modal = document.getElementById("imageModal");
    var modalImg = document.getElementById("modalImage");
    var captionText = document.getElementById("caption");

    modal.style.display = "block";
    modalImg.src = imageUrl;
    captionText.innerHTML = imageUrl;

    var span = document.getElementsByClassName("close")[0];
    span.onclick = function() {
        modal.style.display = "none";
    };
}