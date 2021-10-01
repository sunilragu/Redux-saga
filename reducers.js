
const reducer = (state = {}, action) => {
    switch (action.type) {
      
      case 'GET_NEWS':

        const stateGetNews = { ...state, loading: true };
        console.log('GET_NEWS',stateGetNews);

        return stateGetNews;

      case 'NEWS_RECEIVED':

       const stateNewsReceived = { ...state, news: action.json[0], loading: false };
       console.log('NEWS_RECEIVED',stateNewsReceived);

        return stateNewsReceived;

      default:
        return state;
    }
  };
  
  export default reducer;
  