//input speed of a Car and demerit Points of a Car
let speedOfCar = 90;
let demeritPointsOfCar = (speedOfCar-70)/5;
//using if statement to print the speedOfCar for speed of car is less than 70, print OK.
if(speedOfCar<70){
    console.log("OK");
}
//for every 5km above speed limit(70), we print demerit points and if those points exceed 12 we print License suspended.
else{
  console.log("demeritPoints:" + demeritPointsOfCar);
  if(demeritPointsOfCar>12){
    console.log("License suspended");
  }
}


