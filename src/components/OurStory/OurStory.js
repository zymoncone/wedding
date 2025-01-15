import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Gallery from "../Gallery/Gallery";
import "./OurStory.css";

const OurStory = () => {
  const location = useLocation();

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
      <h1>Our Story</h1>
      <p>
      Mayra and Szymon met through a volleyball league and, by some miracle, ended up on the same team. Despite Szymon’s unruly hair (if you know, you know), Mayra was impressed by his volleyball skills right away. A couple of months into knowing each other, Mayra was deep into her DIY phase, and Szymon decided to help her build a TV stand. He made it seem like he had all the right tools, but in reality, he’d gone to Home Depot and bought power tools just for the task. The project brought them much closer together, and the rest is history.
      </p>
      <p>
      In April of the following year, Szymon bought a house, and both Luna and Mayra moved in. Together, the three of them ventured to Chicago and eventually made their way to Jersey City.
      </p>
      <p>
      Mayra says one of the things she loves most about Szymon is how great of a partner he is, both at home and in life. They’ve developed an unspoken way of gauging each other’s workloads and making life easier for one another, without needing to ask.
      </p>
      <p>
      Szymon says Mayra is one of the most considerate people he’s ever met. She always puts him and her loved ones first, listens to everyone, and remembers every little detail they share. It’s hard to beat her in a gift-giving competition.
      </p>
      <p>
      The pair is excited to start this new chapter together and see where life takes them.
      </p>
      <h1 style={{margin: "50px 0 0 0"}}>Our Engagement</h1>
      <Gallery />
    </div>
  );
}

export default OurStory;