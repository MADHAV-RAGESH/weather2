const search = async () => {
    console.log(cityName.value);
    
    const apiKey = '8ac5c4d57ba6a4b3dfcf622700447b1e';
    const response = await fetch (`https://api.openweathermap.org/data/2.5/weather?q=${cityName.value}&appid=${apiKey}&units=metric`)
    // console.log(response);
    response.json().then((data)=>{
        console.log(data[0]);

       let temperature = data.main.temp
       console.log(temperature);

       let main = data.weather[0].main
       console.log(main);
       

       let feelslike = data.main.feels_like
       console.log(feelslike);
       

       let location = data.name
       console.log(location);
       
       let datetime = data.timezone
       console.log(datetime);

       let country = data.sys.country
       console.log(country);
       
       let humidity = data.main.humidity
       console.log(humidity);

       let wind = data.wind.speed
       console.log(wind);
       
       let pressure = data.main.pressure
       console.log(pressure);
       
      

       

        
    
    
    

       result1.innerHTML = ` <div>
                        <h1 id="temperature">${temperature} %C <span style="font-size: 30px;">${main}</span></h1>
                        <p id="feelslike">Feelslike : ${feelslike}%c</p>
                        <h4 id="location">${location} </h4>
                        <p id="date-time">${datetime} Timezone </p>
                    </div>`

       result2.innerHTML = `<div class="mb-4 d-flex justify-content-between">
                        <p >Country</p>
                        <p id="country">${country}</p>
                    </div>
                    <div class="mb-4 d-flex justify-content-between">
                        <p >Humidity</p>
                        <p id="humidity">${humidity}% </p>
                    </div>
                    <div class="mb-4 d-flex justify-content-between">
                        <p >Wind</p>
                        <p id="wind">${wind}m/s</p>
                    </div>
                    <div class="mb-4 d-flex justify-content-between">
                        <p >Pressure</p>
                        <p id="pressure">${pressure} </p>
                    </div>`             
       
       
       
       
    
})
}