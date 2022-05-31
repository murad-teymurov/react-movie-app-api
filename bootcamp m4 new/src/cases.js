export const initialState = {
    // loading: true,
    // movies: [],
    // errorMessage: null,
    idList: ''
  };
  
  export const reducer = (state, action) => {
    switch (action.type) {
        case "GET_LIST_ID":
          return{
            ...state,
            idList:  action.payload.listId
          }
      default:
        return state;
    }
  };