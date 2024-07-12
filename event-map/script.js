var map = L.map('map').setView([31.3055, 121.5041], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var locations = [
    {lat: 31.3070, lon: 121.4996, title: '上海财经大学', imageUrl: './images/23112501.jpg'},
    {lat: 35.7054, lon: 139.7519, title: '231209-异次元歌合战Day1(东京巨蛋)', imageUrl: './images/23120901.jpg'},
    {lat: 35.4645, lon: 139.6305, title: '240114-虹咲6th Live神奈川公演Day2(Kアリーナ横浜)', imageUrl: './images/24011401.jpg'},
    {lat: 35.1026, lon: 138.8597, title: '240115-沼津圣地巡礼(沼津站前)', imageUrl: './images/24011501.jpg'},
    {lat: 31.3061, lon: 121.4941, title: '240310-小组甲子园Day2观影会(上海财经大学)', imageUrl: './images/24031001.jpg'},
    {lat: 35.1316, lon: 136.8983, title: '240504-CatChu!FMT爱知公演Day2(名古屋国際会議場)', imageUrl: './images/24050401.png'},
    {lat: 34.6644, lon: 135.2102, title: '240518-莲之空2nd Live兵库公演Day1(神戸ワールド記念ホール)', imageUrl: './images/24051801.jpg'},
    {lat: 38.2577, lon: 140.8939, title: '240620-CatChu!FMT宫城公演Day1(仙台サンプラザホール)', imageUrl: './images/24062001.jpg'},
    {lat: 31.2342, lon: 121.4706, title: '240622-2024Liyuu上海演唱会(人民广场站前)', imageUrl: './images/24062201.jpg'},
    {lat: 31.2931, lon: 121.4487, title: '240622-2024Liyuu上海演唱会(静安体育中心)', imageUrl: './images/24062202.jpg'},
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