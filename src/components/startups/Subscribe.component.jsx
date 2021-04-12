import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Box, Button } from '@material-ui/core';
import subscribeImage from '../../assets/sub.png'

const useStyles = makeStyles((theme) => ({
    subscribeWrapper: {
        display: "flex",
        height: "100%",
        [theme.breakpoints.down('sm')]: {
            flexDirection: "column"
        },
    },
    imageWrapper: {
        height: "auto",
        width: "50%",
        [theme.breakpoints.down('sm')]: {
            flexDirection: "column",
            width: "100%",
            height: "50%",
        },
    },
    image: {
        width: "100%",
        height: "100%",
        objectFit: "cover",
        objectPosition: "center center",
        verticalAlign: "middle",
        borderStyle: "none"

    },
    textWrapper: {
        background: "#047aed",
        width: "50%",
        margin: "0 auto",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center",
        padding: "3rem",
        [theme.breakpoints.down('sm')]: {
            flexDirection: "column",
            width: "100%",
            height: "100%"
        },
    },

    title: {
        fontFamily: 'Red Hat Display',
        fontSize: "2rem",
        fontWeight: "bold"
    },
    subTitle: {
        fontFamily: 'Red Hat Display',
        fontSize: "1rem",
    },
    inputContainer: {
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
        [theme.breakpoints.down('md')]: {
            flexDirection: "column",
            justifyContent: "center",
        },
    },

    input: {
        width: "100%",
        height: "50px",
        border: 0,
        borderRadius: "50px",
        backgroundColor: "#fff",
        paddingLeft: "60px",
        paddingRight: "30px",
        fontFamily: 'Red Hat Display',
        fontSize: "1rem",
        marginTop: "1rem",
        [theme.breakpoints.down('sm')]: {
            width: "50%",
        },
        [theme.breakpoints.down('xs')]: {
            width: "100%",
        },
    },
    icon: {
        fontSize: "1.5rem",
        position: "absolute",
        left: "70px",
        top: "30px",
    },
    btn: {
        ...theme.button,
        width: "150px",
        margin: "1rem",
        background: "#151371",
        color: "#fff",
        height: "40px",
        padding: "20px 32px",
        alignContent: "center",
        top: 5,
        fontWeight: "bold",
        transition: "all .5s ease-in",
        '&:hover': {
            background: "#2c2a7f",
        }


    }
}));


const Subscribe = () => {
    const classes = useStyles();

    return (
        <>
            <Box className={classes.subscribeWrapper}>
                <Box className={classes.imageWrapper}>
                    <img src={subscribeImage} alt='subscribe' className={classes.image} />
                </Box>
                <Box className={classes.textWrapper}>
                    <Typography className={classes.title}>Curious to Learn More</Typography>

                    <Typography className={classes.subTitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </Typography>
                    <Box className={classes.inputContainer}>
                        {/* <FaEnvelope className={classes.icon} color="#047aed" /> */}
                        <input type='text' placeholder='johndoe@gmail.com' className={classes.input} />
                        <Button className={classes.btn}>subscribe</Button>
                    </Box>
                </Box>
            </Box>

        </>
    )
}

export default Subscribe
