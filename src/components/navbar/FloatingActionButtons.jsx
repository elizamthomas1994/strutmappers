import React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import FavoriteIcon from '@mui/icons-material/Favorite';
import NavigationIcon from '@mui/icons-material/Navigation';
import HomeIcon from '@mui/icons-material/Home';
import WorkIcon from '@mui/icons-material/Work';
import PersonPinIcon from '@mui/icons-material/PersonPin';

export default function FloatingActionButtons() {
    return (
      <Box sx={{ '& > :not(style)': { m: 1 } }}>
        <Fab color="primary" aria-label="home">
          <HomeIcon />
        </Fab>
        <Fab color="secondary" aria-label="edit">
          <WorkIcon />
        </Fab>
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
        <Fab color="secondary" aria-label="edit">
          <PersonPinIcon />
        </Fab>
        <Fab variant="extended">
          <NavigationIcon sx={{ mr: 1 }} />
          Navigate
        </Fab>
        <Fab disabled aria-label="like">
          <FavoriteIcon />
        </Fab>
      </Box>
    );
  }
