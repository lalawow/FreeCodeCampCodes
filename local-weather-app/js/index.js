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
  console.log(weatherInfo.weather[0].main,weatherInfo.weather[0].description)
 setBgImg(weatherInfo.weather[0].id)
	$("#weather-state").html(weatherInfo.weather[0].main)
  $("#weather-icon").attr("src","http://openweathermap.org/img/w/"+weatherInfo.weather[0].icon+".png")
	$("#temperature-data").html(Math.floor((weatherInfo.main.temp-273.15)*10)/10+"&deg;C")
	$("#wind").html(weatherInfo.wind.speed)
  $("#country-flag").attr("src","https://raw.githubusercontent.com/googlei18n/region-flags/master/png/"+weatherInfo.sys.country+".png")
//  	console.log(weather)
  })
  $("#f-degree").click(function(){
    $("#f-degree").addClass("active")
    $("#c-degree").removeClass("active")
    var temperatureShow = Math.floor(((weatherInfo.main.temp-273.15)*9/5+32)*10)/10
    $("#temperature-data").html(temperatureShow+"&deg;F")
  })
    $("#c-degree").click(function(){
    $("#f-degree").removeClass("active")
    $("#c-degree").addClass("active")
    var temperatureShow = Math.floor((weatherInfo.main.temp-273.15)*10)/10
    $("#temperature-data").html(temperatureShow+"&deg;C")
  })

})
})

function setBgImg(id) {
  console.log(id)
  var url
  var weatherImgUrl={
    2: "http://pictures.mightytravels.com/thunderstorm-big.jpg", //thunderstorm
    3: "http://7-themes.com/data_images/out/15/6819745-rain-wallpaper.jpg",  //rain drizzle
    5: "http://7-themes.com/data_images/out/15/6819745-rain-wallpaper.jpg",  //rain
    6: "http://www.zastavki.com/pictures/1600x900/2012/Winter_Snow-covered_city_036178_.jpg", //snow
    7: "http://static.independent.co.uk/s3fs-public/styles/story_large/public/thumbnails/image/2015/11/02/18/stpauls.jpg",
    8: "http://cdn2.landscapehdwalls.com/wallpapers/1/clear-sky-759-1920x1080.jpg",
    9: "https://i.ytimg.com/vi/6h8043y-PwI/maxresdefault.jpg", //tornado
    95: "https://robertfinkelstein.files.wordpress.com/2009/06/dandelion-in-the-breeze.jpg", //breeze
    701: "http://static.independent.co.uk/s3fs-public/styles/story_large/public/thumbnails/image/2015/11/02/18/stpauls.jpg",
    800: "https://ridebully.files.wordpress.com/2012/06/img_0224.jpg",
  }
  if (weatherImgUrl.hasOwnProperty(id)) {
    url = weatherImgUrl[id]
  } else if (weatherImgUrl.hasOwnProperty(Math.florr(id/10))) {
    url = weatherImgUrl[Math.florr(id/10)]
  } else if (weatherImgUrl.hasOwnProperty(Math.florr(id/100))) {
    url = weatherImgUrl[Math.florr(id/100)]
  } else {
    url = weatherImgUrl[80]
  }

  $("body").css("background-image",'url("'+url+'")')

}