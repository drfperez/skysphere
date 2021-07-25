var sky1 = new SkySphere('sky1', 
{ width: window.innerWidth, height: 1000, 
customOnClick: function (data) { 
  alert(data.info); }, 
getObjectText: function (data) { 
  return data.name; }, 
  font: '24px serif', 
  highlightColor: '#33bbff' }); 


var M42 = sky1.addCustomObject(5.58814, -4.92319, 
  {name: 'M42 diffuse nebula', 
  info: 'The Orion Nebula', 
  color:'#ffc0cb',
  radius: 10}); 

var casa = sky1.addCustomObject(23.38, 58.80, 
  {name: 'Cassiopea A supernova', 
  info: 'Our type IIb supernova', 
  color:'#fc0fc0',
  radius: 10}); 
  sky1.drawSky(); 

document.getElementById('center_casa').addEventListener('click', 
  function () { 
    sky1.centerSkyPoint(casa); }); 
    
document.getElementById('center_M42').addEventListener('click', function (){ sky1.centerSkyPoint(M42); })
    var zoomFactor = 1; 

document.getElementById('zoom_minus').addEventListener('click', function () { 
      zoomFactor -= 0.1; sky1.absoluteZoom(zoomFactor); }); 

document.getElementById('zoom_plus').addEventListener('click', function () { zoomFactor += 0.1; sky1.absoluteZoom(zoomFactor); }); 
    
window.addEventListener('resize', function () { sky1.setContainerSize(window.innerWidth, sky1.containerHeight, true); }); 
