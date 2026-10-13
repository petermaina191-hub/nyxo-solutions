import React from "react";

// Soft light leak plus edge vignette, like film lighting. Pure CSS,
// pointer-events are disabled in globals.css so it never blocks clicks.
export function CinematicOverlay() {
  return (
    <>
      <div className="light-leak" aria-hidden="true" />
      <div className="vignette" aria-hidden="true" />
    </>
  );
}
