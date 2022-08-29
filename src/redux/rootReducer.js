import { combineReducers } from 'redux';

import { VideoReducer } from './video/videoReducer';

export const rootReducer = combineReducers({
  video: VideoReducer,
});
