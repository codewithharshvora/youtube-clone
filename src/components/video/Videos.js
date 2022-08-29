import { Box, Stack } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import ChannelCard from './ChannelCard';
import VideoCard from './VideoCard';

const Videos = (props) => {
  const videos = useSelector((state) => state.video);
  const { loading, data, error } = videos;
  const {} = props;

  return error !== '' ? (
    error
  ) : (
    <Stack direction="row" flexWrap="wrap" justifyContent="start" gap={2}>
      {data.map((item, index) => (
        <Box key={index}>
          {item.id.channelId && <ChannelCard channelDetail={item} />}
          {item.id.videoId && <VideoCard video={item} />}
        </Box>
      ))}
    </Stack>
  );
};
export default Videos;
