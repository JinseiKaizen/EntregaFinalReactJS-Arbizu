import React, { useEffect } from "react";
import mountainBlueImg from "../assets/images/mountain-blue.png";
import mountainRedImg from "../assets/images/mountain-red.png";
import treesLeftImg from "../assets/images/trees-left.png";
import treesBottomImg from "../assets/images/trees-bottom.png";
import manImg from "../assets/images/man.png";
import plantsImg from "../assets/images/plants.png";
import "./parallaxN.css";

const ParallaxN = () => {
  useEffect(() => {
    const mountainBlue = document.querySelector("#mountain-blue");
    const mountainRed = document.querySelector("#mountain-red");
    const treesLeft = document.querySelector("#trees-left");
    const treesBottom = document.querySelector("#trees-bottom");
    const man = document.querySelector("#man");
    const plants = document.querySelector("#plants");
    const titulo = document.querySelector("#titulo");

    window.addEventListener("scroll", () => {
      let scroll = window.scrollY;

      mountainBlue.style.left = scroll * 1 + "px";
      mountainRed.style.left = scroll * 0.5 + "px";

      treesLeft.style.bottom = scroll * -2 + "px";
      treesLeft.style.right = scroll * 2 + "px";

      treesBottom.style.right = scroll * 2 + "px";
      man.style.right = scroll + "px";
      plants.style.right = scroll * 2 + "px";
      titulo.style.right = scroll * 4 + "px";
    });
  }, []);

  return (
    <section className="parallax">
      <h2 id="titulo" className="titulo">
        Creá tus ideas!
      </h2>
      <img src={mountainBlueImg} id="mountain-blue" alt="Mountain Blue" />
      <img src={treesLeftImg} id="trees-left" alt="Trees Left" />
      <img src={mountainRedImg} id="mountain-red" alt="Mountain Red" />
      <img src={treesBottomImg} id="trees-bottom" alt="Trees Bottom" />
      <img src={manImg} id="man" alt="Man" />
      <img src={plantsImg} id="plants" alt="Plants" />
    </section>
  );
};

export default ParallaxN;
