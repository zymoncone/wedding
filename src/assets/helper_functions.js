// const aws = "https://7yjlescifc.execute-api.us-east-2.amazonaws.com/test/DynamoDBManager";
const aws = "https://wrqj9e6vd1.execute-api.us-east-2.amazonaws.com/test/DynamoDBManager";

export const isMobileDevice = () => {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Macintosh/i.test(navigator.userAgent) && ('ontouchend' in document);
};

export const isIpad = () => {
  return /iPad/i.test(navigator.userAgent);
};

export const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export const sanitizeInput = (input) => {
  const sanitizedInput = input.replace(/[^a-zA-Z\s]/g, '');
  const words = sanitizedInput.trim().split(' ');
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
  }
  const capitalizedInput = words.join(' ');
  return capitalizedInput;
};

export const getCurrentTime = () => {
  return new Date().toLocaleString('en-US', { timeZone: 'America/New_York' });
};

export const readDynamoDB = (id) => {
  const url = aws;
  const data = {
    operation: 'read',
    payload: {
      Key: {
        id: id,
      }
    }
  };

  return fetch(url, {
    method: 'POST',
    body: JSON.stringify(data),
    headers:{
      'Content-Type': 'application/json'
    }
  })
  .then(res => {
    if (!res.ok) {
      throw new Error('Network response was not ok during readDynamoDB');
    }
    return res.json();
  })
  .catch(error => {
    console.error('Error:', error);
    throw error;
  });
}

export const queryDynamoDB = (searchValue) => {
  const url = aws;
  const data = {
    operation: 'query',
    payload: {
      searchValue: searchValue,
    }
  };

  return fetch(url, {
    method: 'POST',
    body: JSON.stringify(data),
    headers:{
      'Content-Type': 'application/json'
    }
  })
  .then(res => {
    if (!res.ok) {
      throw new Error('Network response was not ok during queryDynamoDB');
    }
    return res.json();
  })
  .catch(error => {
    console.error('Error:', error);
    throw error;
  });
}

export const updateDynamoDB = (id, rsvp, songRequest) => {
    const url = aws;
    const data = {
      operation: 'update',
      payload: {
        Key: {
          id: id
        },
        UpdateExpression: "SET #rsvp = :rsvp_value, #song_request = :song_request_value, #timestamp_value = :timestamp_value",
        ExpressionAttributeNames: {
          "#rsvp": "rsvp",
          "#song_request": "song-request",
          "#timestamp_value": "timestamp"
        },
        ExpressionAttributeValues: {
          ":rsvp_value": rsvp,
          ":song_request_value": songRequest,
          ":timestamp_value": getCurrentTime()
        }
      }
    };

    return fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers:{
        'Content-Type': 'application/json'
      }
    })
    .then(res => {
      if (!res.ok) {
        throw new Error('Network response was not ok during updateDynamoDB');
      }
      return res.json();
    })
    .catch(error => {
      console.error('Error:', error);
      throw error;
    });
  }