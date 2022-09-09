function circleArea(radius){
  console.log("circleArea: ", Math.PI * (radius * radius));
}

function circleCircumference(radius){
  console.log("circleCircumference: ", 2 * Math.PI * radius);
}

export {
  circleArea,
  circleCircumference,
}