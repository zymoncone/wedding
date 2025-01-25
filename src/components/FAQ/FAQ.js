import "./FAQ.css";
import Collapsible from "../Collapsible/Collapsible";

const faq = [
  {
    question: "¿Puedo traer invitados adicionales o niños que no estén en la invitación?",
    answer: "Lamentablemente, no es posible, ya que hemos contratado un número fijo de platos. Solo las personas mencionadas al final de la invitación digital pueden asistir."
  },
  {
    question: "¿A qué hora tendría que llegar?",
    answer: "Los novios harán su entrada a las 21:00 horas. Nos encantaría que estuvieras allí para darles la bienvenida. Por favor, procurá no llegar demasiado temprano."
  },
  {
    question: "¿Cómo me visto?",
    answer: "Nos gustaría que aprovecharas esta oportunidad para vestirte bonito. Un vestido o conjunto lindo para las mujeres y un traje o camisa de botones para los hombres por ejemplo."
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
    question: "¿Qué les puedo regalar?",
    answer: "Su presencia es el mejor regalo que podemos recibir! Estamos muy agradecidos de poder celebrar con nuestros amigos y familiares. No obstante, si deseas hacernos un regalo, te pedimos que tengas en cuenta que estamos viajando internacionalmente y no podremos llevar objetos grandes."
  },
  {
    question: "¿Por qué no fui invitado a la misa/ceremonia?",
    answer: "Tendremos una misa íntima de 'bendición de los anillos' en La Capilla Stella Montis a las 18:30 horas de ese día. Debido a la distancia con el salón  de la fiesta, decidimos invitar únicamente a los familiares más cercanos y amigos íntimos. Si deseás acompañarnos, serás más que bienvenido!"
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