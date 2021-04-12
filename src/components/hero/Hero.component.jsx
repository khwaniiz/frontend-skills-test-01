import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Box } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    hero: {
        background: "linear-gradient(104.61deg, #FF00B8 2.65%, #FF655B 51.83%, #FFC700 100%)",
        position: "relative"
    },

    heroContainer: {
        display: 'flex',

    },
    imageContainer: {
        maxWidth: "300px",
        maxHeight: "300px",
        marginRight: '1rem',

    },
    image: {
        width: "100%",

    },

    middleImgContainer: {
        maxWidth: "200px",
        maxHeight: "200px",
        marginLeft: "-2rem"
    },
    imageMiddle: {
        width: "100%",
        height: "100%",
        [theme.breakpoints.down('sm')]: {
            display: "none"
        },
    },
    imageTop: {
        margin: "1rem 1rem 0 0",
        maxWidth: "300px",
        maxHeight: "300px",
        position: "absolute",
        left: "80%",
        [theme.breakpoints.down('sm')]: {
            maxWidth: "400px",
            maxHeight: "400px",
            left: "60%",

        },
        [theme.breakpoints.down('xs')]: {
            display: "none"

        },

    },

    textContainer: {
        position: "absolute",
        left: "45%",
        top: "25%",
        [theme.breakpoints.down('xs')]: {
            left: "5%",
            top: "10%",
            padding: ".2rem"
        },

    },
    note: {
        fontFamily: 'Red Hat Display',
        fontWeight: "bold",
        fontStyle: "italic",
        textAlign: "right",
        color: "#fff",
        fontSize: "1.25rem"
    }

}));

const Hero = ({ title, subTitle, leftImg, middleImg, rightImg, altMiddle, altLeft, altRight, note }) => {
    const classes = useStyles();

    return (
        <>
            <Box className={classes.hero}>
                <Box m={2} className={classes.heroContainer}>
                    <Box className={classes.imageContainer}><img src={leftImg} alt={altLeft} className={classes.image} /></Box>
                    {altMiddle === 'hands' ? (<Box className={classes.imageContainer}><img src={middleImg} alt={altMiddle} className={classes.imageMiddle} /></Box>) : (<Box className={classes.middleImgContainer}><img src={middleImg} alt={altMiddle} className={classes.imageMiddle} /></Box>)}

                    <Box className={classes.textContainer}>
                        <Typography variant='h3'>{title} </Typography>
                        <Typography variant='h3'>{subTitle}</Typography>
                        {note && <Typography className={classes.note}>{note}</Typography>}
                    </Box>
                    <Box className={classes.imageTop}><img src={rightImg} alt={altRight} className={classes.image} /></Box>
                </Box>



            </Box>

        </>
    )
}

export default Hero