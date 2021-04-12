import React from 'react';
import { Link } from 'react-router-dom'
import './startup-card.styles.css'
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Box, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({

    badge: {
        height: "17px",
        width: "50%",
        borderRadius: "20px",
        position: "relative",
        background: "lightgray",
        padding: "0 .2rem",
        marginTop: "-.4rem",
        backgroundColor: "#9CFF83",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginLeft: "auto"
    },

    badgeDot: {
        height: "8px",
        width: "8px",
        borderRadius: "50%",
        backgroundColor: "#00D248"

    },
    badgeText: {
        fontSize: ".75rem",
        fontFamily: 'Red Hat Display',
    },
    textWrapper: {
        textAlign: "left",
        wordWrap: " break-word",
        lineHeight: 1,
        marginBottom: ".5rem"
    },
    header: {
        fontFamily: 'Red Hat Display',
        fontSize: "1.5rem",
        fontWeight: "bold",

    },
    subTitle: {
        fontSize: ".75rem",
        fontFamily: 'Red Hat Display',
        padding: 0
    },
    buttonContainer: {
        padding: 0,
        "&:last-child": {
            paddingBottom: 0
        },
        display: "flex"
    },
    btnPurple: {
        ...theme.button,
        background: "linear-gradient(161.32deg, #FF00B8 3.86%, #151371 98.64%)",

    },
    progressbarContainer: {
        height: "10px",
        width: "100%",
        borderRadius: "20px",
        position: "relative",
        background: "lightgray",
    },
    progress: {
        display: 'block',
        borderRadius: "20px",
        height: "10px",
        width: "80%",
        background: "linear-gradient(104.61deg, #FF00B8 2.65%, #FF655B 51.83%, #FFC700 100%)",
        position: "relative",
    },
    currentFund: {
        marginTop: "1rem",
        textAlign: "right",
    },
    goal: {
        textAlign: "right",

    },
    goalText: {
        fontSize: ".85rem",
        fontFamily: 'Red Hat Display',
    },
    description: {
        textAlign: "left",

    },
    descriptionText: {
        fontSize: ".65rem",
        fontFamily: 'Red Hat Display',

    },

    bottomWrapper: {
        display: "flex",
        flexDirection: "column",
        marginTop: "-.8rem"
    }


}));

const StartUpCard = ({ featured }) => {
    const classes = useStyles();
    return (
        <>

            <Box className="cardContainer">

                <Box className={classes.badgeWrapper}>
                    <Box className={classes.badge}>
                        <Typography className={classes.badgeDot}></Typography>
                        <Typography className={classes.badgeText}>Earn $30</Typography>
                    </Box>
                </Box>
                <Box className={classes.textWrapper}>
                    <Box className={classes.header}>Intro to Blockchain</Box>
                    <Box className={classes.subTitle}>blockchain, cryptocurrency fundamentals</Box>
                </Box>
                <Box className={classes.btnWrapper}>
                    <Button className={classes.btnPurple} component={Link} to='/course-project'>Learn</Button>
                </Box>
                <Box className={classes.bottomWrapper}>
                    <Box className={classes.currentFund}><Typography variant="subtitle1">8.3/10 Modules</Typography></Box>
                    <Box className={classes.progressbarContainer}>
                        <Box className={classes.progress}></Box>
                    </Box>
                    <Box className={classes.goal}><Typography className={classes.goalText}>83% Completed</Typography>
                    </Box>
                </Box>

            </Box>



        </>
    )
}

export default StartUpCard