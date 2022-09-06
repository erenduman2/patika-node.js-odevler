const radius = process.argv.slice(2) * 1;

const calculateArea = (radius) => {
  const area = Math.PI * radius * radius;
  console.log(`Yarıçapı ${radius} olan dairenin alanı: ${area}`);
};

calculateArea(radius);