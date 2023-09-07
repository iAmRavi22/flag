const initialState = {
    currency: 'USD',
  };
  
  const currencyReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'CHANGE_CURRENCY':
        return {
          ...state,
          currency: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default currencyReducer;