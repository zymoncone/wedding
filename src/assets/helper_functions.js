export const isMobileDevice = () => {
  console.log("checking if mobile device");
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
};

export const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export const readDynamoDB = (id) => {
  const url = 'https://wrqj9e6vd1.execute-api.us-east-2.amazonaws.com/test/DynamoDBManager';
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
  const url = 'https://wrqj9e6vd1.execute-api.us-east-2.amazonaws.com/test/DynamoDBManager';
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
    const url = 'https://wrqj9e6vd1.execute-api.us-east-2.amazonaws.com/test/DynamoDBManager';
    const data = {
      operation: 'update',
      payload: {
        Key: {
          id: id
        }, 
        UpdateExpression: "SET #rsvp = :rsvp_value, #song_request = :song_request_value", 
        ExpressionAttributeNames: {
          "#rsvp": "rsvp", 
          "#song_request": "song-request"
        }, 
        ExpressionAttributeValues: {
          ":rsvp_value": rsvp, 
          ":song_request_value": songRequest
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