import React from "react";
import ParallaxN from "./ParallaxN";
import "./aboutview.css";


const AboutView = () => {
  return (
    <div>
      <ParallaxN />
      <section className="company-description">
        <div className="company-description-content">
          <h3>Empresa de creación digital</h3>
          <p>Ofrecemos servicios de diseño y desarrollo web, impresión 3D y programación backend.</p>
          <p>Nos enorgullece ofrecer un servicio de calidad a precios accesibles, utilizando tecnología de vanguardia para garantizar que cada proyecto sea un éxito.
             Ya sea que esté buscando crear una presencia en línea para su empresa, imprimir un modelo 3D personalizado o necesite ayuda con su programación backend, ¡podemos ayudarle!
            No importa si es la primera vez que emprendes en el mundo digital o si eres un profesional experimentado, estamos aquí para ayudarte en todo lo que necesites. Contáctanos hoy mismo y comienza a hacer realidad tus ideas.</p>
        </div>
      </section>
    </div>

  );
};

export default AboutView;

