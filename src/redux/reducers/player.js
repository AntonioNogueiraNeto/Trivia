import { SUBMIT_INFO, SCORE_POINTS } from '../actions';

const INITIAL_STATE = {
  player: {},
};

const player = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SUBMIT_INFO:
    return {
      name: action.payload.name,
      email: action.payload.email,
      score: 0,
      assertions: 0,
    };
  case SCORE_POINTS:
    return {
      ...state,
      score: action.value,
    };

  default:
    return state;
  }
};

export default player;
