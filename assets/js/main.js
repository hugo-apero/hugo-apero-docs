// first import.
import Headroom from 'js/headroom';

// grab the header element.
const Header = document.querySelector("header");

// construct an instance of Headroom, passing the header elemen.
const headroom = new Headroom(Header, {
  offset: 0,
  tolerance: {
    up: 0,
    down: 0
  },
  classes: {
    initial: "header--fixed",
    top: "top",
    notTop: "not-top"
  }
});

// initialise
headroom.init();
