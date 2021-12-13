let angle = 0;
let x = 0;
let num = 1;

let clientSocket = io(); //io() is pre-build funciton it would be socket.io
//creo variabile clientSocket che è uguale io() che sta caricando la libreria grazie al html file

clientSocket.on("connect", newConnection); //when client connect to the server faccio funzione newConnection
clientSocket.on("mouseBroadcast", newBroadcast); //client socket cìmouse broadcast quando lo riceve faccio funzione newBoradcast

function newConnection() {
  console.log(clientSocket.id); //vedrò l'id di connessione del server
}

function newBroadcast(data) {
  //function every time i have info from another server
  console.log(data);
  noStroke();
  fill("red");
  circle(data.x, data.y, 10);
}

function setup() {
  frameRate(3);
  background(220);
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  if (num % 15 == 0) {
    background(220);
  }
  num += 1;
  noStroke();
  fill("green");
  rectMode(CENTER);
  angle += 0.02;
  //translate(width / 2, height / 2);
  //rotate(angle);
  rect(mouseX, mouseY, 13, 13);
}

function mouseMoved() {
  let message = {
    x: mouseX,
    y: mouseY,
  };

  clientSocket.emit("mouse", message); //send to server con il nome "mouse"
}
