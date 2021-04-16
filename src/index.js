import anime from "animejs";

import "./js/modernizr";
import "./styles.scss";

// Hero polaroid animtion
anime({
  targets: ".header-img img",
  rotateY: [15, -15],
  rotateX: [-3, 6],
  direction: "alternate",
  loop: true,
  duration: 15000,
  easing: "easeInOutQuad"
});
