import { CheckCircle } from '@mui/icons-material';
import { Box, Stack, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import ReactPlayer from 'react-player';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { fetchVideoDetail } from '../../redux/videoDetail/videoDetailActions';
import Videos from '../video/Videos';

const VideoDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const videoDetail = useSelector((state) => state.videoDetail);

  useEffect(() => {
    dispatch(fetchVideoDetail(id));
  }, [id]);

  if (videoDetail.loading) {
    return <h1>Loading...</h1>;
  }

  const {
    snippet: { title, channelId, channelTitle },
    statistics: { viewCount, likeCount },
    relatedVideos,
  } = videoDetail.data[0];

  const videoURL = `https:www.youtube.com/watch?v=${id}`;

  return (
    <Box minHeight="95vh">
      <Stack direction={{ xs: 'column', md: 'row' }}>
        <Box flex={1}>
          <Box sx={{ width: '100%', position: 'sticky', top: '86px' }}>
            <ReactPlayer url={videoURL} className="react-player" controls />
            <Typography color="#fff" variant="h5" fontWeight="bold" p={2}>
              {title}
            </Typography>
            <Stack
              direction="row"
              justifyContent="space-between"
              sx={{ color: '#fff' }}
              py={1}
              px={2}
            >
              <Link to={`/channel/${channelId}`}>
                <Typography
                  variant={{ sm: 'subtitle1', md: 'h6' }}
                  color="#fff"
                >
                  {channelTitle}
                  <CheckCircle
                    sx={{ fontSize: 12, color: 'gray', ml: '5px' }}
                  />
                </Typography>
              </Link>
              <Stack direction="row" gap="20px" alignItems="center">
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(viewCount).toLocaleString()} views
                </Typography>{' '}
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(likeCount).toLocaleString()} Likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
        <Box
          px={2}
          py={{ md: 1, xs: 5 }}
          justifyContent="center"
          alignItems="center"
        >
          <Videos direction="column" />
        </Box>
      </Stack>
    </Box>
  );
};

export default VideoDetail;
