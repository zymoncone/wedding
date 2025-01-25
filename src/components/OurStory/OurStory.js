import "./OurStory.css";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Gallery from "../Gallery/Gallery";
import { useAppContext } from "../SubRoot/SubRoot";

const paragraph_1 = {
  "EN": "Mayra and Szymon met through a volleyball league and, by some miracle, ended up on the same team. Despite Szymon’s unruly hair (if you know, you know), Mayra was impressed by his volleyball skills right away. A couple of months into knowing each other, Mayra was deep into her DIY phase, and Szymon decided to help her build a TV stand. He made it seem like he had all the right tools, but in reality, he’d gone to Home Depot and bought power tools just for the task. The project brought them much closer together, and the rest is history.",
  "PL": "",
  "SP": "Mayra y Szymon se conocieron a través de una liga de voleibol y, por un milagro, terminaron en el mismo equipo. A pesar de que el cabello de Szymon parecía un campo de batalla, Mayra quedó fascinada al instante por sus habilidades en el voleibol. Un par de meses después, cuando Mayra estaba en plena onda de bricolaje, Szymon decidió ayudarla a armar un mueble para el televisor. Él parecía tener todas las herramientas necesarias, pero la realidad es que se había mandado a Home Depot a comprar un montón de herramientas eléctricas solo para ese proyecto. ¡Qué genio! El trabajo en equipo los unió aún más, y el resto, como dicen, es historia."
};

const paragraph_2 = {
  "EN": "In April of the following year, Szymon bought a house, and both Luna and Mayra moved in. Together, the three of them ventured to Chicago and eventually made their way to Jersey City.",
  "PL": "",
  "SP": "En abril del año siguiente, Szymon compró una casa, y tanto Luna como Mayra se mudaron con él. Juntos, los tres se lanzaron a la aventura en Chicago y, con el tiempo, se establecieron en Jersey City."
};

const paragraph_3 = {
  "EN": "Mayra says one of the things she loves most about Szymon is how great of a partner he is, both at home and in life. They’ve developed an unspoken way of gauging each other’s workloads and making life easier for one another, without needing to ask.",
  "PL": "",
  "SP": "Mayra dice que lo que más le gusta de Szymon es lo increíble compañero que es, tanto en la casa como en la vida. Han desarrollado una especie de telepatía para medir las cargas de trabajo del otro y hacer que todo sea más fácil sin necesidad de pedir nada. ¡Pura armonía!"
};

const paragraph_4 = {
  "EN": "Szymon says Mayra is one of the most considerate people he’s ever met. She always puts him and her loved ones first, listens to everyone, and remembers every little detail they share. It’s hard to beat her in a gift-giving competition.",
  "PL": "",
  "SP": "Por su parte, Szymon dice que Mayra es una de las personas más consideradas que ha conocido. Siempre pone a él y a sus seres queridos en primer lugar, escucha a todos y nunca olvida un solo detalle que le comparten. ¡Es imposible ganarle en un concurso de regalos!"
};

const paragraph_5 = {
  "EN": "The pair is excited to start this new chapter together and see where life takes them.",
  "PL": "",
  "SP": "La pareja está súper emocionada de empezar este nuevo capítulo y ver qué sorpresas les trae la vida."
};

const title = {
  "EN": "Our Story",
  "PL": "Naśa Historia",
  "SP": "Nuestra Historia"
};

const gallery_title = {
  "EN": "Our Engagement",
  "PL": "Nasze Zaręczyny",
  "SP": "Nuestro Compromiso"
};

const OurStory = () => {
  const location = useLocation();

  const { lang } = useAppContext();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <div className="our-story">
      <h1>{title[lang]}</h1>
      <p>
        {paragraph_1[lang]}
      </p>
      <p>
        {paragraph_2[lang]}
      </p>
      <p>
        {paragraph_3[lang]}
      </p>
      <p>
        {paragraph_4[lang]}
      </p>
      <p>
        {paragraph_5[lang]}
      </p>
      <h1 style={{ margin: "50px 0 0 0" }}>{gallery_title[lang]}</h1>
      <Gallery />
    </div>
  );
}

export default OurStory;