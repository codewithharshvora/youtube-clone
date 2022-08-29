import { Stack, Typography } from '@mui/material';

import classes from './Sidebar.module.css';
import { applicationName, categories } from '../../../utils/constants';

const selectedCategory = 'New';

const Sidebar = () => (
  <>
    <Stack
      direction="row"
      sx={{
        overflowY: 'auto',
        height: { sx: 'auto', md: '95%' },
        flexDirection: { md: 'column' },
      }}
    >
      {categories.map((category) => {
        const { name, icon } = category;

        const selected = selectedCategory === name;

        return (
          <button
            className={`${classes.categoryButton} ${
              selected && classes.categorySelected
            } `}
            key={name}
          >
            <span
              className={`${classes.icon} ${
                selected && classes.categorySelected
              } `}
            >
              {icon}
            </span>
            <span>{name}</span>
          </button>
        );
      })}
    </Stack>
    <Typography variant="body2" className={classes.copyright}>
      Copyright {new Date().getFullYear()} {applicationName}
    </Typography>
  </>
);

export default Sidebar;
