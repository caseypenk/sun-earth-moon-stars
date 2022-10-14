// sun earth moon stars
// by casey penk
// january / february 2022
// textures from NASA

let stars = []
let nStars = 1000

function setup() {
  createCanvas(1400, 700, WEBGL);
  createStars()
}

function draw() {
  background("black")
  orbitControl() // allows for 3d viewing using mouse drag (spin) and scroll (zoom)
  noStroke()
  drawStars()
  drawLights()
  drawSun()
  drawEarth()
  drawMoon()
}

// preload images
// all images from NASA
function preload() {
  sunImage = loadImage('assets/sun.jpg');
  earthImage = loadImage('assets/earth.jpg')
  moonImage = loadImage('assets/moon.jpg')
}

function createStars() {
  for (let i = 0; i < nStars; i++) {
    push()
    stars.push([2 *(random(4000) - 2000), 2 *(random(4000) - 2000), 2 *(random(4000) - 2000), random(5)])
    pop()
  }
}

function drawStars() {
  for (let i = 0; i < stars.length; i++) {
    push()
    fill("white")
    translate(stars[i][0], stars[i][1], stars[i][2])
    sphere(stars[i][3])
    pop()
  }
}

function drawLights() {
  ambientLight(255, 255, 255) // general scene lighting
  pointLight(255, 255, 255, 0, 0, 0); // sunlight
  pointLight(255, 255, 255, 0, 0, 0); // sunlight
  pointLight(255, 255, 255, 0, 0, 0); // sunlight
  pointLight(255, 255, 255, 0, 0, 0); // sunlight
}

function drawSun() {
  fill(200, 35, 25)
  rotateY(-frameCount * (1/300)); // spin sun on its axis
  texture(sunImage)
  sphere(150) // draw sun
}

function drawEarth() {  
  translate(400, 0)
  rotateY(frameCount * 1 / 25); // spin earth (and moon) on its axis
  
  push() 
  rotateY(frameCount * 1/25); // spin earth on its axis
  texture(earthImage)
  sphere(20) // draw earth
  pop()
}

function drawMoon() {
  translate(35, 0)
  rotateY(frameCount * (1/10)); // spin moon on its axis
  texture(moonImage)
  sphere(5) // draw moon
}
