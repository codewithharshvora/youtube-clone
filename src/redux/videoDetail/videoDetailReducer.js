import {
  FETCH_VIDEO_DETAIL_FAILURE,
  FETCH_VIDEO_DETAIL_REQUEST,
  FETCH_VIDEO_DETAIL_SUCCESS,
} from './videoDetailActionTypes';

const initialState = {
  loading: true,
  data: [],
  error: '',
};

export const VideoDetailReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case FETCH_VIDEO_DETAIL_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_VIDEO_DETAIL_SUCCESS:
      return {
        loading: false,
        data: payload,
        error: '',
      };
    case FETCH_VIDEO_DETAIL_FAILURE:
      return {
        loading: false,
        data: [],
        error: payload,
      };
    default:
      return state;
  }
};
