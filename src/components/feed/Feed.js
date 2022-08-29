import { useEffect, useState } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { fetchVideos } from '../../redux/video/videoActions';

import Sidebar from '../layout/sidebar/Sidebar';
import Videos from '../video/Videos';

const Feed = () => {
  const dispatch = useDispatch();

  const [selectedCategory, setSelectedCategory] = useState('New');
  useEffect(() => {
    dispatch(fetchVideos(`${selectedCategory}`));
  }, [selectedCategory]);

  return (
    <Stack
      sx={{
        flexDirection: {
          sx: 'column',
          md: 'row',
        },
      }}
    >
      <Box
        sx={{
          height: {
            sx: 'auto',
            md: '92vh',
          },
          borderRight: '1px solid #3d3d3d',
          px: { sx: 0, md: 2 },
        }}
      >
        <Sidebar
          setSelectedCategory={setSelectedCategory}
          selectedCategory={selectedCategory}
        />
      </Box>
      <Box
        p={2}
        sx={{
          overflowY: 'auto',
          height: '90vh',
          flex: 2,
        }}
      >
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{
            color: 'white',
          }}
        >
          {selectedCategory} <span style={{ color: '#fc1503' }}>Videos</span>
        </Typography>
        <Videos />
      </Box>
    </Stack>
  );
};

export default Feed;
