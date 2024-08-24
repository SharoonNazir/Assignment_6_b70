async function checkWeather() {
  try {
const city=document.querySelector(".city");
const cityVal=city.value;



const response= await fetch(`https://p2pclouds.up.railway.app/v1/learn/weather?city=${cityVal}`, {method:"GET"});
const weatherDetail = await response.json();
console.log(weatherDetail);
if(weatherDetail['error']){
alert("City Name is not Correct");
return;
}
const currentC=weatherDetail["current"]["temp_c" ];
const currentF=weatherDetail["current"]["temp_f" ];
const condition=weatherDetail["current"]["condition"]["text" ];
const dewC=weatherDetail["current"]["dewpoint_c" ];
const humid=weatherDetail["current"]["humidity" ];

    //console.log(currentw);

const resultC=document.querySelector("#weatherC");
resultC.innerHTML=`Temperature in Celcius:  ${currentC} C <br> Temperature in Farenheit: ${currentF} F<br> Condition: ${condition} <br> Dewpoint in Celsius: ${dewC} <br> Humidity: ${humid}`;

  } catch (err) {
    alert("Invalid Entry");
console.log(err);


  }
}
