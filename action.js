export const getNews = () => ({
    type: 'GET_NEWS',
  });

  export const newsReceived =(json)=>({
    type: "NEWS_RECEIVED", 
    json: json.articles || [{ error: json.message }]
    
  });