import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Box, Button, } from '@material-ui/core';
import aboutImage from '../../assets/course.jpg'


const useStyles = makeStyles((theme) => ({

    hero: {
        display: "flex",
        justifyContent: "space-around",
        [theme.breakpoints.down('sm')]: {
            flexDirection: "column-reverse",
            justifyContent: "center",

        },
    },
    imageContainer: {
        width: "100%",
    },
    image: {
        width: "500px",
        height: "500px",
        verticalAlign: "middle",
        borderStyle: "none",
        padding: "1rem",
        [theme.breakpoints.down('sm')]: {
            width: "300px",
            height: "300px",
            alignSelf: "center",
            padding: "0",

        },
    },
    header: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignContent: "center",
        padding: "2rem"
    },
    title: {
        fontFamily: 'Red Hat Display',
        fontSize: "2rem",
        fontWeight: "bold",
        color: "#151371",
        lineHeight: 1.3,

        [theme.breakpoints.down('xs')]: {
            fontSize: "2.5rem",
            textAlign: "left"

        },
    },
    subTitle: {
        fontFamily: 'Red Hat Display',
        fontSize: "1.2rem",
        color: "#676565",
        marginTop: "1.5rem",
        [theme.breakpoints.down('xs')]: {
            fontSize: "1rem",
            textAlign: "left"

        },
    },

    topTitle: {
        fontFamily: 'Red Hat Display',
        fontSize: "1rem",
        color: "#676565",
        marginBottom: "1.5rem",
        [theme.breakpoints.down('xs')]: {
            fontSize: "r.8em",
            textAlign: "left"

        },
    },
    buttonContainer: {
        display: "flex",
        marginTop: "1rem",
        margin: "3rem 0 0 0",
        [theme.breakpoints.down('sm')]: {

        },
    },

    button: {
        fontFamily: 'Red Hat Display',
        textTransform: 'uppercase',
        borderRadius: '200px',
        border: "1px solid #151371",
        transition: 'all .2s ease',
        color: "#151371",
        width: "25%",
        margin: ".1rem",
        background: "#fff",
        padding: ".5rem",
        '&:hover': {
            background: "#151371",
            color: "#fff",
            borderColor: "#fff"

        },
        [theme.breakpoints.down('xs')]: {
            width: "50%",
        },
    },
    logoTextWrapper: {
        fontSize: "3.5rem",
        marginRight: "1rem"

    },
    textCard: {
        display: "flex",
        alignItems: "center",
        [theme.breakpoints.down('sm')]: {
            textAlign: "center"
        },

    },
    topic: {
        fontFamily: 'Red Hat Display',
        fontSize: "1rem",
        fontWeight: "700",
        color: "#151371",
        marginRight: "1rem"
    },

}));


const About = () => {
    const classes = useStyles();

    return (
        <>
            {/* Hero */}
            <Box className={classes.hero}>
                <img src={aboutImage} alt='girl' className={classes.image} />
                <Box className={classes.header}>
                    <Typography className={classes.topTitle}>Lorem ipsum</Typography>
                    <Typography className={classes.title}>Lorem ipsum dolor sit amet</Typography>
                    <Typography className={classes.subTitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus. Dignissim sodales</Typography>
                    <Box className={classes.buttonContainer}>
                        <Button className={classes.button}><Typography>Learn more</Typography></Button>
                    </Box>
                </Box>

            </Box>

        </>
    )
}

export default About
