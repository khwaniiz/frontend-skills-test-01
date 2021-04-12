import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Box, Button, Grid, Card, CardContent } from '@material-ui/core';
import { FaRegCheckCircle } from 'react-icons/fa'


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
    card: {
        maxWidth: "100%",
        marginBottom: '2em',
        position: 'relative',
        height: "30rem",
        boxShadow: "0 3px 6px 0 rgb(0 0 0 / 16%)",
        padding: "24px 20px 50px",
        margin: "2rem auto",
        display: "flex",
        flexDirection: "column",
        transition: "transform 0.2s ease-in",
        '&:hover': {
            transform: "translateY(-15px)"
        }

    },

    topCard: {
        textAlign: "center"
    },
    centerCard: {
        textAlign: "left",
        marginTop: "1rem"
    },
    bottomCard: {
        alignSelf: "center"
    },
    button: {
        ...theme.button,
        padding: "1rem",
        background: "linear-gradient(104.61deg, #FF00B8 2.65%, #FF655B 51.83%, #FFC700 100%)",
        transition: "all 1s ease-in",
        "&:hover": {
            background: "linear-gradient(161.32deg, #FF00B8 3.86%, #151371 98.64%)",
            backgroundClip: "padding-box",

        }

    },
    plan: {
        fontFamily: 'Red Hat Display',
        fontSize: "1.25rem",
        marginBottom: "1rem",
        '&::after': {
            position: "absolute",
            content: '""',
            width: "55px",
            height: "4px",
            bottom: 0,
            left: 0,
            right: 0,
            top: 70,
            backgroundColor: "#2bdbdc",
            margin: "0 auto",
        }
    },
    price: {
        fontFamily: 'Red Hat Display',
        fontSize: "3rem",
        fontWeight: "bold",
        marginBottom: ".5rem",
    },
    year: {
        fontFamily: 'Red Hat Display',
        fontSize: "1rem",
        marginBottom: ".5rem",
        fontWeight: "bold",
    },
    plan3: {
        fontFamily: 'Red Hat Display',
        fontSize: "1.25rem",
        marginBottom: "1rem",
        color: "#FFC700",
        '&::after': {
            position: "absolute",
            content: '""',
            width: "55px",
            height: "4px",
            bottom: 0,
            left: 0,
            right: 0,
            top: 70,
            backgroundColor: "#2bdbdc",
            margin: "0 auto",
        }
    },
    price3: {
        fontFamily: 'Red Hat Display',
        fontSize: "3rem",
        fontWeight: "bold",
        marginBottom: ".5rem",
        color: "#FFC700",
    },
    year3: {
        fontFamily: 'Red Hat Display',
        fontSize: "1rem",
        marginBottom: ".5rem",
        fontWeight: "bold",
        color: "#FFC700",
    },
    icon: {
        marginRight: "1rem",
        color: "#676565",
    },
    centerText: {
        fontFamily: 'Red Hat Display',
        color: "#676565",
        lineHeight: 2.5,
        [theme.breakpoints.down('xs')]: {
            fontSize: ".85rem"
        }
    }



}));


const PricingStartup = () => {
    const classes = useStyles();

    return (
        <>
            <Box pt={10} pb={10} mr={5} ml={5}>
                <Box style={{ display: "flex", flexDirection: "column", padding: "0 2rem", width: "100%" }}>
                    <Typography className={classes.title}>Our Pricing</Typography>
                    <Typography variant='subtitle1' className={classes.subTitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </Typography>
                </Box>
                <Grid container direction='row' justify='space-evenly'>
                    <Grid item xs={12} sm={12} md={4} style={{ display: "flex", justifyContent: "center" }}>
                        <Box>
                            <Card className={classes.card} square={true}>
                                <CardContent className={classes.insideCard}>
                                    <Box className={classes.topCard}>
                                        <Typography color='primary' className={classes.plan}>Basic</Typography>
                                        <Typography color='primary' className={classes.price}>$100</Typography>
                                        <Typography color='primary' className={classes.year}>per year</Typography>
                                    </Box>
                                    <Box className={classes.centerCard}>
                                        <Typography className={classes.centerText}><FaRegCheckCircle className={classes.icon} />Page examples</Typography>
                                        <Typography className={classes.centerText}><FaRegCheckCircle className={classes.icon} />Friendly support team</Typography>
                                        <Typography className={classes.centerText}><FaRegCheckCircle className={classes.icon} />Awesome Support</Typography>
                                        <Typography className={classes.centerText}><FaRegCheckCircle className={classes.icon} />Awesome Support</Typography>
                                    </Box>

                                </CardContent>
                                <CardContent className={classes.bottomCard}>
                                    <Button className={classes.button}><Typography>Get started</Typography></Button>
                                </CardContent>
                            </Card>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} style={{ display: "flex", justifyContent: "center" }}>
                        <Box>
                            <Card className={classes.card} square={true}>
                                <CardContent className={classes.insideCard}>
                                    <Box className={classes.topCard}>
                                        <Typography color='secondary' className={classes.plan}>Pro</Typography>
                                        <Typography color='secondary' className={classes.price}>$200</Typography>
                                        <Typography color='secondary' className={classes.year}>per year</Typography>
                                    </Box>
                                    <Box className={classes.centerCard}>
                                        <Typography className={classes.centerText}><FaRegCheckCircle className={classes.icon} />Page examples</Typography>
                                        <Typography className={classes.centerText}><FaRegCheckCircle className={classes.icon} />Friendly support team</Typography>
                                        <Typography className={classes.centerText}><FaRegCheckCircle className={classes.icon} />Awesome Support</Typography>
                                        <Typography className={classes.centerText}><FaRegCheckCircle className={classes.icon} />Awesome Support</Typography>
                                    </Box>

                                </CardContent>
                                <CardContent className={classes.bottomCard}>
                                    <Button className={classes.button}><Typography>Get started</Typography></Button>
                                </CardContent>
                            </Card>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} style={{ display: "flex", justifyContent: "center" }}>
                        <Box>
                            <Card className={classes.card} square={true}>
                                <CardContent className={classes.insideCard}>
                                    <Box className={classes.topCard}>
                                        <Typography className={classes.plan3}>Enterprise</Typography>
                                        <Typography className={classes.price3}>$300</Typography>
                                        <Typography className={classes.year3}>per year</Typography>
                                    </Box>
                                    <Box className={classes.centerCard}>
                                        <Typography className={classes.centerText}><FaRegCheckCircle className={classes.icon} />Page examples</Typography>
                                        <Typography className={classes.centerText}><FaRegCheckCircle className={classes.icon} />Friendly support team</Typography>
                                        <Typography className={classes.centerText}><FaRegCheckCircle className={classes.icon} />Awesome Support</Typography>
                                        <Typography className={classes.centerText}><FaRegCheckCircle className={classes.icon} />Awesome Support</Typography>
                                    </Box>

                                </CardContent>
                                <CardContent className={classes.bottomCard}>
                                    <Button className={classes.button}><Typography>Get started</Typography></Button>
                                </CardContent>
                            </Card>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default PricingStartup
