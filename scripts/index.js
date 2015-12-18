    $(function(){
      
     $('#btnGetWeather').click(getWeatherClick);
         
        function getWeatherClick() {
         $('#h2').html('Шукаємо погоду для: ' + $('#city_input').val());
    } 
         
         
    
    });