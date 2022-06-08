// Code your solution in this file!
let scubhq= 42;
function distanceFromHqInBlocks(distance) {
return  Maths.abs(distance-scubhq);
}
distance(43);


function distanceFromHqInFeet(distance) {
    return (Maths.abs(distance-scubhq) * 264);
}

function distanceTravelledInFeet(start, destination) {
    return Math.abs(destination -start) * 264;
}

 function calculatesFarePrice(start, destination) {
     const range= Math.abs(destination -start) * 264;
     if (range<=400){
         return 0;
     }
     else if (range>400 && range<=2000){
         return  (range - 400) *0.02    
         }
         else if (range>2000 && range<=2500){
             return 25

         }
         else {
             return 'cannot travel that far'
         }
 }