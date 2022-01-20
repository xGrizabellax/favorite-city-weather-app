/* link js to html
create a buttom element
get access to
*/

var inputField = document.querySelector('#city')
var button = document.querySelector('#get-weather')
var body
function fetchData(){
  var cityName = inputField.value
  var apiKey = 'af64df3fe4272a2257c01c9b701f1a9b'
  var requestUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&units=imperial&appid=' + apiKey
  
  fetch(requestUrl)
    .then(function(response) {
      return response.json()
    })
    .then(function(weatherData) {
      console.log(weatherData)

      var maxTempTitle = document.createElement('h2')
      var minTempTitle = document.createElement('h2')
      var baromTitle = document.createElement('h2')
      var descrTitle = document.createElement('h2')
      var maxTemp = document.createElement('p')
      var minTemp = document.createElement('p')
      var barPress = document.createElement('p')
      var descr = document.createElement('p')
      maxTempTitle.textContent = "Max Temperature"
      minTempTitle.textContent = "Min Temperature"
      baromTitle.textContent = "Barometric Pressure"
      descrTitle.textContent = "Weather Description"
      maxTemp.textContent = weatherData.main.temp_max
      minTemp.textContent = weatherData.main.temp_min
      barPress.textContent = weatherData.main.pressure
      descr.textContent = weatherData.weather[0].decription
      document.body.append(maxTempTitle)
      document.body.append(minTempTitle)
      document.body.append(baromTitle)
      document.body.append(descrTitle)
      maxTempTitle.append(maxTemp)
      minTempTitle.append(minTemp)
      baromTitle.append(barPress)
      descrTitle.append(descr)

      console.log(weatherData.main.temp)

      
    })

}

button.addEventListener('click', fetchData)

