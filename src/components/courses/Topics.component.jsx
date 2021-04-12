import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Box, Button, Grid } from '@material-ui/core';
import { GoFileCode, GoGear, GoFlame, GoLightBulb } from "react-icons/go";


const useStyles = makeStyles((theme) => ({
    title: {
        ...theme.typography.title,
        textAlign: "center",
        [theme.breakpoints.down('sm')]: {
            fontSize: "2.75rem"

        },
        [theme.breakpoints.down('xs')]: {
            fontSize: "2.5rem"
        }
    },
    subTitle: {
        textAlign: "center",
        color: "#676565",
        lineHeight: 1,
        margin: "1rem auto",
        width: "50%",
        [theme.breakpoints.down('sm')]: {
            width: "100%",
        },
    },

    reviewContainer: {
        maxWidth: "100%",
        marginBottom: '2em',
        position: 'relative',
        boxShadow: "0 3px 6px 0 rgb(0 0 0 / 16%)",
        padding: "20px",
        margin: "2rem auto",
        display: "flex",
        flexDirection: "column",
        transition: "all 0.2s ease-in",
        background: "#fff",
        '&:hover': {
            boxShadow: "0 3px 6px 0 rgb(0 0 0 / 40%)",
        }
    },
    imageContainer: {
        position: "relative",
        width: "50px",
        height: "50px",
        borderRadius: "50%",
        margin: "0 auto",
        marginBottom: "1rem",
        color: "#151371",
    },

    image: {
        width: "100%",
        display: "block",
        height: "100%",
        objectFit: "cover",
        borderRadius: "50%",
    },

    descriptionContainer: {
        display: "flex",
        justifyContent: "center",
        textAlign: "center",
        marginTop: "1rem",
    },

    description: {
        fontFamily: 'Red Hat Display',
        fontSize: "1rem",
        lineHeight: 1.5,
        letterSpacing: 1,
        color: "#676565",
    },

    buttonContainer: {
        marginTop: "2rem",
        textAlign: "center",
    },
    button: {
        ...theme.button,
        width: "10rem",
        padding: ".75",
        background: "linear-gradient(104.61deg, #FF00B8 2.65%, #FF655B 51.83%, #FFC700 100%)",
        transition: "all 1s ease-in",
        "&:hover": {
            background: "linear-gradient(161.32deg, #FF00B8 3.86%, #151371 98.64%)",
            backgroundClip: "padding-box",

        }

    }

}));


const Topics = () => {
    const classes = useStyles();
    return (
        <>

            <Box pt={10} pb={10} mr={5} ml={5}>
                <Box style={{ display: "flex", flexDirection: "column", padding: "0 2rem", width: "100%" }}>
                    <Typography className={classes.title}>Our Courses</Typography>
                    <Typography variant='subtitle1' className={classes.subTitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Typography>
                </Box>
                <Grid container justify='center' spacing={4}>
                    <Grid item xs={12} sm={5} md={3} style={{ display: "flex", justifyContent: "center" }}>
                        <Box className={classes.reviewContainer}>
                            <Box className={classes.imageContainer}>
                                <Box ><GoFileCode className={classes.image} /></Box>
                            </Box>
                            <Box className={classes.descriptionContainer}>
                                <Typography className={classes.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Typography>

                            </Box>
                            <Box className={classes.nameContainer}>
                                <Box className={classes.buttonContainer}>
                                    <Button className={classes.button}><Typography>More Details</Typography></Button>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={5} md={3} style={{ display: "flex", justifyContent: "center" }}>
                        <Box className={classes.reviewContainer}>
                            <Box className={classes.imageContainer}>
                                <Box ><GoGear className={classes.image} /></Box>
                            </Box>
                            <Box className={classes.descriptionContainer}>
                                <Typography className={classes.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Typography>

                            </Box>
                            <Box className={classes.nameContainer}>
                                <Box className={classes.buttonContainer}>
                                    <Button className={classes.button}><Typography>More Details</Typography></Button>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={5} md={3} style={{ display: "flex", justifyContent: "center" }}>
                        <Box className={classes.reviewContainer}>
                            <Box className={classes.imageContainer}>
                                <Box ><GoFlame className={classes.image} /></Box>
                            </Box>
                            <Box className={classes.descriptionContainer}>
                                <Typography className={classes.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Typography>

                            </Box>
                            <Box className={classes.nameContainer}>
                                <Box className={classes.buttonContainer}>
                                    <Button className={classes.button}><Typography>More Details</Typography></Button>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={5} md={3} style={{ display: "flex", justifyContent: "center" }}>
                        <Box className={classes.reviewContainer}>
                            <Box className={classes.imageContainer}>
                                <Box ><GoLightBulb className={classes.image} /></Box>
                            </Box>
                            <Box className={classes.descriptionContainer}>
                                <Typography className={classes.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Typography>

                            </Box>
                            <Box className={classes.nameContainer}>
                                <Box className={classes.buttonContainer}>
                                    <Button className={classes.button}><Typography>More Details</Typography></Button>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>

        </>
    )
}

export default Topics
