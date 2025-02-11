export default async (req, context) => {
  const getCurrentTime = () => {
    return new Date().toLocaleString('en-US', { timeZone: 'America/New_York' });
  };

  if (req.method !== 'POST') {
    return new Response('Method Not Allowed', {
      status: 405,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization'
      }
    });
  }

  const { id } = context.params;
  const { rsvp, songRequest, poprawinyRSVP, diet } = await req.json();
  const formattedId = id.replace(/-/g, ' ');
  const url = process.env.REACT_APP_AWS_API_PROD;

  const body = {
    operation: 'update',
    payload: {
      Key: {
        id: formattedId
      },
      UpdateExpression: "SET #rsvp = :rsvp_value, #song_request = :song_request_value, #timestamp_value = :timestamp_value, #poprawiny_rsvp = :poprawiny_rsvp_value, #diet = :diet_value",
      ExpressionAttributeNames: {
        "#rsvp": "rsvp",
        "#song_request": "song-request",
        "#timestamp_value": "timestamp",
        "#poprawiny_rsvp": "poprawiny-rsvp",
        "#diet": "diet"
      },
      ExpressionAttributeValues: {
        ":rsvp_value": rsvp,
        ":song_request_value": songRequest,
        ":timestamp_value": getCurrentTime(),
        ":poprawiny_rsvp_value": poprawinyRSVP,
        ":diet_value": diet
      }
    }
  };

  try {
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.REACT_APP_AWS_API_KEY
      }
    });
    if (!response.ok) {
      throw new Error('Network response was not ok during updateDynamoDB');
    }
    const data = await response.json();

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization'
      }
    });
  } catch (error) {
    console.error('Error:', error);
    return new Response('Internal Server Error', {
      status: 500,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization'
      }
    });
  }
};

export const config = {
  path: "/v1/users/:id/update",
};