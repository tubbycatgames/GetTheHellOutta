import applyVelocity from "./apply-velocity";
import cullOutOfBounds from "./cull-out-of-bounds";
import emitZoomer from "./emit-zoomer";
import movePlayer from "./move-player";
import spawnPlayer from "./spawn-player";

export default [
  spawnPlayer,
  movePlayer,
  emitZoomer,
  applyVelocity,
  cullOutOfBounds
];
