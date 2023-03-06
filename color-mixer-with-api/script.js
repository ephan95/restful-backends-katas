const redslider = document.getElementById("red");
const greenslider = document.getElementById("green");
const blueslider = document.getElementById("blue");
const randomColorButton = document.getElementById("random-color");
const backgroundcolor = document.documentElement;

const colors = {
  red: redslider.value,
  green: greenslider.value,
  blue: blueslider.value,
};

[redslider, greenslider, blueslider].forEach((slider) => {
  const sliderColor = slider.id;
  slider.addEventListener("input", function () {
    getNumber(this, sliderColor);
    changeColor();
  });
});

randomColorButton.addEventListener("click", function () {
  getRandomColor();
});

function getNumber(slider, color) {
  colors[color] = slider.value;
}

function changeColor() {
  const hex =
    `#` +
    Object.values(colors) // destruct object and turn the numbers into array
      .map((c) => parseInt(c).toString(16).padStart(2, "0")) //for each number in array do the function
      .join("");
  document.getElementById("colorvalue").innerText = hex;
  backgroundcolor.style.setProperty("--color", hex);
}

function getRandomColor() {
  fetch("https://dummy-apis.netlify.app/api/color")
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    })
    .then((randomColor) => {
      redslider.value = randomColor.rgb.r;
      greenslider.value = randomColor.rgb.g;
      blueslider.value = randomColor.rgb.b;
      getNumber(redslider, "red");
      getNumber(greenslider, "green");
      getNumber(blueslider, "blue");
      changeColor();
    });
}

changeColor();
