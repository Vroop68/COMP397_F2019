// Immediate invoked anonymous function

(function() {
  //Global Game Variables

  let canvas = document.getElementById("canvas");
  let stage: createjs.Stage;
  let helloLabel: createjs.Text;

  function Init() {
    console.log("Initialization Start");
    Start();
  }

  function Start() {
    console.log("Starting Application...");
    //Initialize createjs
    stage = new createjs.Stage(canvas);
    createjs.Ticker.framerate = 60;
    createjs.Ticker.on("tick", Update);
    Main();
  }

  function Update() {
    stage.update();
  }

  function Main() {
    console.log("Game Start...");
    helloLabel = new createjs.Text("Hello World!", "40px Consolas", "#000000");
    helloLabel.x = 100;
    helloLabel.y = 100;

    stage.addChild(helloLabel); //Addes label to stage
  }

  window.onload = Init;
})();
