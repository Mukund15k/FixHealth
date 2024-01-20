import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import HeroImage from "../components/Images/hero.jpg";

const useStyles = makeStyles((theme) => ({
  heroContainer: {
    backgroundImage: `url(${HeroImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '900px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    textAlign: 'center',
  },
  heroText: {
    marginBottom: theme.spacing(3),
    marginLeft: theme.spacing(90), 
    
  },
}));

const Hero = () => {
  const classes = useStyles();

  return (
    <Box className={classes.heroContainer}>
      <Typography variant="h3" className={classes.heroText}>
        FixHealth
      </Typography>
      <Typography variant="body1" className={classes.heroText}>
        previously YourPhysio
      </Typography>
      <Typography variant="body1" className={classes.heroText}>
      On a mission to make people's lives pain free
      </Typography>
    </Box>
  );
};

export default Hero;
