var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

var colorArray = [
  '#1d3557',
  '#e63946',
];


function Bar(x, y, height, color) {
  this.x = x;
  this.y = y;
  this.height = height;
  this.color = color;

  this.draw = function() {
    c.beginPath();
    c.fillStyle = this.color;
    c.fillRect(x, y, 10, this.height);
  }

  this.update = function() {

    this.draw();
  }
}

var barsArray = [];

function init() {
  barsArray = [];

  for (let i = 0; i < 50; i++) {

    var x = i * 10;
    var y = Math.random() * 10;
    var height = Math.random() * 100; 
    var color = colorArray[Math.floor(Math.random() * colorArray.length)];

    barsArray.push(new Bar(x, y, height, color));
  }
}

init();

function animate() {
  requestAnimationFrame(animate);
   // Cria um loop da animação
  c.clearRect(0, 0, innerWidth, innerHeight);

  barsArray.map(bar => bar.update());
}

animate();