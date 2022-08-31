import { Box, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchVideos } from '../../redux/video/videoActions';
import Videos from '../video/Videos';

const SearchFeed = () => {
  const { searchTerm } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchVideos(`${searchTerm}`));
  }, [searchTerm]);

  return (
    <Box
      sx={{
        overflowY: 'auto',
        height: '90vh',
        flex: 2,
      }}
    >
      <Typography
        variant="h6"
        fontWeight="bold"
        mb={2}
        pl={2}
        sx={{
          color: 'white',
        }}
      >
        Search Result For:{' '}
        <span style={{ color: '#fc1503' }}>{searchTerm}</span> Videos
      </Typography>
      <Videos />
    </Box>
  );
};

export default SearchFeed;
