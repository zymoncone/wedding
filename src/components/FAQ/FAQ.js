import "./FAQ.css";
import Collapsible from "../Collapsible/Collapsible";

const faq = [
  {
    question: "¿Puedo traer invitados adicionales o niños que no estén en la invitación?",
    answer: "Lamentablemente no, ya que hemos pagado por un número fijo de platos. Solo deben asistir las personas mencionadas al final de la presentación en video."
  },
  {
    question: "¿A qué hora debo llegar?",
    answer: "Los novios harán su entrada a las 9:00 p.m. Nos encantaría que estuvieras allí para darles la bienvenida. Por favor, trata de no llegar demasiado temprano."
  },
  {
    question: "¿Qué debo llevar puesto?",
    answer: "¡Nos encantaría que aprovecharas esta oportunidad para vestirte bonito! Un vestido elegante para las mujeres y un traje o camisa de botones para los hombres sería lo más adecuado."
  },
  {
    question: "¿Qué más debo llevar?",
    answer: "¡Planeamos bailar toda la noche! Si vas a usar tacones incómodos, te recomendamos traer un par de sandalias para cambiarte. Además, mantén un ojo en el clima por si necesitas llevar un suéter o un paraguas."
  },
  {
    question: "¿Qué hago si tengo alergias?",
    answer: "Por favor, avísale a Mayra o Analia lo antes posible sobre tus restricciones alimentarias para poder tomar las precauciones necesarias."
  },
  {
    question: "¿Qué debo regalar?",
    answer: "Nos sentimos muy agradecidos de poder celebrar con nuestros amigos y familiares, ¡y tu presencia es el mejor regalo que podemos recibir! Sin embargo, si deseas dar un obsequio, por favor ten en cuenta que viajamos internacionalmente y no podemos llevar objetos grandes."
  },
  {
    question: "¿Por qué no fui invitado a la Misa/ceremonia?",
    answer: "Tendremos una misa íntima de 'bendición de los anillos' en La Capilla Stella Montis a las 6:30 p.m. ese día. Debido a que está algo alejada del lugar de la fiesta, decidimos limitar las invitaciones a familiares cercanos y amigos muy cercanos. Si deseas asistir, ¡te damos la bienvenida!"
  }
];

const FAQ = () => {

  return (
    <div className="faq-container">
      <div className="faq-title">
        Preguntas Frecuentes
      </div>
      <div className="collapsible-container">
        {faq.map((item, idx) => {
          return (
            <Collapsible
              key={idx}
              heading={item.question}
            >
              <div className="faq-answer">
              {item.answer}
              </div>
            </Collapsible>
          )
        })}
      </div>
    </div>
  )
};

export default FAQ;