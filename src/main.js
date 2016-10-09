'use strict';

import BlackTriangle from "./BlackTriangle";

const triangle = new BlackTriangle('#triangle');

window.setInterval(
  () => {
    triangle.rotate(3);
    triangle.render();
  },
  20
);
