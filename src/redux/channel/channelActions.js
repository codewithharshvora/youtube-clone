import { fetchFromAPI } from '../../utils/fetchFromAPI';
import { fetchVideos } from '../video/videoActions';
import {
  FETCH_CHANNEL_FAILURE,
  FETCH_CHANNEL_REQUEST,
  FETCH_CHANNEL_SUCCESS,
} from './channelActionTypes';

const fetchChannelRequest = () => {
  return {
    type: FETCH_CHANNEL_REQUEST,
  };
};

const fetchChannelSuccess = (channel) => {
  return {
    type: FETCH_CHANNEL_SUCCESS,
    payload: channel,
  };
};

const fetchChannelFailure = (error) => {
  return {
    type: FETCH_CHANNEL_FAILURE,
    payload: error,
  };
};

export const fetchChannelInfo = (channelId) => {
  return async (dispatch) => {
    dispatch(fetchChannelRequest());
    try {
      const result = await fetchFromAPI(
        `channels?part=snippet&id=${channelId}`
      );

      if (result.error) {
        dispatch(fetchChannelFailure(result.error));
      } else {
        dispatch(fetchChannelSuccess(result));
        dispatch(fetchVideos('', channelId));
      }
    } catch (error) {
      dispatch(fetchChannelFailure(error.message));
    }
  };
};
