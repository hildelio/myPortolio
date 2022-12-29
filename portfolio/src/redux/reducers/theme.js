import { CHOOSE_THEME } from '../actions';

const INITIAL_STATE = {
  theme: {  
    defaultTheme: true,
    personalTheme: false,
    matrixTheme: false,
  }
};
  
const themeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case CHOOSE_THEME: {
    return {
      ...state,
      theme: state.theme.filter((e) => e !== action.payload)//tenho que fazer com que o reducer identifique o tema escolhido, se for igual true se for diferente false.
    };
  }
  default: return state;
  }
};

export default themeReducer;
