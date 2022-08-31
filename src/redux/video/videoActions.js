import { fetchFromAPI } from '../../utils/fetchFromAPI';
import {
  FETCH_VIDEOS_FAILURE,
  FETCH_VIDEOS_REQUEST,
  FETCH_VIDEOS_SUCCESS,
} from './videoActionTypes';

const fetchVideosRequest = () => {
  return {
    type: FETCH_VIDEOS_REQUEST,
  };
};

export const fetchVideosSuccess = (videos) => {
  return {
    type: FETCH_VIDEOS_SUCCESS,
    payload: videos,
  };
};

const fetchVideosFailure = (error) => {
  return {
    type: FETCH_VIDEOS_FAILURE,
    payload: error,
  };
};

export const fetchVideos = (category, channelId = null) => {
  return async (dispatch) => {
    dispatch(fetchVideosRequest());
    try {
      const url =
        channelId === null
          ? `search?part=snippet&q=${category}`
          : `search?channelId=${channelId}&part=snippet&order=date`;

      const result = await fetchFromAPI(url);

      if (result.error) {
        dispatch(fetchVideosFailure(result.error));
      } else {
        dispatch(fetchVideosSuccess(result.items));
      }
    } catch (error) {
      dispatch(fetchVideosFailure(error));
    }
  };
};
