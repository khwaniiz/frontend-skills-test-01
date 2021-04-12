import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Box, Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    title: {
        ...theme.typography.title,
        textAlign: "center",
        [theme.breakpoints.down('sm')]: {
            fontSize: "2.75rem"

        },
        [theme.breakpoints.down('xs')]: {
            fontSize: "2.2rem"
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
        transition: "transform 0.2s ease-in",
        '&:hover': {
            transform: "translateY(-15px)"
        }

    },
    imageContainer: {
        position: "relative",
        width: "70px",
        height: "70px",
        borderRadius: "50%",
        margin: "0 auto",
        marginBottom: "1.5rem",
    },
    image: {
        width: "100%",
        display: "block",
        height: "100%",
        objectFit: "cover",
        borderRadius: "50%",

        '&:after': {
            content: "tt",
            position: "absolute",
            top: 0,
            left: 0,
            width: " 2.5rem",
            height: "2.5rem",
            display: "grid",
            placeItems: "center",
            borderRadius: "50%",
            background: "#FF00B8",
            color: "#fff",
            transform: "translateY(25%)",
            zIndex: 1,
        },

        '&:before': {
            content: '""',
            width: "100%",
            height: "100%",
            background: "#FF00B8",
            position: "absolute",
            top: "-0.25rem",
            right: "-0.5rem",
            borderRadius: "50%",
        }
    },

    descriptionContainer: {
        display: "flex",
        justifyContent: "center",
        textAlign: "center"
    },

    description: {
        fontFamily: 'Red Hat Display',
        fontSize: "1rem",
        lineHeight: 1.5,
        letterSpacing: 1,
        color: "#676565",
    },
    nameContainer: {
        textAlign: "center"
    },
    name: {
        fontFamily: 'Red Hat Display',
        fontSize: "1.2rem",
        fontWeight: "bold",
        textTransform: "capitalize",
        lineHeight: 2,
        letterSpacing: 1,
        color: "#151371"
    },

    job: {
        fontFamily: 'Red Hat Display',
        fontSize: "1rem",
        textTransform: "capitalize",
        lineHeight: 2,
        letterSpacing: 1,
        color: "#676565",
    }
}));


const Testimonial = () => {
    const classes = useStyles();

    return (
        <>

            <Box pt={10} pb={10} mr={5} ml={5}>
                <Box style={{ display: "flex", flexDirection: "column", padding: "0 2rem", width: "100%" }}>
                    <Typography className={classes.title}>Testimonial</Typography>
                    <Typography variant='subtitle1' className={classes.subTitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </Typography>
                </Box>
                <Grid container justify='center' spacing={4}>
                    <Grid item xs={12} sm={5} md={3} style={{ display: "flex", justifyContent: "center" }}>
                        <Box className={classes.reviewContainer}>
                            <Box className={classes.imageContainer}>
                                <img src={'https://minorityprogrammers.com/assets/images/kush.jpg'} alt='customer' className={classes.image} />
                            </Box>
                            <Box className={classes.descriptionContainer}>
                                <Typography className={classes.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </Typography>

                            </Box>
                            <Box className={classes.nameContainer}>
                                <hr style={{ margin: "1rem 0", background: "#FF00B8", }} />
                                <Typography className={classes.name}>John Doe</Typography>
                                <Typography className={classes.job}>Student</Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={5} md={3} style={{ display: "flex", justifyContent: "center" }}>
                        <Box className={classes.reviewContainer}>
                            <Box className={classes.imageContainer}>
                                <img src={'https://minorityprogrammers.com/assets/images/jack.jpg'} alt='customer' className={classes.image} />
                            </Box>
                            <Box className={classes.descriptionContainer}>
                                <Typography className={classes.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Typography>

                            </Box>
                            <Box className={classes.nameContainer}>
                                <hr style={{ margin: "1rem 0", background: "#FF00B8", }} />
                                <Typography className={classes.name}>John Doe</Typography>
                                <Typography className={classes.job}>Student</Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={5} md={3} style={{ display: "flex", justifyContent: "center" }}>
                        <Box className={classes.reviewContainer}>
                            <Box className={classes.imageContainer}>
                                <img src={'https://minorityprogrammers.com/assets/images/kush.jpg'} alt='customer' className={classes.image} />
                            </Box>
                            <Box className={classes.descriptionContainer}>
                                <Typography className={classes.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Typography>

                            </Box>
                            <Box className={classes.nameContainer}>
                                <hr style={{ margin: "1rem 0", background: "#FF00B8", }} />
                                <Typography className={classes.name}>John Doe</Typography>
                                <Typography className={classes.job}>Student</Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={5} md={3} style={{ display: "flex", justifyContent: "center" }}>
                        <Box className={classes.reviewContainer}>
                            <Box className={classes.imageContainer}>
                                <img src={'https://minorityprogrammers.com/assets/images/jack.jpg'} alt='customer' className={classes.image} />
                            </Box>
                            <Box className={classes.descriptionContainer}>
                                <Typography className={classes.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Typography>

                            </Box>
                            <Box className={classes.nameContainer}>
                                <hr style={{ margin: "1rem 0", background: "#FF00B8", }} />
                                <Typography className={classes.name}>John Doe</Typography>
                                <Typography className={classes.job}>Student</Typography>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>

        </>
    )
}

export default Testimonial
