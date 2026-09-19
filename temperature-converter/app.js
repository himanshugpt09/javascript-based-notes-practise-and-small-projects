

const celsiustoFahrenheit = (degree) => (degree*9)/5 + 32;


const classifyTemperature = (fahre) => {
    if(fahre<32){
        return "Freezing";
    }else if (fahre<60){
        return "Cold";
    }else if (fahre<80){
        return "Mild";
    }else if (fahre<90){
        return "Warm";
    }else{
        return "Hot";
    }
}



const celsiusReadings = [-5, 0, 15, 22, 30, 38];

celsiusReadings.forEach((celsius) => {
    const farhrenheit = celsiustoFahrenheit(celsius);
    const classify = classifyTemperature(farhrenheit);

    console.log(classify);
})