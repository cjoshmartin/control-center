//
// $(document).on('click', '#F-temp', function() {
//   var weatherData= $.parseJSON(localStorage.getItem("weather-storage"));
//   $('#current-temperature').html('Current Temperature '+weatherData.current_observation.temp_f+' &#176;F');
// });
// $(document).on('click', '#C-temp', function() {
//   var weatherData= $.parseJSON(localStorage.getItem("weather-storage"));
//   $('#current-temperature').html('Current Temperature '+weatherData.current_observation.temp_c+' &#176;C');
// });
$(document).ready(function(){
  //
  // $("#F-temp").hover(function(){
  //   $(this).css('background-color','#c34040');
  // },function(){
  //   $(this).css('background-color','#a52a2a');
  // });

// var latitude=0;
// var longitude=0;
var base_url="https://api.wunderground.com/api/5bf7a2727b964dc4/forecast/geolookup/conditions/q/";
// if (navigator.geolocation) {
//  navigator.geolocation.getCurrentPosition(function(position) {
//   latitude=position.coords.latitude;
//   longitude=position.coords.longitude;
//   console.log("latitude:",latitude);
//   console.log("longitude:",longitude);
//   getWeather(latitude,longitude);
// });//end of the navigator
// }//end of if statement

// var Fahrenheit=0;
// var Celsius=0;
// function getWeather(lat,long){
$.getJSON('../config.json', function(data) {
      //  console.log(data);
  $.ajax({
    type:"GET",
    dataType:"json",
    url:base_url+data.location.zipcode+".json",
    success: function(response){
      // console.log(response);
      window.localStorage.setItem("weather-storage", JSON.stringify(response));
      // console.log(window.localStorage.getItem("weather-storage"));
      var weatherData= $.parseJSON(localStorage.getItem("weather-storage"));
      // Celsius=weatherData.current_observation.temp_c;
      console.log(weatherData.current_observation.observation_location.city);

      $('#weather').html(weatherData.current_observation.temp_f+'<span>F</span>');
      $('#location').text(weatherData.current_observation.observation_location.city);

    }//end of success
  });//end of .ajax
});//end of get get JSON


});//end of document ready
