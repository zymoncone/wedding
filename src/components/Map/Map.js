import "./Map.css";
import { useState, useEffect } from "react";
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps"

const geoUrl = "https://raw.githubusercontent.com/lotusms/world-map-data/main/world.json";

const Map = () => {
  const [geoData, setGeoData] = useState(null);

  const markers = [
    {
      name: "Warsaw Chopin Airport",
      coordinates: [20.9676, 52.1657],
      link: "https://www.lotnisko-chopin.pl/", // Warsaw Chopin Airport link
    },
    {
      name: "Kraków John Paul II Airport",
      coordinates: [19.7848, 50.0777],
      link: "https://www.krakowairport.pl/", // Kraków John Paul II Airport link
    },
  ];

  useEffect(() => {
    fetch(geoUrl)
      .then((response) => response.json())
      .then((data) => setGeoData(data));
  }, []);

  if (!geoData) return <p>Loading...</p>;

  return (
    <div className="map-container">
    <ComposableMap projection="geoMercator"
    projectionConfig={{
        center: [20.0, 52.0], // Center on Poland (longitude, latitude)
        scale: 1500,          // Adjust the zoom level
      }}
    width={600}
    height={300}>
      <Geographies geography={geoUrl}
        stroke="white"
        strokeWidth={1}>
        {({ geographies }) =>
            geographies.map((geo) => {
              const isPoland = geo.properties.name === "Poland"; // Match Poland by its name
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onMouseEnter={() => null} // Disable mouse enter behavior
                  onMouseLeave={() => null} // Disable mouse leave behavior
                  onClick={() => null} // Prevent country click interaction
                  style={{
                    default: {
                      fill: isPoland ? "#f2b49b" : "#fbd8bb", // Highlight Poland in gold
                      outline: "none",
                    },
                    hover: {
                      fill: isPoland ? "#f2b49b" : "#fbd8bb", // No hover effect
                      outline: "none",
                    },
                    pressed: {
                      fill: isPoland ? "#f2b49b" : "#fbd8bb", // No click effect
                      outline: "none",
                    },
                  }}
                />
              );
            })
          }
      </Geographies>
      {markers.map(({ name, coordinates, link }) => (
          <Marker key={name} coordinates={coordinates}>
            <a href={link} target="_blank" rel="noopener noreferrer">
              <circle r={5} fill="#FF5533" stroke="#fff" strokeWidth={2} />
              <text
                textAnchor="middle"
                y={-12}
                style={{ fontFamily: "Newsreader", fontWeight: 400, color: "black"}}
              >
                {name}
              </text>
            </a>
          </Marker>
        ))}
    </ComposableMap>
    </div>
  );
};

export default Map;
