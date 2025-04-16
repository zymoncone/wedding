import { formatIdForDB } from '../../src/assets/helper_functions.js';

export default async (req, context) => {
  const { id } = context.params;
  const formattedId = formatIdForDB(id);
  const url = process.env.REACT_APP_AWS_API_PROD;

  const body = {
    operation: 'read',
    payload: {
      Key: {
        id: formattedId,
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
      throw new Error('Network response was not ok during readDynamoDB');
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
  path: "/v1/users/:id",
};