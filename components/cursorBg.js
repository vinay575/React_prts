import React, { useEffect } from 'react';
import Typed from 'typed.js';

import { neonCursor } from 'threejs-toys';

const Cursor = () => {
  useEffect(() => {
    // ---- Cursor animation ---- //
    neonCursor({
      el: document.getElementById('app'),
      shaderPoints: 6,
      curvePoints: 12,
      curveLerp: 0.5,
      radius1: 2,
      radius2: 5,
      velocityTreshold: 50,
      sleepRadiusX: 0,
      sleepRadiusY: 0,
    });

    // ---- Typed.js initialization ---- //
    let typingText = new Typed("#text", {
      strings: ["Vinay Bhaskar", "Frontend Developer", "Backend Developer"],
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 1000,
    });

    // Cleanup function
    return () => {
      // Stop the Typed.js instance when the component is unmounted
      typingText.destroy();
    };
  }, []); // Empty dependency array ensures that this effect runs once after the initial render
};

export default Cursor;
