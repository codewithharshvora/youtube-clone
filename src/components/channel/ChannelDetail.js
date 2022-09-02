import { Box } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchChannelInfo } from '../../redux/channel/channelActions';
import ChannelCard from '../video/ChannelCard';
import Videos from '../video/Videos';

const ChannelDetail = () => {
  const dispatch = useDispatch();
  const channel = useSelector((state) => state.channel);

  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchChannelInfo(id));
  }, [id]);

  return (
    <div>
      <Box minHeight="95vh">
        <Box>
          <div
            style={{
              background:
                'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(97,9,121,1) 35%, rgba(0,212,255,1) 100%)',
              zIndex: 10,
              height: '200px',
            }}
          />
          {channel?.data?.items && (
            <ChannelCard
              channelDetail={channel?.data?.items[0]}
              classes={{ marginTop: '-120px' }}
            />
          )}
        </Box>
        <Box display="flex" p="2">
          <Videos justifyContent="center" />
        </Box>
      </Box>
    </div>
  );
};

export default ChannelDetail;
