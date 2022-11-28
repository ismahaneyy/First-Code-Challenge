//input speed of Car and thee demerit Points of a Car
function speedOfCar(){
  let speedOfCar = 85;
let demeritPointsOfCar = (speedOfCar-70)/5;
//using if statement to print the speedOfCar for speed of car is less than 70, the output is "OK".
if(speedOfCar<70){
    console.log("OK");
}
//for every 5km above speed limit(70), we output demerit points and if those demerit points exceed 12 we output License suspended.
else{
  console.log("demeritPoints:" + demeritPointsOfCar);
  if(demeritPointsOfCar>12){
    console.log("License suspended");
  }
}
}
speedOfCar();