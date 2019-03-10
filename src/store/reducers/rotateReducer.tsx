export const rotateReducer = (state: any, action: { type: any; payload: any }) => {
  switch (action.type) {
    case 'rotate':
      return {
        rotating: action.payload
      };
    default:
      return state;
  }
};
