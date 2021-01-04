
//se crea el primer mapa, el cual sera el que se visualice al principio
var mymap = L.map("map").setView([51.505, -0.09], 13);
console.log("mymap", mymap);

L.tileLayer(
  "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZGFuaWVscGFsemEiLCJhIjoiY2tqZXdobnFqMHc4NjJxbnZ2Z2VvMG83bCJ9.p7Ag6RwJSW_YSC9e5ptAFA",
  {
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: "mapbox/streets-v9",
    tileSize: 512,
    zoomOffset: -1,
    accessToken:
      "pk.eyJ1IjoiZGFuaWVscGFsemEiLCJhIjoiY2tqZXdobnFqMHc4NjJxbnZ2Z2VvMG83bCJ9.p7Ag6RwJSW_YSC9e5ptAFA",
  }
).addTo(mymap);


function getMap(dir) {
  console.log("dir", dir);
  var container = L.DomUtil.get("map");
  if (container != null) {
    container._leaflet_id = null;
  }

  
  mymap.setView(new L.LatLng(dir.location.lat, dir.location.lng), 13);
  var marker = L.marker([dir.location.lat, dir.location.lng]).addTo(mymap);
  setDataLocation(dir.ip, dir.location.city, dir.location.region , dir.location.timezone, dir.isp)
  
}

//Setea la informacion de la busqueda
function setDataLocation(ip, location, region, timezone, isp){
  console.log("ip", ip)
  document.getElementById("ipAdress").innerText= ip
  document.getElementById("location").innerText= location+", "+region 
  document.getElementById("timezone").innerText= "UTC "+timezone;
  document.getElementById("isp").innerText= isp

}

