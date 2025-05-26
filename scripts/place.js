const temperature = 10;
const windSpeed = 5;
const windChill = document.querySelector("#windChill")

const calculateWindChill = (temperature, windSpeed) => 
        13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16);
    

if (temperature <= 10 && windSpeed >= 4.8)

    windChill.textContent = calculateWindChill (temperature, windSpeed).toFixed(1);


else {
    windChill.textContent = "N/A"
};

