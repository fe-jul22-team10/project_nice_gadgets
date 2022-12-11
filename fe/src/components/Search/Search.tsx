import React, { useContext } from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import StateContext from '../../components/Context/Context';

import './Search.scss';

export const Search: React.FC = () => {
  const {
    query,
    handleChange,
  } = useContext(StateContext);

  return (
    <div className="input-container">
      <Paper
        component="form"
        sx={{
          p: '2px 4px',
          display: 'flex',
          alignItems: 'center',
          width: {
            xs: 210,
            sm: 180,
            md: 350,
          },
        }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search..."
          value={query}
          onChange={handleChange}
        />
        <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
          <SearchIcon />
        </IconButton>
      </Paper>
    </div>
  );
};
