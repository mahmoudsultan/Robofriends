import { RESET_LOADING, FETCH_ROBOTS_SUCCEED, FETCH_ROBOTS_FAILED } from './constants';

const initialState = {
  loading: true,
};

export const resetLoading = () => ({
  type: RESET_LOADING,
});

export const loadingReducer = (state = initialState, action) => {
  switch (action.type) {
    case RESET_LOADING:
    case FETCH_ROBOTS_SUCCEED:
    case FETCH_ROBOTS_FAILED:
      return { ...state, loading: false };
    default:
      return state;
  }
}
