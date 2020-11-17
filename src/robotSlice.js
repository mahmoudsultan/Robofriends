import { FETCH_ROBOTS_PENDING, FETCH_ROBOTS_SUCCEED, FETCH_ROBOTS_FAILED } from './constants';

const ROBOTS_API_URI = 'https://jsonplaceholder.typicode.com/users';

const initialState = {
  robots: [],
  error: '',
  isPending: true,
}

export const requestRobot = () => (dispatch) => {
  dispatch({ type: FETCH_ROBOTS_PENDING });

  fetch(ROBOTS_API_URI)
    .then(response => response.json())
    .then((robotsJson) => {
      dispatch({ type: FETCH_ROBOTS_SUCCEED, payload: { robots: robotsJson } });
    })
    .catch((e) => {
      console.error('FETCHING ROBOTS FAILED WITH', e.message);
      dispatch({ type: FETCH_ROBOTS_FAILED, payload: { error: e } });
    });
}

export const robotsReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_ROBOTS_PENDING:
      return { ...state, isPending: true };
    case FETCH_ROBOTS_SUCCEED:
      return { ...state, robots: action.payload.robots, isPending: false };
    case FETCH_ROBOTS_FAILED:
      return { ...state, error: action.payload.error.message, isPending: false };
    default:
      return state;
  }
}
