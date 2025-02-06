import "./FAQ.css";
import Collapsible from "../Collapsible/Collapsible";
import { useAppContext } from "../SubRoot/SubRoot";

const argentina_faq = [
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
    answer: "Su presencia es el mejor regalo que podemos recibir! Estamos muy agradecidos de poder celebrar con nuestros amigos y familiares. No obstante, si deseas hacernos un regalo, te pedimos que tengas en cuenta que estamos viajando internacionalmente y no podremos llevar objetos grandes. Lo más fácil sería algo que podamos disfrutar mientras estamos en Argentina, como un certificado para algún restaurante, o tu vino favorito para que podamos probarlo. ¡Igual, no te preocupes por los regalos!"
  },
  {
    question: "¿Por qué no fui invitado a la misa/ceremonia?",
    answer: "Tendremos una misa íntima de 'bendición de los anillos' en La Capilla Stella Montis a las 18:30 horas de ese día. Debido a la distancia con el salón  de la fiesta, decidimos invitar únicamente a los familiares más cercanos y amigos íntimos. Si deseás acompañarnos, serás más que bienvenido!"
  }
];

const poland_faq_english = [
  {
    question: "What time is the wedding?",
    answer: "Please plan to arrive no later than 4:15 PM, as the ceremony will begin promptly at 4:30 PM. We can’t wait to celebrate with you!"
  },
  {
    question: "What should I wear?",
    answer: "We would love for you to use this special occasion as an opportunity to dress up! The dress code is formal, so tuxedos and gowns are warmly welcomed, as are suits and dresses. Please avoid wearing white or anything that might appear white in photographs, as this is traditionally reserved for the bride."
  },
  {
    question: "Is there transportation to/from the venue?",
    answer: "Yes, we’re happy to provide transportation from the hotel to the venue and back to the hotel at the end of the night. We want everyone to enjoy the celebration without worrying about getting there or back!"
  },
  {
    question: "Can I bring an additional guest or child who was not listed on the invitation?",
    answer: "We truly appreciate your excitement to celebrate with us! However, as we have made arrangements for a specific number of guests, we kindly ask that only those named on the invitation attend. We appreciate your understanding."
  },
  {
    question: "What is Poprawiny?",
    answer: "Poprawiny is a lovely Polish tradition held on the second day of the wedding celebration. It’s an optional luncheon where the newlyweds spend more time with their guests. The tradition goes back many centuries and was originally meant to ensure that guests were safely sent off after the festivities."
  },
  {
    question: "What should we gift?",
    answer: "Your presence is the greatest gift we could ask for, especially considering how many of you have traveled such great distances to be with us! If you would still like to give a gift, please note that we will be flying home and cannot take large items. Feel free to send gifts to our home, or you can choose something from our registry for your convenience."
  },
];

const poland_faq_polish = [
  {
    question: "What time is the wedding?",
    answer: "Prosimy o przybycie najpóźniej o godzinie 16:15, ponieważ ceremonia rozpocznie się o 16:30. Nie możemy się doczekać, aby świętować z Wami ten wyjątkowy dzień!"
  },
  {
    question: "What should I wear?",
    answer: "Chcielibyśmy, abyście wykorzystali tę wyjątkową okazję do eleganckiego ubioru! Kod ubioru to strój formalny, więc fraki, garnitury i suknie wieczorowe będą mile widziane. Prosimy jednak unikać koloru białego lub ubrań, które mogą wyglądać na białe na zdjęciach, gdyż jest to kolor tradycyjnie zarezerwowany dla panny młodej."
  },
  {
    question: "Is there transportation to/from the venue?",
    answer: "Tak, z przyjemnością zapewniamy transport z hotelu do miejsca ceremonii i z powrotem do hotelu po zakończeniu imprezy. Chcemy, abyście mogli cieszyć się świętowaniem, nie martwiąc się o transport!"
  },
  {
    question: "Can I bring an additional guest or child who was not listed on the invitation?",
    answer: "Bardzo cieszymy się, że chcecie świętować z nami! Niemniej jednak, ponieważ zaplanowaliśmy określoną liczbę gości, uprzejmie prosimy, aby na uroczystości pojawiły się tylko osoby wymienione na zaproszeniu. Dziękujemy za zrozumienie."
  },
  {
    question: "What should we gift?",
    answer: "Wasza obecność to dla nas najpiękniejszy prezent, zwłaszcza że wielu z Was pokonało dużą odległość, aby być z nami! Jeśli mimo to chcielibyście podarować nam prezent, prosimy pamiętać, że będziemy podróżować samolotem i nie będziemy w stanie zabrać dużych przedmiotów. Jeśli chcecie, prezenty można wysłać na nasz adres, lub skorzystać z naszej listy życzeń, aby ułatwić wybór."
  },
];

const faq = {
  "EN": poland_faq_english,
  "PL": poland_faq_polish,
  "SP": argentina_faq
};

const faq_title = {
  "EN": "FAQ",
  "PL": "FAQ",
  "SP": "Preguntas Frecuentes"
};

const FAQ = () => {

  const { lang } = useAppContext();

  return (
    <div className="faq-container">
      <div className="faq-title">
        {faq_title[lang]}
      </div>
      <div className="collapsible-container">
        {faq[lang].map((item, idx) => {
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