export const isMobileDevice = () => {
  console.log("checking if mobile device");
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
};

export const readTable = (id) => {
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
      throw new Error('Network response was not ok');
    }
    return res.json();
  })
  .catch(error => {
    console.error('Error:', error);
    throw error;
  });
}