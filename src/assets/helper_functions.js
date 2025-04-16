export const isMobileDevice = () => {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Macintosh/i.test(navigator.userAgent) && ('ontouchend' in document);
};

export const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export const getItemId = (item) => {
  return (item['id-denorm'] ? item['id-denorm'] : item['id']);
};

export const normalizeName = (name) => {
  const polishMap = {
    'ą': 'a', 'ć': 'c', 'ę': 'e', 'ł': 'l', 'ń': 'n',
    'ó': 'o', 'ś': 's', 'ź': 'z', 'ż': 'z',
    'Ą': 'A', 'Ć': 'C', 'Ę': 'E', 'Ł': 'L', 'Ń': 'N',
    'Ó': 'O', 'Ś': 'S', 'Ź': 'Z', 'Ż': 'Z'
  };

  return name.split('').map(char => polishMap[char] || char).join('');
};

export const sanitizeInput = (input) => {
  const sanitizedInput = input.replace(/[^a-zA-Z\sąćęłńóśźżĄĆĘŁŃÓŚŹŻ.-]/g, '');
  const words = sanitizedInput.trim().split(' ');
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].split('-').map(part => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase()).join('-');
  }
  const capitalizedInput = words.join(' ');
  return capitalizedInput;
};

const formatIdForUrl = (id) => {
  return (id.split('').map((char, index) => {
    if (char === '-' && (index === 0 || id[index - 1] !== ' ')) {
      return '--';
    }
    return char === ' ' ? '-' : char;
  }).join(''));
};

export const formatIdForDB = (id) => {
  return (id.replace(/--/g, '{{DOUBLE_DASH}}').replace(/-/g, ' ').replace(/{{DOUBLE_DASH}}/g, '-'));
};

export const readDynamoDB = async (id) => {
  const formattedId = formatIdForUrl(id);

  try {
    const response = await fetch(`../v1/users/${formattedId}`);
    if (!response.ok) {
      console.error('Error:', `${id} not found in databse`);
      return null;
    }
    const data = await response.json();
    return data;

  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

export const queryDynamoDB = async (partyID) => {
  try {
    const response = await fetch(`../v1/parties/${partyID}`);
    if (!response.ok) {
      console.error('Error:', `${partyID} not found in databse`);
      return null;
    }
    const data = await response.json();
    return data;

  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

export const updateDynamoDB = async (id, rsvp, songRequest, poprawinyRSVP, diet) => {
  const formattedId = formatIdForUrl(id);

  try {
    const response = await fetch(`../v1/users/${formattedId}/update`, {
      method: 'POST',
      body: JSON.stringify({
        rsvp: rsvp,
        songRequest: songRequest,
        poprawinyRSVP: poprawinyRSVP,
        diet: diet
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    if (!response.ok) {
      console.error('Error:', 'Network response was not ok when updating database');
      return null;
    }
    const data = await response.json();
    return data;

  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}