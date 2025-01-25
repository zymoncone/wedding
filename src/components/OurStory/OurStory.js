import "./OurStory.css";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Gallery from "../Gallery/Gallery";
import { useAppContext } from "../SubRoot/SubRoot";

const paragraph_1 = {
  "EN": "Mayra and Szymon met through a volleyball league and, by some miracle, ended up on the same team. Despite Szymon’s unruly hair (if you know, you know), Mayra was impressed by his volleyball skills right away. A couple of months into knowing each other, Mayra was deep into her DIY phase, and Szymon decided to help her build a TV stand. He made it seem like he had all the right tools, but in reality, he’d gone to Home Depot and bought power tools just for the task. The project brought them much closer together, and the rest is history.",
  "PL": "",
  "SP": "Mayra y Szymon se conocieron a través de una liga de voleibol y, por algún milagro, terminaron en el mismo equipo. A pesar del cabello desordenado de Szymon (si lo sabes, lo sabes), Mayra quedó impresionada de inmediato por sus habilidades en el voleibol. Un par de meses después de conocerse, Mayra estaba en plena fase de bricolaje, y Szymon decidió ayudarla a construir un mueble para la televisión. Él hizo parecer que tenía todas las herramientas necesarias, pero en realidad había ido a Home Depot y comprado herramientas eléctricas solo para esa tarea. El proyecto los acercó mucho más, y el resto es historia."
};

const paragraph_2 = {
  "EN": "In April of the following year, Szymon bought a house, and both Luna and Mayra moved in. Together, the three of them ventured to Chicago and eventually made their way to Jersey City.",
  "PL": "",
  "SP": "En abril del año siguiente, Szymon compró una casa, y tanto Luna como Mayra se mudaron con él. Juntos, los tres se aventuraron a Chicago y eventualmente se establecieron en Jersey City."
};

const paragraph_3 = {
  "EN": "Mayra says one of the things she loves most about Szymon is how great of a partner he is, both at home and in life. They’ve developed an unspoken way of gauging each other’s workloads and making life easier for one another, without needing to ask.",
  "PL": "",
  "SP": "Mayra dice que una de las cosas que más ama de Szymon es lo buen compañero que es, tanto en casa como en la vida. Han desarrollado una forma tácita de medir las cargas de trabajo del otro y de hacerse la vida más fácil mutuamente, sin necesidad de pedirlo."
};

const paragraph_4 = {
  "EN": "Szymon says Mayra is one of the most considerate people he’s ever met. She always puts him and her loved ones first, listens to everyone, and remembers every little detail they share. It’s hard to beat her in a gift-giving competition.",
  "PL": "",
  "SP": "Szymon dice que Mayra es una de las personas más consideradas que ha conocido. Siempre pone a él y a sus seres queridos en primer lugar, escucha a todos y recuerda cada pequeño detalle que le comparten. Es difícil ganarle en una competencia de regalos."
};

const paragraph_5 = {
  "EN": "The pair is excited to start this new chapter together and see where life takes them.",
  "PL": "",
  "SP": "La pareja está emocionada de comenzar este nuevo capítulo juntos y ver hacia dónde los lleva la vida."
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