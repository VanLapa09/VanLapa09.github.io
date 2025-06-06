$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    // toggleGrid();


    // TODO 2 - Create Platforms
// (x, y, width, height, color)
createPlatform(100, 600, 200, 10, "pink");
createPlatform(600, 200, 100, 10, "pink");
createPlatform(100, 400, 200, 10, "pink");
createPlatform(50, 300, 150, 20, "pink");
createPlatform(300, 0, 10, 250, "hotpink");
createPlatform(200, 200, 200, 10, "pink");
createPlatform(400, 300, 100, 10, "pink");
createPlatform(400, 100, 100, 10, "pink");
createPlatform(400, 500, 100, 20, "pink");
createPlatform(400, 600, 300, 30, "pink");
createPlatform(800, 600, 10, 150, "hotpink");
createPlatform(900, 600, 400, 10, "pink");
createPlatform(700, 400, 200, 30, "pink");
createPlatform(800, 200, 100, 10, "pink");
createPlatform(950, 50, 10, 150, "hotpink");
createPlatform(1000, 300, 200, 10, "pink");
createPlatform (1200, 200, 100, 10, "pink");
createPlatform(800, 610, 20, 10, "pink");
createPlatform(500, 0, 20, 390, "hotpink");
createPlatform(1200, 480, 10, 150, "hotpink");
createPlatform(350, 700, 10, 10, "pink");
createPlatform (100, 100, 100,10, "pink");
    // TODO 3 - Create Collectables
createCollectable("database", 100, 700, 0);
createCollectable("diamond", 410, 50, 0.5, 1);
createCollectable("grace", 1250, 150, 0, 1);
createCollectable("kennedi", 1250, 550, 1, 1);
createCollectable("max", 1280, 700, 1, 0);
createCollectable ("steve", 800, 380, 1, 1);
createCollectable ("database", 100, 50, 1, 1);
createCollectable ("database", 730, 100, 0, 0);
    // TODO 4 - Create Cannons
  createCannon("top", 400, 2000);
  createCannon("left", 500, 1000);
  createCannon ("right", 200, 1000);


    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
