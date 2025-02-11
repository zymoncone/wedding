export default async (req, context) => {
  const { party_id } = context.params;
  const url = process.env.REACT_APP_AWS_API_PROD;

  const body = {
    operation: 'query',
    payload: {
      searchValue: party_id,
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
      throw new Error('Network response was not ok during queryDynamoDB');
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
  path: "/v1/parties/:party_id",
};