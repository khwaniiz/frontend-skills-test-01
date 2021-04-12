import React from 'react';
import { Link } from 'react-router-dom'
import './startup-card.styles.css'
import { makeStyles, } from '@material-ui/core/styles';
import { Typography, Box, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    mediaContainer: {
        height: "100%",
        maxHeight: "60px",
        width: "100%",
        padding: ".5rem .5rem 0 .5rem",
        display: "flex",
        justifyContent: "center"
    },
    media: {
        maxWidth: "125px",
        maxHeight: "50px"
    },
    subTitle: {
        textAlign: "start"
    },
    buttonContainer: {
        padding: 0,
        "&:last-child": {
            paddingBottom: 0
        },
        display: "flex",
        marginTop: ".5rem"
    },

    btnPink: {
        ...theme.button,
        background: "linear-gradient(104.61deg, #FF00B8 2.65%, #FF655B 51.83%, #FFC700 100%)"
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
        textAlign: "right"
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


}));

const StartUpCard = ({ featured }) => {
    const classes = useStyles();
    return (
        <>

            <Box className="cardContainer">
                <Box className="inside">
                    <Box className={classes.mediaContainer} >
                        <img src={featured.projectLogo} alt={featured.projectName} className={classes.media} />
                    </Box>
                    <Box className={classes.buttonContainer}>
                        {featured.giveLink === 'yes' ? (<>
                            <Button size="small" className={classes.btnPink}>Give</Button>
                            <Button size="small" className={classes.btnPurple} component={Link} to='/startup-project'>Learn</Button>
                        </>) : (<Button size="small" className={classes.btnPurple}>Learn</Button>)}
                    </Box>
                    <Box className={classes.currentFund}><Typography variant="subtitle1">$83,000/100,000</Typography></Box>
                    <Box className={classes.progressbarContainer}>
                        <Box className={classes.progress}></Box>
                    </Box>
                    <Box className={classes.goal}><Typography className={classes.goalText}>83% Funded</Typography>
                    </Box>
                </Box>

            </Box>

        </>
    )
}

export default StartUpCard