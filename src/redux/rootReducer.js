import { combineReducers } from 'redux';

import { ChannelReducer } from './channel/channelReducer';
import { VideoReducer } from './video/videoReducer';
import { VideoDetailReducer } from './videoDetail/videoDetailReducer';

export const rootReducer = combineReducers({
  video: VideoReducer,
  videoDetail: VideoDetailReducer,
  channel: ChannelReducer,
});
