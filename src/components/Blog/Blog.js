import "./Blog.css";
import { useEffect, useState } from "react";
import { isMobileDevice } from "../../assets/helper_functions";
import { useAppContext } from "../SubRoot/SubRoot";
import ScrollAnimation from "../ScrollAnimation/ScrollAnimation";

const Blog = () => {
  const [isMobile, setIsMobile] = useState(false);
  const { togglableLang, isDoneAnimating } = useAppContext();

  useEffect(() => {
    if (isMobileDevice()) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, []);

  // English content component
  const EnglishContent = () => (
    <>
      <ScrollAnimation>
        <div className="blog-intro">
          <span className="blog-intro-text">Hi, friends and family– Mayra here!</span> I've gotten a lot of questions about what to do and see in Poland and who's more qualified than someone who has been to Poland twice lol. Anyway, Szymon's parents were nice enough to give me the grand tour and here are my thoughts and unsolicited advice.
        </div>
      </ScrollAnimation>

      <ScrollAnimation delay={100} threshold={0.05}>
        <div className="blog-section">
          <h2 className="location-title">Gdansk</h2>
          <div className="location-subtitle">Anyone who's heard me talk about Poland knows I LOVE the Gdansk/Sopot region. I would happily spend 2-3 full days here.</div>

          <div className="blog-image-container">
            <img src="https://i.imgur.com/7ggkTXH.png" alt="food at the baltic sea" className="blog-image" />
          </div>

          <div className="blog-day">
            <h3>Day 1: Baltic Sea/Sopot</h3>
            <p>
              Beach day at <span className="bold">plażę numer 74</span> - Whether it's before or after the wedding, you're probably
              tired from your journey so let's relax on the beach of the Baltic Sea! I picked "beach number"
              74 because it's right in front of a little restaurant called Beach Bar 21 where you get the most
              delicious little fish and beer to snack away on. Take a stroll along the ocean or on the paved
              boardwalk down to <span className="bold">Sopot</span> where you can walk all the way down the longest pier in Europe! Find
              beautiful architecture and even see the <span className="bold">Hotel Sopot</span>, a hotel that Hitler used as his headquarters
              to oversee the invasion of Poland during WWII. Take in the sights and find a nice little restaurant
              for dinner!
            </p>
          </div>

          <div className="blog-day">
            <h3>Day 2: WWII Museum</h3>
            <p>
              The second day, I'd go to <span className="bold">Muzeum II Wojny Światowej w Gdańsku</span> (The Museum of the Second World War of Gdansk). <a href="https://muzeum1939.pl/" target={isMobile ? "" : "_blank" } rel={isMobile ? "" : "noreferrer"} className="blog-link">This museum</a> was one of the best and most engaging museums I've been to. I would dedicate a good portion of the day to ensure you get the most out of it. I'd also bring a pack of tissues. Head to Spichlerze and take a stroll down the river to pick a dinner spot right by the water!
            </p>
          </div>

          <div className="blog-image-container">
            <img src="https://i.imgur.com/kTFdJAD.png" alt="food at the baltic sea" className="blog-image" />
          </div>

          <div className="blog-day">
            <h3>Day 3: Gdansk</h3>
            <p>
              Go to Glowne Miasto to see <span className="bold">Bazylika Mariacka Wniebowzięcia Najświętszej Maryi Panny</span>, a beautiful, tall, very concisely named basilica right in the middle of colorful architecture. Bring your walking shoes and climb the 400 stairs to the top viewpoint of the church tower. That probably worked up your appetite so explore that area, walking towards <span className="bold">Gdansk Main Townhall</span> to find tens if not hundreds of restaurants in a picturesque square! For dessert get a soft serve ice cream in their skinniest form lol.
            </p>
          </div>
        </div>
      </ScrollAnimation>

      <ScrollAnimation delay={200} threshold={0.05}>
        <div className="blog-section">
          <h2 className="location-title">Zakopane</h2>
          <div className="location-subtitle">Calling all Nature Lovers! This is also a great place to escape and relax.</div>

          <div className="blog-image-container">
            <img src="https://i.imgur.com/g06p44P.png" alt="couple on Tatra Mountain rock ledge" className="blog-image" />
          </div>

          <div className="blog-day">
            <h3>Day 1 (half day):</h3>
            <p>
              Get yourself a little cabin in the mountains. In the early afternoon, go to <span className="bold">Tatra National Park</span> and take the lift up. You will be stunned at the views! Wear a jacket!
            </p>
          </div>

          <div className="blog-day">
            <h3>Day 2:</h3>
            <div className="image-pair">
              <img src="https://i.imgur.com/2qzSiGX.png" alt="hamburger at the top of Tatra Mountain" />
              <img src="https://i.imgur.com/g8Cya5b.png" alt="sad girl hiking" />
            </div>
            <p>
              Go to <span className="bold">downtown Zakopane</span> and wear sneakers and a jacket. Check out the little shops and craft fairs as you walk down the path. Don't eat! At the end, take the ski lift up… or for my more athletic friends, there is a trial that you can hike up, I want the record to show that I did (begrudgingly) take the hiking path up, just to give you an idea of the difficulty. You are going to see breath-taking views of the mountains. There are more craft fairs at the top as well. Look for a restaurant called <span className="bold">Restauracja Gubalowka</span>, right near the ski lift if I remember right. Such a delicious meal and you can sit and enjoy the view!
            </p>
          </div>

          <div className="blog-image-container">
            <img src="https://i.imgur.com/lpuacKB.png" alt="Jams in market at top of Tatra Moutains" className="blog-image" />
          </div>
        </div>
      </ScrollAnimation>

      <ScrollAnimation delay={300} threshold={0.05}>
        <div className="blog-section">
          <h2 className="location-title">Kraków</h2>
          <div className="location-subtitle">City lovers!</div>

          <div className="blog-day">
            <h3>Day 1:</h3>
            <p>
              Go get breakfast at a local bakery! Head to <span className="bold">Wawel Castle</span>. Check out all the art, the church (very important Polish heroes are in crypts there), and the Wawel dragon of course. The castle is huge so take you time and take it in. We probably spent the majority of the day here. Afterward, go to the main square! See <span className="bold">St. Mary's Basilica</span> and explore <span className="bold">MNK Sukiennice</span>, a renaissance style market. I bought my mom earrings here and they are still in perfect condition.
            </p>
          </div>
        </div>
      </ScrollAnimation>
    </>
  );

  // Polish content component
  const PolishContent = () => (
    <>
      <ScrollAnimation>
        <div className="blog-intro">
          <span className="blog-intro-text">Cześć rodzino i przyjaciele! Tu Mayra!</span> Dostałam wiele pytań o to, co robić i zobaczyć w Polsce, a kto jest bardziej kompetentny niż ktoś, kto był w Polsce dwa razy, haha. Rodzice Szymona byli na tyle mili, że pokazali mi wszystko, więc oto moje przemyślenia i nieproszące się rady.
        </div>
      </ScrollAnimation>

      <ScrollAnimation delay={100} threshold={0.05}>
        <div className="blog-section">
          <h2 className="location-title">Gdańsk</h2>
          <div className="location-subtitle">Każdy, kto słyszał, jak mówię o Polsce, wie, że KOCHAM region Gdańska/Sopotu. Z przyjemnością spędziłabym tu 2-3 pełne dni.</div>

          <div className="blog-image-container">
            <img src="https://i.imgur.com/7ggkTXH.png" alt="jedzenie nad Bałtykiem" className="blog-image" />
          </div>

          <div className="blog-day">
            <h3>Dzień 1: Morze Bałtyckie/Sopot</h3>
            <p>
              Dzień na plaży na <span className="bold">plaży numer 74</span> - Niezależnie od tego, czy to przed, czy po ślubie, prawdopodobnie
              jesteś zmęczony podróżą, więc zrelaksujmy się na plaży Morza Bałtyckiego! Wybrałam "plażę numer"
              74, ponieważ znajduje się tuż przed małą restauracją o nazwie Beach Bar 21, gdzie można dostać
              najpyszniejsze małe rybki i piwo do przekąszenia. Spaceruj wzdłuż oceanu lub wybrukowaną
              promenadą w dół do <span className="bold">Sopotu</span>, gdzie możesz przejść się najdłuższym molo w Europie! Znajdź
              piękną architekturę i zobacz nawet <span className="bold">Hotel Sopot</span>, hotel, którego Hitler używał jako swojej kwatery
              głównej do nadzorowania inwazji na Polskę podczas II wojny światowej. Podziwiaj widoki i znajdź miłą małą restaurację
              na obiad!
            </p>
          </div>

          <div className="blog-day">
            <h3>Dzień 2: Muzeum II Wojny Światowej</h3>
            <p>
              Drugiego dnia poszłabym do <span className="bold">Muzeum II Wojny Światowej w Gdańsku</span>. <a href="https://muzeum1939.pl/" target={isMobile ? "" : "_blank"} rel={isMobile ? "" : "noreferrer"} className="blog-link">To muzeum</a> było jednym z najlepszych i najbardziej angażujących muzeów, w jakich byłam. Poświęciłabym sporą część dnia, aby jak najlepiej z niego skorzystać. Zabrałabym też paczkę chusteczek. Idź do Spichlerzy i spaceruj wzdłuż rzeki, aby wybrać miejsce na kolację tuż nad wodą!
            </p>
          </div>

          <div className="blog-image-container">
            <img src="https://i.imgur.com/kTFdJAD.png" alt="jedzenie nad Bałtykiem" className="blog-image" />
          </div>

          <div className="blog-day">
            <h3>Dzień 3: Gdańsk</h3>
            <p>
              Idź do Głównego Miasta, aby zobaczyć <span className="bold">Bazylikę Mariacką Wniebowzięcia Najświętszej Maryi Panny</span>, piękną, wysoką, bardzo zwięźle nazwaną bazylikę w samym środku kolorowej architektury. Załóż buty do chodzenia i wspinaj się po 400 schodach na szczyt wieży kościelnej. To prawdopodobnie pobudziło Twój apetyt, więc zwiedzaj tę okolicę, idąc w kierunku <span className="bold">Ratusza Głównego Miasta w Gdańsku</span>, aby znaleźć dziesiątki, jeśli nie setki restauracji na malowniczym placu! Na deser weź lody w ich najcieńszej formie, haha.
            </p>
          </div>
        </div>
      </ScrollAnimation>

      <ScrollAnimation delay={200} threshold={0.05}>
        <div className="blog-section">
          <h2 className="location-title">Zakopane</h2>
          <div className="location-subtitle">Miłośnicy natury! To także świetne miejsce na ucieczkę i relaks.</div>

          <div className="blog-image-container">
            <img src="https://i.imgur.com/g06p44P.png" alt="para na skale w Tatrach" className="blog-image" />
          </div>

          <div className="blog-day">
            <h3>Dzień 1 (pół dnia):</h3>
            <p>
              Znajdź sobie małą chatkę w górach. Wczesnym popołudniem idź do <span className="bold">Tatrzańskiego Parku Narodowego</span> i wjedź wyciągiem. Widoki Cię zachwycą! Załóż kurtkę!
            </p>
          </div>

          <div className="blog-day">
            <h3>Dzień 2:</h3>
            <div className="image-pair">
              <img src="https://i.imgur.com/2qzSiGX.png" alt="hamburger na szczycie Tatr" />
              <img src="https://i.imgur.com/g8Cya5b.png" alt="smutna dziewczyna na szlaku" />
            </div>
            <p>
              Idź do <span className="bold">centrum Zakopanego</span> i załóż trampki oraz kurtkę. Sprawdź małe sklepy i targi rzemieślnicze, spacerując ścieżką. Nie jedz! Na końcu wjedź wyciągiem narciarskim… lub dla moich bardziej wysportowanych przyjaciół, jest szlak, który można przejść pieszo, chcę, aby zapisano, że (niechętnie) wybrałam szlak pieszy, aby dać Ci wyobrażenie o trudności. Zobaczysz zapierające dech w piersiach widoki na góry. Na szczycie są też targi rzemieślnicze. Poszukaj restauracji o nazwie <span className="bold">Restauracja Gubałówka</span>, tuż obok wyciągu narciarskiego, jeśli dobrze pamiętam. Tak pyszny posiłek i możesz usiąść i cieszyć się widokiem!
            </p>
          </div>

          <div className="blog-image-container">
            <img src="https://i.imgur.com/lpuacKB.png" alt="Dżemy na targu na szczycie Tatr" className="blog-image" />
          </div>
        </div>
      </ScrollAnimation>

      <ScrollAnimation delay={300} threshold={0.05}>
        <div className="blog-section">
          <h2 className="location-title">Kraków</h2>
          <div className="location-subtitle">Miłośnicy miast!</div>

          <div className="blog-day">
            <h3>Dzień 1:</h3>
            <p>
              Idź na śniadanie do lokalnej piekarni! Udaj się do <span className="bold">Zamku Królewskiego na Wawelu</span>. Sprawdź wszystkie dzieła sztuki, kościół (bardzo ważni polscy bohaterowie są tam w kryptach) i oczywiście smoka wawelskiego. Zamek jest ogromny, więc poświęć czas i podziwiaj go. Prawdopodobnie spędziliśmy tam większość dnia. Następnie idź na główny plac! Zobacz <span className="bold">Bazylikę Mariacką</span> i zwiedź <span className="bold">Sukiennice</span>, renesansowy targ. Kupiłam mojej mamie kolczyki tutaj i nadal są w idealnym stanie.
            </p>
          </div>
        </div>
      </ScrollAnimation>
    </>
  );

  return (
    <div className="blog-container">
      <div className="blog-background-container" style={{
        backgroundImage: `url(https://i.imgur.com/wGf8ASz.png)`,
        backgroundSize: "cover",
        backgroundPosition: isMobile ? "0px" : "center",
        position: (isDoneAnimating || !isMobile) ? "relative" : "fixed",
        opacity: (isDoneAnimating || !isMobile) ? 1 : 0,
      }}>
        <div className="blog-title">
          {togglableLang === 'EN' ? "Mayra's Blog" : "Blog Mayry"}
        </div>
      </div>
      <div className="blog-text-body">
        {togglableLang === 'EN' ? <EnglishContent /> : <PolishContent />}
      </div>
    </div>
  );
}

export default Blog;