import React from 'react';
import { Link } from 'react-router-dom'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { Box } from '@material-ui/core';
import Logo from '../../assets/mp_gradient_rock.png';
import { FaTwitter, FaFacebookSquare, FaLinkedin, FaInstagram, FaSistrix } from 'react-icons/fa'
import { BsList } from 'react-icons/bs'


import './navbar.styles.css'

const useStyles = makeStyles((theme) => ({
    nav: {
        fontFamily: "Roboto",
        background: "#fff",
        height: "80px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 999,
        margin: "0 auto",
        position: "fixed",
        top: 0,
        width: "100%",
        boxShadow: "0 3px 6px 0 rgb(0 0 0 / 16%)",
    },

    navbarContainer: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: "80px",
        zIndex: 1,
        width: "100%",
        maxWidth: "1200px",
        margin: "0 auto"
    },

    navbarLogo: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",

        [theme.breakpoints.down('sm')]: {
            fontSize: "1.2rem",
            width: "100%",

        },
        [theme.breakpoints.down('xs')]: {
            justifyContent: "space-evenly",
        },
    },
    imageWrapper: {
        cursor: "pointer",
    },

    navbarImage: {
        display: "flex",
        alignItems: "center",
        width: "120px",
        height: "100%",
        margin: "6rem 4rem 2rem 0",
        padding: 0,

        [theme.breakpoints.down('sm')]: {
            width: "100px",
            margin: "6rem 2rem 2rem 0",
        },
        [theme.breakpoints.down('xs')]: {
            width: "80px",
            margin: "3rem 0 3rem 0",
        },
    },

    navbarLink: {
        fontSize: "1rem",
        color: "#676565",
        textDecoration: "none",
        margin: "0 1rem 0 1rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        '&:hover': {
            color: "#ff00bb",
            transition: "all 0.3s ease-in"
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: "1.2rem",
            '&:not(:last-child)': {
                margin: "0 .8rem 0 .8rem",
            },
            '&:last-of-type': {
                fontSize: "2rem"
            }
        },
        [theme.breakpoints.down('xs')]: {
            '&:not(:last-child)': {
                display: "none",
            }
        },


    },
    navbarLinkRight: {
        fontSize: "1rem",
        color: "#676565",
        textDecoration: "none",
        margin: "0 1rem 0 1rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        '&:hover': {
            color: "#ff00bb",
            transition: "all 0.3s ease-in"
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: "1.2rem",
            '&:not(:last-child)': {
                margin: "0 .8rem 0 .8rem",
            },
            '&:last-of-type': {
                fontSize: "2rem"
            }
        },
        [theme.breakpoints.down('sm')]: {
            '&:not(:last-child)': {
                display: "none",
            }
        },
        [theme.breakpoints.down('xs')]: {
            display: "none"
        },

    },

    navbarMenu: {
        display: "flex",
        justifyContent: "space-between",

        [theme.breakpoints.down('sm')]: {
            display: "none"
        },

    },

    navbarMenuRight: {
        display: "flex",
        justifyContent: "space-between",

        [theme.breakpoints.down('sm')]: {
            '&:not(:last-child)': {
                display: "none",
            }
        },
        [theme.breakpoints.down('xs')]: {

            display: "none",

        },

    },


    navbarButtonSearch: {
        backgroundColor: "#151371",
        color: "#fff",
        fontSize: "1.25rem",
        width: "45px",
        height: "45px",
        borderRadius: "50%",
        textAlign: "center",
        margin: "0 1rem 0 1rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "all .4s ease",
        position: "relative",
        cursor: "pointer",
        left: "-1px",

        "&:before": {
            content: '""',
            position: "absolute",
            left: "-4.5px",
            width: "100%",
            height: "100%",
            borderRadius: "50%",
            border: "1px solid #151371",
            transition: " all .4s ease",

        },

        "&:hover": {
            "&:before": {
                left: "-1px"
            }
        },

    }

}));


const Navbar = () => {
    const classes = useStyles();
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.down('sm'))

    return (
        <>
            <Box>
                <Box className={classes.nav}>
                    <Box className={classes.navbarContainer}>
                        <Box className={classes.navbarLogo}>
                            <Box component={Link} className={classes.imageWrapper} to='/'><img src={Logo} className={classes.navbarImage} alt='logo' /></Box>
                            <Link to='/' className={classes.navbarLink}><FaTwitter /></Link>
                            <Link to='/' className={classes.navbarLink}><FaFacebookSquare /></Link>
                            <Link to='/' className={classes.navbarLink}><FaLinkedin /></Link>
                            <Link to='/' className={classes.navbarLink}><FaInstagram /></Link>
                            {matches ? <Link to='/' className={classes.navbarLink}><BsList /></Link> : ''}

                        </Box>
                        <Box className={classes.navbarMenu}>
                            <button className='navbarButton'>
                                <p className='navbarButtonText'>Connect Wallet</p>
                            </button>
                        </Box>
                        <Box className={classes.navbarMenuRight}>
                            <Link to='/' className={classes.navbarLinkRight}>Services</Link>
                            <Link to='/' className={classes.navbarLinkRight}>Events</Link>
                            <Link to='/learn' className={classes.navbarLinkRight}>Learn</Link>
                            <Link to='/' className={classes.navbarLinkRight}>Join</Link>
                            <Box component={Link} className={classes.navbarButtonSearch} to='/'><FaSistrix />
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default Navbar;