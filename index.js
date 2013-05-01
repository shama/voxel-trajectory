module.exports = function(velocity, rotation, origin) {
  if (typeof velocity === 'object') {
    origin   = velocity.origin;
    rotation = velocity.rotation;
    velocity = velocity.velocity;
  }
  velocity   = velocity || 1;
  rotation   = rotation || [0, 0, 0];
  origin     = origin   || [0, 0, 0];
  if (!Array.isArray(rotation)) rotation = [rotation.x, rotation.y, rotation.z];
  if (!Array.isArray(origin)) origin = [origin.x, origin.y, origin.z];
  return [
    (velocity * Math.sin(rotation[0]) * Math.sin(rotation[1])) + origin[0],
    (velocity * Math.cos(rotation[0])) + origin[1],
    (velocity * Math.sin(rotation[0]) * Math.cos(rotation[1])) + origin[2]
  ];
};
