// Immediate invoked anonymous function

(function() {
  function Init() {
    console.log("Initialisation Start");

    let x: number = 10;
  }

  window.onload = Init;
})();
