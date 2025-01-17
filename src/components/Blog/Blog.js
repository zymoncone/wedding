import "./Blog.css";
import { useEffect, useState } from "react";
import { isMobileDevice } from "../../assets/helper_functions";
import { useAppContext } from "../PolandRoot/PolandRoot";

const Blog = () => {
  const [isMobile, setIsMobile] = useState(false);

  const { isDoneAnimating } = useAppContext();

  useEffect(() => {
    if (isMobileDevice()) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, []);

  return (
    <div className="blog-container">
        <div className="blog-background-container" style={{
          backgroundImage: `url(https://i.imgur.com/wGf8ASz.png)`,
          backgroundSize: "cover",
          backgroundPosition: isMobile ? "0px" : "center",
          position: (isDoneAnimating || !isMobile) ? "relative" : "fixed",
          opacity: (isDoneAnimating || !isMobile) ? 1 : 0,
        }}>
          <div className="blog-title">Mayra's Blog</div>
        </div>
      <div className="blog-text-body">
        <div className="blog-intro">
          Hi, friends and family– Mayra here! I’ve gotten a lot of questions about what to do and see in Poland and who’s more qualified than someone who has been to Poland twice lol. Anyway, Szymon’s parents were nice enough to give me the grand tour and here are my thoughts and unsolicited advice.
        </div>
        <h2>Gdansk</h2>
        <p>Anyone who’s heard me talk about Poland knows I LOVE the Gdansk/Sopot region. I would happily spend 2-3 full days here.</p>
        <img src="https://i.imgur.com/7ggkTXH.png" alt="food at the baltic sea" />
        <h3>Day 1: Baltic Sea/Sopot</h3>
        <p>
          Beach day at <span className="bold">plażę numer 74</span> - Whether it’s before or after the wedding, you’re probably
          tired from your journey so let’s relax on the beach of the Baltic Sea! I picked “beach number”
          74 because it’s right in front of a little restaurant called Beach Bar 21 where you get the most
          delicious little fish and beer to snack away on. Take a stroll along the ocean or on the paved
          boardwalk down to <span className="bold">Sopot</span> where you can walk all the way down the longest pier in Europe! Find
          beautiful architecture and even see the <span className="bold">Hotel Sopot</span>, a hotel that Hitler used as his headquarters
          to oversee the invasion of Poland during WWII. Take in the sights and find a nice little restaurant
          for dinner!
        </p>
        <h3>Day 2: WWII Muesum</h3>
        <p>
          The second day, I’d go to <span className="bold">Muzeum II Wojny Światowej w Gdańsku</span> (The Museum of the Second World War of Gdansk). <a href="https://muzeum1939.pl/">This museum</a> was one of the best and most engaging museums I’ve been to. I would dedicate a good portion of the day to ensure you get the most out of it. I’d also bring a pack of tissues. Head to Spichlerze and take a stroll down the river to pick a dinner spot right by the water!
        </p>
        <img src="https://i.imgur.com/kTFdJAD.png" alt="food at the baltic sea" />
        <h3>Day 3: Gdansk</h3>
        <p>
          Go to Glowne Miasto to see <span className="bold">Bazylika Mariacka Wniebowzięcia Najświętszej Maryi Panny</span>, a beautiful, tall, very concisely named basilica right in the middle of colorful architecture. Bring your walking shoes and climb the 400 stairs to the top viewpoint of the church tower. That probably worked up your appetite so explore that area, walking towards <span className="bold">Gdansk Main Townhall</span> to find tens if not hundreds of restaurants in a picturesque square! For dessert get a soft serve ice cream in their skinniest form lol.
        </p>
        <h2>Zakopane</h2>
        <p>Calling all Nature Lovers! This is also a great place to escape and relax.</p>
        <img src="https://i.imgur.com/g06p44P.png" alt="couple on Tatra Mountain rock ledge" />
        <h3>Day 1 (half day):</h3>
        <p>
          Get yourself a little cabin in the mountains. In the early afternoon, go to <span className="bold">Tatra National Park</span> and take the lift up. You will be stunned at the views! Wear a jacket!
        </p>
        <h3>Day 2:</h3>
        <div className="image-pair">
          <img src="https://i.imgur.com/2qzSiGX.png" alt="hamburger at the top of Tatra Mountain" />
          <img src="https://i.imgur.com/g8Cya5b.png" alt="sad girl hiking" />
        </div>
        <p>
          Go to <span className="bold">downtown Zakopane</span> and wear sneakers and a jacket. Check out the little shops and craft fairs as you walk down the path. Don’t eat! At the end, take the ski lift up… or for my more athletic friends, there is a trial that you can hike up, I want the record to show that I did (begrudgingly) take the hiking path up, just to give you an idea of the difficulty. You are going to see breath-taking views of the mountains. There are more craft fairs at the top as well. Look for a restaurant called <span className="bold">Restauracja Gubalowka</span>, right near the ski lift if I remember right. Such a delicious meal and you can sit and enjoy the view!
        </p>
        <img src="https://i.imgur.com/lpuacKB.png" alt="Jams in market at top of Tatra Moutains" />
        <h2>Kraków</h2>
        <p>City lovers!</p>
        <h3>Day 1:</h3>
        <p>
          Go get breakfast at a local bakery! Head to <span className="bold">Wawel Castle</span>. Check out all the art, the church (very important Polish heroes are in crypts there), and the Wawel dragon of course. The castle is huge so take you time and take it in. We probably spent the majority of the day here. Afterward, go to the main square! See <span className="bold">St. Mary’s Basilica</span> and explore <span className="bold">MNK Sukiennice</span>, a renaissance style market. I bought my mom earrings here and they are still in perfect condition.
        </p>
      </div>
    </div>
  );
}

export default Blog;