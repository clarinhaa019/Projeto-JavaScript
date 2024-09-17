let cor;
let circuloX;
let circuloY;

function setup() {
  createCanvas(400, 400);
background("red");
cor=color(random(0,255),random(0,255),random(0,255),random(0,100));

circuloX=[0,0];
circuloY=[random(0,200),random(0,200)];
function draw() {
fill(cor);

for(let contador in circuloX){
circle(irculoX)[contador], circuloY[contador],30);


} 
