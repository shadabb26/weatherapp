async function getweather(city){
    sc=document.getElementById('sc');
    sc.innerHTML="Weather of "+city.toUpperCase();

    const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'e25a8581f2mshaba872b3e5c77d0p15e9e6jsn78390268d2aa',
            'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
    };
    
    try {
        const responsee = await fetch(url, options);
        const response = await responsee.json();
        console.log(response);

        // const sunrisetime=response.sunrise;
        // const date=new Date(sunrisetime*1000) 
        // const fd=date.toLocaleString();

        
        // const sunsettime=response.sunset;
        // const sundate=new Date(sunsettime*1000) 
        // const sunfd=sundate.toLocaleString();

      
        
            // cloud_pct.innerHTML=response.cloud_pct
            temp.innerHTML=response.temp+"&deg;"
            feels_like.innerHTML =response.feels_like+"&deg"
            humidity.innerHTML =response.humidity+"%"
            min_temp.innerHTML =response.min_temp+"&deg;"
            max_temp.innerHTML =response.max_temp+"&deg;"
            wind_speed.innerHTML =response.wind_speed+" m/hr"
            // wind_degrees.innerHTML =response.wind_degrees
            // sunrise.innerHTML =fd
            // sunset.innerHTML =sunfd
          

    } catch (error) {
        console.error(error);
    }
}


var submit=document.getElementById('sub');
var cityy=document.getElementById('city');

if(submit==null)
{
console.log("er")
}
else
{
submit.addEventListener('click',(e)=>{
    e.preventDefault();
    getweather(cityy.value)
})
}

// getweather("pune")