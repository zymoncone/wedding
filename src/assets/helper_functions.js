import { createElement } from "react";

export const isMobileDevice = () => {
  return (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Macintosh/i.test(
      navigator.userAgent
    ) && "ontouchend" in document
  );
};

export const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export const renderItalicizedText = (text) => {
  const italicWords = [
    "poh-prah-vee-nee",
    "poprawić",
    "rosół",
  ];

  const words = text.split(" ");
  return words.map((word, index) => {
    const trimmedWord = word.trim().toLowerCase().replace(/[.,!?;:()]/g, '');
    if (italicWords.includes(trimmedWord)) {
      return createElement('em', { key: index }, word + " ");
    }
    return word + " ";
  });
};

export const getItemId = (item) => {
  return item["id-denorm"] ? item["id-denorm"] : item["id"];
};

export const isFemaleName = (name) => {
  const exceptions_female = [
    "Carolyn",
    "Sarah",
    "Denise",
    "Danielle",
    "Emilie",
    "Rachel",
    "Allison",
    "Roisin",
    "Claire",
    "Melanie",
    "Jennifer",
    "Nicole",
    "Gabrielle",
    "Noel",
    "Annelieke",
    "Alyse",
  ];

  const exceptions_male = ["osoba towarzysząca (Agnieszka)"];

  if (exceptions_male.includes(name)) {
    return false;
  }

  const firstName = name.trim().split(" ")[0];
  if (exceptions_female.includes(firstName)) {
    return true;
  }

  return firstName.endsWith("a");
};

export const normalizeName = (name) => {
  const polishMap = {
    ą: "a",
    ć: "c",
    ę: "e",
    é: "e", // french
    ł: "l",
    ń: "n",
    ó: "o",
    ś: "s",
    ź: "z",
    ż: "z",
    Ą: "A",
    Ć: "C",
    Ę: "E",
    É: "E", // french
    Ł: "L",
    Ń: "N",
    Ó: "O",
    Ś: "S",
    Ź: "Z",
    Ż: "Z",
  };

  return name
    .split("")
    .map((char) => polishMap[char] || char)
    .join("");
};

export const sanitizeInput = (input) => {
  const sanitizedInput = input.replace(/[^a-zA-Z\sąćęéłńóśźżĄĆĘÉŁŃÓŚŹŻ.-]/g, "");
  const words = sanitizedInput.trim().split(" ");
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i]
      .split("-")
      .map((part) => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase())
      .join("-");
  }
  const capitalizedInput = words.join(" ");
  return capitalizedInput;
};

const formatIdForUrl = (id) => {
  return id
    .split("")
    .map((char, index) => {
      if (char === "-" && (index === 0 || id[index - 1] !== " ")) {
        return "--";
      }
      return char === " " ? "-" : char;
    })
    .join("");
};

export const formatIdForDB = (id) => {
  return id
    .replace(/--/g, "{{DOUBLE_DASH}}")
    .replace(/-/g, " ")
    .replace(/{{DOUBLE_DASH}}/g, "-");
};

export const readDynamoDB = async (id) => {
  const formattedId = formatIdForUrl(id);

  try {
    const response = await fetch(`../v1/users/${formattedId}`);
    if (!response.ok) {
      console.error("Error:", `${id} not found in databse`);
      return null;
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

export const queryDynamoDB = async (partyID) => {
  try {
    const response = await fetch(`../v1/parties/${partyID}`);
    if (!response.ok) {
      console.error("Error:", `${partyID} not found in databse`);
      return null;
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

export const updateDynamoDB = async (
  id,
  rsvp,
  songRequest,
  poprawinyRSVP,
  diet
) => {
  const formattedId = formatIdForUrl(id);

  try {
    const response = await fetch(`../v1/users/${formattedId}/update`, {
      method: "POST",
      body: JSON.stringify({
        rsvp: rsvp,
        songRequest: songRequest,
        poprawinyRSVP: poprawinyRSVP,
        diet: diet,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      console.error(
        "Error:",
        "Network response was not ok when updating database"
      );
      return null;
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};
