import { Box, Stack } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import ChannelCard from './ChannelCard';
import VideoCard from './VideoCard';

const Videos = ({ direction, justifyContent }) => {
  const videos = useSelector((state) => state.video);
  const { loading, data, error } = videos;

  return loading ? (
    <h1>Loading...</h1>
  ) : error !== '' ? (
    error
  ) : (
    <Stack
      direction={direction || 'row'}
      flexWrap="wrap"
      justifyContent={
        justifyContent || { xs: 'center', sm: 'center', md: 'start' }
      }
      gap={2}
    >
      {data.map((item, index) => (
        <Box key={index}>
          {item.id.channelId && <ChannelCard channelDetail={item} />}
          {item.id.videoId && (
            <VideoCard id={item.id.videoId} snippet={item.snippet} />
          )}
          {item.id.playlistId && (
            <VideoCard id={item.id.playlistId} snippet={item.snippet} />
          )}
        </Box>
      ))}
    </Stack>
  );
};
export default Videos;
