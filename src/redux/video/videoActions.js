import { fetchVideosService } from '../../utils/fetchFromAPI';
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

const fetchVideosSuccess = (videos) => {
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

export const fetchVideos = (url) => {
  return async (dispatch) => {
    dispatch(fetchVideosRequest());
    try {
      const result = await fetchVideosService(`search?part=snippet&q=${url}`);
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
