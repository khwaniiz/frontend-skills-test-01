import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Box, Grid, Card, CardContent } from '@material-ui/core';
import introImage from '../../assets/intro2.jpg'
import { FaRegCalendarAlt, FaLaptopCode, FaPoll, FaRss, } from 'react-icons/fa'


const useStyles = makeStyles((theme) => ({
    header: {
        fontFamily: 'Red Hat Display',
        fontSize: "5rem",
        fontWeight: "bold",
        letterSpacing: "4px",
        lineHeight: 2
    },
    introTitle: {
        ...theme.typography.title,
        [theme.breakpoints.down('sm')]: {
            fontSize: "2.75rem"

        },
        [theme.breakpoints.down('xs')]: {
            fontSize: "2.5rem"
        }

    },

    introSubTitle: {
        ...theme.typography.normal,

    },
    introImageWrapper: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "500px",
        [theme.breakpoints.down('sm')]: {
            width: "500px",
        },
    },
    introImage: {
        margin: '0 auto',
        maxWidth: '100%',
        maxHeight: '100%',
    },

    introCard: {
        display: "flex",
        flexDirection: "column",
        marginBottom: "1rem"
    },
    row: {
        display: "flex",
        flexDirection: "row",
        [theme.breakpoints.down('xs')]: {
            flexDirection: "column",
        }
    },
    column: {
        display: "flex",
        padding: "2rem",
        [theme.breakpoints.down('sm')]: {
            flexDirection: "column",
            alignItems: "center"
        },

    }
    ,
    textCard: {
        display: "flex",
        flexDirection: "column",
        [theme.breakpoints.down('sm')]: {
            textAlign: "center"
        },

    },
    logoTextWrapper: {
        fontSize: "3rem",
        marginRight: "1.5rem"

    },

    topic: {
        fontFamily: 'Red Hat Display',
        fontSize: "1.3rem",
        fontWeight: "700",
        color: "#151371",

    },
    description: {
        fontFamily: 'Red Hat Display',
        fontSize: ".95rem",
        color: "#676565",
        lineHeight: 1.2,
        paddingRight: '.5rem',
        [theme.breakpoints.down('sm')]: {
            paddingRight: '.5rem',
        },
    }

}));


const IntroStartup = () => {
    const classes = useStyles();

    return (
        <>
            <Box pt={10} pb={10} mr={5} ml={5}>
                <Grid container justify='center'>
                    <Grid item xs={12} sm={12} md={8}>
                        <Box className={classes.introWrapper}>
                            <Typography className={classes.introTitle}>What we do</Typography>
                            <Box mt={1}>
                                <Typography className={classes.introSubTitle}>We are a top IT consultancy firm, delivering businesses socially impactful solutions.</Typography>
                            </Box>
                        </Box>

                        <Box mt={2} className={classes.introCard}>
                            <Box className={classes.row}>
                                <Card style={{ border: "none", boxShadow: "none" }}>
                                    <CardContent className={classes.column}>
                                        <Box className={classes.logoTextWrapper} ><FaRegCalendarAlt color="#FF00B8" /></Box>
                                        <Box className={classes.textCard}>
                                            <Box><Typography className={classes.topic}>Startup</Typography></Box>
                                            <Box><Typography className={classes.description}>Lorem ipsum dolor sit amet consectetur adipiscing elit</Typography></Box>
                                        </Box>
                                    </CardContent>
                                </Card>
                                <Card style={{ border: "none", boxShadow: "none" }}>
                                    <CardContent className={classes.column}>
                                        <Box className={classes.logoTextWrapper} ><FaLaptopCode color="#FF00B8" /></Box>
                                        <Box className={classes.textCard}>
                                            <Box><Typography className={classes.topic}>Deployments</Typography></Box>
                                            <Box><Typography className={classes.description}>Lorem ipsum dolor sit amet consectetur adipiscing elit</Typography></Box>
                                        </Box>
                                    </CardContent>
                                </Card>
                            </Box>
                            <Box className={classes.row}>
                                <Card style={{ border: "none", boxShadow: "none" }}>
                                    <CardContent className={classes.column}>
                                        <Box className={classes.logoTextWrapper} ><FaPoll color="#FF00B8" /></Box>
                                        <Box className={classes.textCard}>
                                            <Box><Typography className={classes.topic}>Projects</Typography></Box>
                                            <Box><Typography className={classes.description}>Lorem ipsum dolor sit amet consectetur adipiscing elit</Typography></Box>
                                        </Box>
                                    </CardContent>
                                </Card>
                                <Card style={{ border: "none", boxShadow: "none" }}>
                                    <CardContent className={classes.column}>
                                        <Box className={classes.logoTextWrapper} ><FaRss color="#FF00B8" /></Box>
                                        <Box className={classes.textCard}>
                                            <Box><Typography className={classes.topic}>Published</Typography></Box>
                                            <Box><Typography className={classes.description}>Lorem ipsum dolor sit amet consectetur adipiscing elit</Typography></Box>
                                        </Box>
                                    </CardContent>
                                </Card>
                            </Box>
                        </Box>

                    </Grid>

                    <Grid item xs={12} sm={12} md={4} style={{ display: "flex", justifyContent: "center" }}>
                        <Box className={classes.introImageWrapper}>
                            <img src={introImage} alt='introImage' className={classes.introImage} />
                        </Box>

                    </Grid>
                </Grid>

            </Box>

        </>
    )
}

export default IntroStartup
