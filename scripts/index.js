   $(function(){
      
     //  $('#table1').hide(); 
      //    $('#table2').hide(); 
      
     $('#btnGetWeather').click(getWeatherClick);
      
         
        function getWeatherClick() {
         $('#h2').html('Шукаємо погоду для: ' + $('#city_input').val());
    } 
      
//*******************************************************************      
      $('#btnLviv').click(function() {
         
        $.getJSON('http://api.openweathermap.org/data/2.5/find?lat=55.5&lon=37.5&cnt=10'+
            '&lang=ua&units=metric&appid=d97e90c822543d704b84ea0fc0900327',
            function (data) {
               /* var markup;
                    for(var i=0;i<10;i++){  
                        markup = '<tr>'+
                            '<td>' + data.list[i].name+'</td>' +
                                '<td>'+data.list[i].temp+'</td>' +
                                '<td>' + data.list[i].pressure + '</td>' +
                            '<td>' +data.list[i].humidity + '</td>'
                        + '</tr>';
                    table1.insertRow(-1).innerHTML = markup;   
      */
       //  $('#test').html('hello mother faker');
         $('#test').html(data.list[0].name);
              
          });
        }
    );
        
          $('#table1').toggle(1000);
          $('#table2').toggle(1000);
      });
      
   
        
      
      
    $('#city_input').keypress(function(e) {
        
        if ( e.which === 13 ) //pres enter
        {
            $('#btnGetWeather').trigger('click');
            return false;
        }
    });      
      
      
      
         
     function getWeatherByCity(lang, fnOK, fnError, cityName) {
    $.getJSON(
        'http://api.openweathermap.org/data/2.5/forecast/daily?q='+
        + cityName +'&units=metric&cnt=3&lang=ua&appid=d97e90c822543d704b84ea0fc0900327',
        function (data) {
            fnOK.call(this, data);
        }
    );
}    
    
    });
    
