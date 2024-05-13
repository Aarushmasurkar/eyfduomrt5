var canvas;
var backgroundImage, man1_img, man2_img, track;
var  powerCoinImage, lifeImage;
var obstacle1Image, obstacle2Image;
var database, gameState;
var form, player, playerCount;
var allPlayers, car1, car2,  powerCoins, obstacles;
var cars = [];

function preload() {
  backgroundImage = loadImage("/C41RV_SpeedRacer_StudentActivity-main/assets/background.jpg");
  man1_img = loadAnimation("/C41RV_SpeedRacer_StudentActivity-main/assets/man1.jpg","C41RV_SpeedRacer_StudentActivity-main/assets/man2.jpg",
  "C41RV_SpeedRacer_StudentActivity-main/assets/man3.jpg","C41RV_SpeedRacer_StudentActivity-main/assets/man4.jpg",
  "C41RV_SpeedRacer_StudentActivity-main/assets/man5.jpg");
  man2_img = loadAnimation("/C41RV_SpeedRacer_StudentActivity-main/assets/man1.jpg","C41RV_SpeedRacer_StudentActivity-main/assets/man2.jpg",
  "C41RV_SpeedRacer_StudentActivity-main/assets/man3.jpg","C41RV_SpeedRacer_StudentActivity-main/assets/man4.jpg",
  "C41RV_SpeedRacer_StudentActivity-main/assets/man5.jpg");                                                                          
  powerCoinImage = loadImage("/C41RV_SpeedRacer_StudentActivity-main/assets/goldCoin.png");
  obstacle1Image = loadImage("/C41RV_SpeedRacer_StudentActivity-main/assets/obstacle1.png");
  obstacle2Image = loadImage("/C41RV_SpeedRacer_StudentActivity-main/assets/obstacle2.png");
  lifeImage = loadImage("/C41RV_SpeedRacer_StudentActivity-main/assets/life.png");

}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw() {
  background(backgroundImage);
  if (playerCount === 2) {
    game.update(1);
  }

  if (gameState === 1) {
    game.play();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
