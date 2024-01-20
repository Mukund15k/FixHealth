import React from 'react';
import { Box, AppBar, Toolbar, Typography } from '@material-ui/core';
import Logo from "./Images/navlogo.svg";
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        background: 'transparent',
        boxShadow: 'none',
        position: 'fixed',
    },
    title: {
        marginLeft: 'auto',
        display: 'flex',
        alignItems: 'center',
        '& h6': {
            '& a': {
                fontSize: '1rem',
                marginRight: theme.spacing(5),
                color: 'white',
                '&:hover': {
                    textDecoration: 'none',
                    cursor: 'pointer',
                },
            },
        },
    },
    logo: {
        height: '3rem',
        marginRight: theme.spacing(100), 
        [theme.breakpoints.down('sm')]: {
            height: '2.5rem',
        },
    },
}));

const Navbar = () => {
    const classes = useStyles();
    return (
        <Box>
            <AppBar className={classes.root} position="static">
                <Toolbar className={classes.title}>
                    <img src={Logo} alt="Logo" className={classes.logo} />
                    <Typography variant="h6">
                        <Link to="/">Home</Link>
                    </Typography>
                    <Typography variant="h6">
                        <Link to="/bookingForm">Appointment</Link>
                    </Typography>
                    <Typography variant="h6">
                        <Link to="/testimonials">Testimonials</Link>
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Navbar;
