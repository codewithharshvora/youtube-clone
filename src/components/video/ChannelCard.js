import { CheckCircle } from '@mui/icons-material';
import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const ChannelCard = (props) => {
  const { channelDetail, classes } = props;

  const {
    id: { channelId },
    snippet,
    statistics,
  } = channelDetail;

  return (
    <Box
      sx={{
        boxShadow: 'none',
        borderRadius: '20px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: { xs: '100%', md: '320px' },
        margin: 'auto',
        height: '326px',
        ...classes,
      }}
    >
      <Link
        to={
          channelId ? `/channel/${channelId}` : `/channel/${channelDetail.id}`
        }
      >
        <CardContent
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white',
          }}
        >
          <CardMedia
            image={snippet?.thumbnails?.high?.url}
            alt={snippet?.title}
            sx={{
              borderRadius: '50%',
              width: 180,
              height: 180,
              mb: 2,
              border: '1px solid #e3e3e3',
            }}
          />
          <Typography variant="h6">
            {snippet?.title.slice(0.6)}
            <CheckCircle sx={{ fontSize: 14, color: 'gray', ml: '5px' }} />
          </Typography>
          {statistics?.subscriberCount && (
            <Typography variant="subtitle2" fontWeight="bold" color="gray">
              {parseInt(statistics?.subscriberCount).toLocaleString()}{' '}
              Subscriber
            </Typography>
          )}
        </CardContent>
      </Link>
    </Box>
  );
};

export default ChannelCard;
