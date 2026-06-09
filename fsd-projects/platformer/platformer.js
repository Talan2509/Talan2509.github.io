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
    createBadPlatform(450, 600, 100, 20, "red")

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     


    // TODO 2 - Create Platforms
    createPlatform(400, 650, 200, 90, "blue");
    createPlatform(700, 550, 200, 80, "red");
    createPlatform(200, 650, 50, 90, "yellow");
    createPlatform(300, 550, 50, 20, "green");
    createPlatform(1000, 450, 300, 200, "orange");



    // TODO 3 - Create Collectables
    createCollectable("steve", 1200, 50, 2.5, 0.7);
    createCollectable("grace", 300, 170, 0.5, 0.7); 
    createCollectable("max", 800, 170, 0.5, 0.7); 


    
    // TODO 4 - Create Cannons
    createCannon("top", 350, 1200);
    createCannon("right", 450, 2000);
    createCannon("bottom", 590, 2000);


    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
