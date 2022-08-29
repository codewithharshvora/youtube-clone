import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Box } from '@mui/material';

import Navbar from './components/layout/navbar/Navbar';
import Feed from './components/feed/Feed';
import SearchFeed from './components/feed/SearchFeed';
import VideoDetail from './components/video/VideoDetail';
import ChannelDetail from './components/channel/ChannelDetail';

import { store } from './redux/store';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Box sx={{ backgroundColor: '#000' }}>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Feed />} />
          <Route path="/video/:id" element={<VideoDetail />} />
          <Route path="/channel/:id" element={<ChannelDetail />} />
          <Route path="/search/:searchTerm" element={<SearchFeed />} />
        </Routes>
      </Box>
    </BrowserRouter>
  </Provider>
);

export default App;
