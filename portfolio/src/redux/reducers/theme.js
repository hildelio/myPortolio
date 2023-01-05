import { CHOOSE_THEME } from '../actions';

const INITIAL_STATE = {
    defaultTheme: true,
    personalTheme: false,
    matrixTheme: false,
};
  
const themeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case CHOOSE_THEME: {
    return {
      defaultTheme: false,
      personalTheme: false,
      matrixTheme: false,
      [action.payload]: true,      
    };
  }
  default: return state;
  }
};

export default themeReducer;
