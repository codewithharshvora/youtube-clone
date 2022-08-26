import { Search } from '@mui/icons-material';
import { IconButton, Paper } from '@mui/material';

import classes from './SearchBar.module.css';

const SearchBar = () => {
  return (
    <Paper
      component="form"
      onSubmit={() => {}}
      sx={{
        borderRadius: 20,
        border: '1px solid #e3e3e3',
        pl: 2,
        boxShadow: 'none',
        // mr: { sm: 5 },
      }}
    >
      <input
        className={classes.searchBar}
        placeholder="Search..."
        value=""
        onChange={() => {}}
      />
      <IconButton
        type="submit"
        sx={{
          p: '10px',
          color: 'red',
        }}
      >
        <Search />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
