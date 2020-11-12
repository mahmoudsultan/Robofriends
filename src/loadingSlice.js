import { RESET_LOADING } from './constants';

const initialState = {
  loading: true,
};

export const resetLoading = () => ({
  type: RESET_LOADING,
});

export const loadingReducer = (state = initialState, action) => {
  switch (action.type) {
    case RESET_LOADING:
      return { ...state, loading: false };
    default:
      return state;
  }
}
