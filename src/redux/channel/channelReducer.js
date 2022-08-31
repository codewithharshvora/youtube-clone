import {
  FETCH_CHANNEL_FAILURE,
  FETCH_CHANNEL_REQUEST,
  FETCH_CHANNEL_SUCCESS,
} from './channelActionTypes';

const initialState = {
  loading: false,
  data: [],
  error: '',
};

export const ChannelReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case FETCH_CHANNEL_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_CHANNEL_SUCCESS:
      return {
        loading: false,
        data: payload,
        error: '',
      };
    case FETCH_CHANNEL_FAILURE:
      return {
        loading: false,
        data: [],
        error: payload,
      };
    default:
      return state;
  }
};
