import { Stack } from '@mui/material';
import { Link } from 'react-router-dom';

import classes from './Navbar.module.css';
import { logo } from './../../../utils/constants';
import SearchBar from './SearchBar';

const Navbar = () => (
  <Stack direction="row" alignItems="center" p={2} className={classes.root}>
    <Link to={`/`} className={classes.link}>
      <img src={logo} alt="logo" height={45} />
    </Link>
    <SearchBar />
  </Stack>
);

export default Navbar;
