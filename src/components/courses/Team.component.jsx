import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Box, Grid, Card, CardContent, CardMedia } from '@material-ui/core';
import { FaTwitter, FaGithub, FaReddit } from "react-icons/fa";




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
    cardContainer: {
        display: "flex",
        boxShadow: "0 3px 6px 0 rgb(0 0 0 / 16%)",
        border: "none",
        '&:hover': {
            boxShadow: "0 3px 6px 0 rgb(0 0 0 / 30%)",
        },
        [theme.breakpoints.down('xs')]: {
            flexDirection: "column"
        },
    },
    details: {
        display: "flex",
        flexDirection: "column"
    },
    content: {
        flex: "1 0 auto"
    },
    cover: {
        minWidth: 120,
        height: "auto",
        objectFit: "cover",
        [theme.breakpoints.down('sm')]: {
            width: "100%",
            height: "300px",
        },

    },
    iconContainer: {
        display: "flex",
        alignItems: "center",
    },
    name: {
        fontFamily: 'Red Hat Display',
        fontSize: "1.5rem",
        lineHeight: 2,
    },
    job: {
        lineHeight: -1,
        color: "#676565",
    },
    description: {
        fontFamily: 'Red Hat Display',
        fontSize: "1rem",
        lineHeight: 1,
        letterSpacing: 1,
        margin: "1rem auto 1rem auto"

    }
}));


const Team = () => {
    const classes = useStyles();

    return (
        <>

            <Box pt={10} pb={10} mr={5} ml={5}>
                <Box mb={5} style={{ display: "flex", flexDirection: "column", padding: "0 2rem", width: "100%" }}>
                    <Typography className={classes.title}>Our Team</Typography>
                </Box>
                <Grid container justify='center' spacing={5}>
                    <Grid item xs={12} sm={6}>
                        <Card className={classes.cardContainer} square={true}>
                            <CardMedia
                                className={classes.cover}
                                image="https://minorityprogrammers.com/assets/images/kush.jpg"
                                title="team members"
                            />
                            <Box className={classes.details}>
                                <CardContent className={classes.content}>
                                    <Typography className={classes.name}>
                                        John Doe
                                    </Typography>
                                    <Typography variant="subtitle1" className={classes.job}>
                                        Front-end Developer
                                    </Typography>
                                    <Typography color="textSecondary" className={classes.description}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id
                                        officiis hic tenetur.
                                    </Typography>
                                    <Box className={classes.iconContainer}>
                                        <Box mr={2}><FaGithub style={{ color: "#FF00B8", fontSize: "1.25rem", cursor: "pointer" }} /></Box>
                                        <Box mr={2}><FaTwitter style={{ color: "#151371", fontSize: "1.25rem", cursor: "pointer" }} /></Box>
                                        <Box><FaReddit style={{ color: "#FFC700", fontSize: "1.25rem", cursor: "pointer" }} /></Box>
                                    </Box>
                                </CardContent>
                            </Box>

                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Card className={classes.cardContainer} square={true}>
                            <CardMedia
                                className={classes.cover}
                                image="https://se-infra-cdn-images.azureedge.net/documents/11/5adee849-9037-45e0-da87-08d850ce0b0e/1500.jpg"
                                title="team members"
                            />
                            <Box className={classes.details}>
                                <CardContent className={classes.content}>
                                    <Typography className={classes.name}>
                                        John Doe
                                    </Typography>
                                    <Typography variant="subtitle1" className={classes.job}>
                                        Front-end Developer
                                    </Typography>
                                    <Typography color="textSecondary" className={classes.description}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id
                                        officiis hic tenetur.
                                    </Typography>
                                    <Box className={classes.iconContainer}>
                                        <Box mr={2}><FaGithub style={{ color: "#FF00B8", fontSize: "1.25rem", cursor: "pointer" }} /></Box>
                                        <Box mr={2}><FaTwitter style={{ color: "#151371", fontSize: "1.25rem", cursor: "pointer" }} /></Box>
                                        <Box><FaReddit style={{ color: "#FFC700", fontSize: "1.25rem", cursor: "pointer" }} /></Box>
                                    </Box>
                                </CardContent>

                            </Box>

                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Card className={classes.cardContainer} square={true}>
                            <CardMedia
                                className={classes.cover}
                                image="https://se-infra-cdn-images.azureedge.net/documents/11/5adee849-9037-45e0-da87-08d850ce0b0e/1500.jpg"
                                title="team members"
                            />
                            <Box className={classes.details}>
                                <CardContent className={classes.content}>
                                    <Typography className={classes.name}>
                                        John Doe
                                    </Typography>
                                    <Typography variant="subtitle1" className={classes.job}>
                                        Front-end Developer
                                    </Typography>
                                    <Typography color="textSecondary" className={classes.description}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id
                                        officiis hic tenetur.
                                    </Typography>
                                    <Box className={classes.iconContainer}>
                                        <Box mr={2}><FaGithub style={{ color: "#FF00B8", fontSize: "1.25rem", cursor: "pointer" }} /></Box>
                                        <Box mr={2}><FaTwitter style={{ color: "#151371", fontSize: "1.25rem", cursor: "pointer" }} /></Box>
                                        <Box><FaReddit style={{ color: "#FFC700", fontSize: "1.25rem", cursor: "pointer" }} /></Box>
                                    </Box>
                                </CardContent>

                            </Box>

                        </Card>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <Card className={classes.cardContainer} square={true}>
                            <CardMedia
                                className={classes.cover}
                                image="https://minorityprogrammers.com/assets/images/jack.jpg"
                                title="team members"
                            />
                            <Box className={classes.details}>
                                <CardContent className={classes.content}>
                                    <Typography className={classes.name}>
                                        John Doe
                                    </Typography>
                                    <Typography variant="subtitle1" className={classes.job}>
                                        Front-end Developer
                                    </Typography>
                                    <Typography color="textSecondary" className={classes.description}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id
                                        officiis hic tenetur.
                                    </Typography>
                                    <Box className={classes.iconContainer}>
                                        <Box mr={2}><FaGithub style={{ color: "#FF00B8", fontSize: "1.25rem", cursor: "pointer" }} /></Box>
                                        <Box mr={2}><FaTwitter style={{ color: "#151371", fontSize: "1.25rem", cursor: "pointer" }} /></Box>
                                        <Box><FaReddit style={{ color: "#FFC700", fontSize: "1.25rem", cursor: "pointer" }} /></Box>
                                    </Box>
                                </CardContent>

                            </Box>

                        </Card>
                    </Grid>

                </Grid>
            </Box>

        </>
    )
}

export default Team
