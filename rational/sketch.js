let slider;
let button;
let input;
let inputValue = 0;
let createElements = false;


// Enter the password, the password is correct, enter the game:'Random Color Game'
// show : slider  button  
// Swipe the slider to change color randomly
// Click the button to change color randomly
// Click the space to change color randomly

function setup() {
  createCanvas(400, 400);

  //Random Color Game
  let title = createDiv('Random Color Game');
  title.style('font-size', '24pt');
  title.style('font-weight', 'bold');
  title.style('text-align', 'center');
  title.style('position', 'absolute');
  title.style('top', '0px');
  title.style('left', '0px');
  title.style('width', '100%');


  // Create a text input box
  input = createInput();
  input.position(20, 20);

  // create button
  button = createButton('Click Confirm Password');
  button.position(20, 50);
  button.mousePressed(judgeInput);
  
  
}


function draw() {
  // Create sliders and buttons if createElements is true
  if (createElements) {

    slider = createSlider(0, 255, 0);
    slider.position(20, 20);
    slider.input(generateColor);

    button = createButton('random color');
    button.position(20, 40);
    button.mousePressed(generateColor);

    createElements = false;
  }

}

//one P5.dom GUI elements:p5.Element Callback
function judgeInput() {
  if(input.value() == "123"){
    createElements = true;
    input.hide();
    this.hide();
  }
}

//one P5.dom GUI elements:p5.Element Callback
function generateColor() {
  // Generate RGB random colors
  let r = random(255);
  let g = random(255);
  let b = random(255);

  // Update the inputValue variable and update the value of the slider
  inputValue = color(r, g, b);

  // Display the resulting color on the canvas
  fill(inputValue);
  rect(120, 120, 200, 200);
}

// one global callback function :button.keyPressed 
function keyPressed() {
  // Generate a random color when the space bar is pressed
  if (key === ' ') {
    generateColor();
  }
}