import { google } from "googleapis";

const getClient = async () => {
  const apiKey = 'AIzaSyCzpWwkljXsINQ15ajA_8fc3ijrc9RwpXM'

  const auth = await google.auth.getClient({
    credentials: {
      API_KEY: apiKey,
    },
  });

  return google.docs({ version: "v1", auth });
};

export default getClient;