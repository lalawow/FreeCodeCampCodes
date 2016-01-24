$(document).ready(function(){
	var weatherInfo = {}
  var locationInfo={}
	var latitude, longtitude
	$.getJSON('http://ipinfo.io', function(data){
/* geolocation data sample
{
  "ip": "121.60.124.72",
  "hostname": "No Hostname",
  "city": "Wuhan",
  "region": "Hubei",
  "country": "CN",
  "loc": "30.5801,114.2734",
  "org": "AS4134 No.31,Jin-rong Street"
} */
  locationInfo=data
  var weatherInfo = {}
  console.log(data)
  console.log(data.loc)
  var location = data.loc.split(",")
  latitude = parseFloat(location[0].substr(0,6))
  longitude = parseFloat(location[1].substr(0,6))
  console.log("lat: "+latitude, "long: "+longitude)
  $.getJSON("http://api.openweathermap.org/data/2.5/weather?lat="+latitude+"&lon="+longitude+"&id=daoahdao&APPID=e1272f9b18e5286daaacce5fb5963f46",function(weather) {
 /* weather data sample 	
 {"coord":{"lon":114.33,"lat":30.49},
         "weather":[{"id":800,"main":"Clear","description":"Sky is Clear","icon":"01n"}],
         "base":"stations",
         "main":{"temp":271.15,"pressure":1044,"humidity":58,"temp_min":271.15,"temp_max":271.15},
         "visibility":10000,
         "wind":{"speed":4,"deg":80},
         "clouds":{"all":0},
         "dt":1453554000,
         "sys":{"type":1,"id":7423,"message":0.0132,"country":"CN","sunrise":1453504700,"sunset":1453542650},
         "id":7905250,
         "name":"Shizishan",  //city
         "cod":200} 
*/
	weatherInfo = weather
	$("#city").html(weatherInfo.name+", "+locationInfo.region)
	$("#weather").html(weatherInfo.weather[0].main)
	$("#temperature").html(weatherInfo.main.temp-273.15)
	$("#wind").html(weatherInfo.wind.speed)
  $("#country-flag").attr("src","https://raw.githubusercontent.com/googlei18n/region-flags/master/png/"+weatherInfo.sys.country+".png")
  	console.log(weather)
  })

})


})