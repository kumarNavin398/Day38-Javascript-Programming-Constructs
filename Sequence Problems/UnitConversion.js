//Que.5 : Unit Conversion
//a. 1ft = 12 in then 42 in = ? ft
//b. Rectangular Plot of 60 feet x 40 feet in meters
//c. Calculate area of 25 such plots in acres

let oneFeet = 12;
let convertInInch = 42/oneFeet;

let RectangularPlot = 60*40;
let convertToMeters = RectangularPlot*0.3048;
    console.log("Conversion Of Rectangular Plot : " +convertToMeters+ "m");

let plots = RectangularPlot*25/43560;
    console.log("Area Of 25 plots In acres: " +plots+ "acres");