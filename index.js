module.exports = function(velocity, rotation, origin) {
  if (typeof velocity === 'object') {
    origin   = velocity.origin;
    rotation = velocity.rotation;
    velocity = velocity.velocity;
  }
  velocity   = velocity || 1;
  rotation   = rotation || {x:0,y:0};
  origin     = origin   || {x:0,y:0,z:0};
  return {
    x: (velocity * Math.sin(rotation.x) * Math.sin(rotation.y)) + origin.x,
    y: (velocity * Math.cos(rotation.x)) + origin.y,
    z: (velocity * Math.sin(rotation.x) * Math.cos(rotation.y)) + origin.z
  };
};
