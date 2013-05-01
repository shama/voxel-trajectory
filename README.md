# voxel-trajectory

> Calculate trajectories in [voxel.js](https://github.com/maxogden/voxel-engine).

[View the voxel-throw example](http://shama.github.com/voxel-throw)

# example

Create a trajectory to throw an item based on the direction the camera is
facing:

``` js
var trajectory = require('voxel-trajectory');

// x,y of voxel.js camera
var camera = game.cameraRotation();

// rotate the axis -90 degs to throw forward
camera[0] -= Math.PI / 2;

// create an item with a velocity of 2 towards trajectory
var item = {
  velocity: trajectory(2, camera),
  mesh: /* ... */,
  size: game.cubeSize,
  resting: false
};
game.addItem(item);
```

The trajectory can be from anywhere, such as a meteor:

```js
var meteor = {
  velocity: trajectory({
    // pretty fast
    velocity: 5,
    // 45 degrees
    rotation: [Math.PI / 180 * 45, Math.PI / 180 * 45, 0],
    // from the sky
    origin:   [1000, 5000, 1000]
  })
};
```

# api

`trajectory([velocity:number, rotation:[x, y, z], origin:[x, y, z]])`

# install

With [npm](https://npmjs.org) do:

```
npm install voxel-trajectory
```

Use [browserify](http://browserify.org) to `require('voxel-trajectory')`.

## release history
* 0.2.0 - update to use arrays
* 0.1.0 - initial release

## license
Copyright (c) 2013 Kyle Robinson Young<br/>
Licensed under the MIT license.
