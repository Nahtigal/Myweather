    $(function(){
      
     
      
     $('#btnGetWeather').click(getWeatherClick);
         
        function getWeatherClick() {
         $('#h2').html('Шукаємо погоду для: ' + $('#city_input').val());
    } 
         
     function getWeatherByCity(lang, fnOK, fnError, cityName) {
    $.getJSON(
        'http://api.openweathermap.org/data/2.5/forecast/daily?q=' 
        + cityName + '&APPID=d97e90c822543d704b84ea0fc0900327&cnt=16&units=metric' + '&lang=' + lang + '&callback=?',
        function (data) {
            fnOK.call(this, data);
        }
    );
}    
    
    });