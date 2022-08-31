import { type } from '@testing-library/user-event/dist/type';
import { fetchFromAPI } from '../../utils/fetchFromAPI';
import { fetchVideosSuccess } from '../video/videoActions';
import {
  FETCH_VIDEO_DETAIL_FAILURE,
  FETCH_VIDEO_DETAIL_REQUEST,
  FETCH_VIDEO_DETAIL_SUCCESS,
} from './videoDetailActionTypes';

const fetchVideoDetailRequest = () => {
  return {
    type: FETCH_VIDEO_DETAIL_REQUEST,
  };
};

const fetchVideoDetailSuccess = (videos) => {
  return {
    type: FETCH_VIDEO_DETAIL_SUCCESS,
    payload: videos,
  };
};

const fetchVideoDetailFailure = (error) => {
  return {
    type: FETCH_VIDEO_DETAIL_FAILURE,
    payload: error,
  };
};

export const fetchVideoDetail = (id) => {
  return async (dispatch) => {
    dispatch(fetchVideoDetailRequest());
    try {
      const result = await fetchFromAPI(
        `videos?part=snippet&statistic&id=${id}`
      );

      if (result.error) {
        dispatch(fetchVideoDetailFailure(result.error));
      } else {
        dispatch(fetchVideoDetailSuccess(result.items));

        const relatedVideos = await fetchFromAPI(
          `search?part=snippet&relatedToVideoId=${id}&type=video`
        );
        dispatch(fetchVideosSuccess(relatedVideos.items));
      }
    } catch (error) {
      dispatch(fetchVideoDetailFailure(error));
    }
  };
};
