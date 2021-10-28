/* link js to html
create a buttom element
get access to
*/

var inputField = document.querySelector('#city')
var button = document.querySelector('#get-weather')

function fetchData(){
  var cityName = inputField.value
  var apiKey = 'af64df3fe4272a2257c01c9b701f1a9b'
  var requestUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=' + apiKey
  
  fetch(requestUrl)
    .then(function(response) {
      return response.json()
    })
    .then(function(weatherData) {
      console.log(weatherData)
    })
    for (var i = 0; i < weatherData.length; i++) {
        
    }
}

button.addEventListener('click', fetchData)

