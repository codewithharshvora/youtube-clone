import {
  FETCH_VIDEOS_FAILURE,
  FETCH_VIDEOS_REQUEST,
  FETCH_VIDEOS_SUCCESS,
} from './videoActionTypes';

const initialState = {
  loading: false,
  data: [],
  error: '',
};

export const VideoReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case FETCH_VIDEOS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_VIDEOS_SUCCESS:
      return {
        loading: false,
        data: payload,
        error: '',
      };
    case FETCH_VIDEOS_FAILURE:
      return {
        loading: false,
        data: [],
        error: payload,
      };
    default:
      return state;
  }
};
