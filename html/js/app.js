// let app = new PIXI.Application({ width: 640, height: 360 });

  // document.body.appendChild(app.view);

  // let sprite = PIXI.Sprite.from('sample.png');

  // app.stage.addChild(sprite);


  // // Add a variable to count up the seconds our demo has been running
  // let elapsed = 0.0;
  // // Tell our application's ticker to run a new callback every frame, passing
  // // in the amount of time that has passed since the last tick
  // app.ticker.add((delta) => {
  //   // delta ~= 1 frame time


  //   // Add the time to our total elapsed time
  //   elapsed += delta;
  //   // Update the sprite's X position based on the cosine of our elapsed time.  We divide
  //   // by 50 to slow the animation down a bit...
  //   //! 100+ (-100 ~ +100) 
  //   sprite.x = 100.0 + Math.cos(elapsed / 100.0) * 100.0;
  // });

  const app = new PIXI.Application({
    width: 800, height: 600, backgroundColor: 0x1099bb, resolution: window.devicePixelRatio || 1,
  });
  document.body.appendChild(app.view);

  const container = new PIXI.Container();

  app.stage.addChild(container);

  // Create a new texture
  const texture = PIXI.Texture.from('bunny.png');

  // Create a 5x5 grid of bunnies
  for (let i = 0; i < 25; i++) {
    const bunny = new PIXI.Sprite(texture);
    bunny.anchor.set(0.5);
    bunny.x = (i % 5) * 40;
    bunny.y = Math.floor(i / 5) * 40;
    bunny.width = 60;
    bunny.height = 60;
    container.addChild(bunny);
  }

  // Move container to the center
  container.x = app.screen.width / 2;
  container.y = app.screen.height / 2;

  // Center bunny sprite in local container coordinates
  container.pivot.x = container.width / 2;
  container.pivot.y = container.height / 2;

  // Listen for animate update
  app.ticker.add((delta) => {
    // rotate the container!
    // use delta to create frame-independent transform
    container.rotation -= 0.01 * delta;
  });