import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Box, Grid, Button } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    btn: {
        background: 'linear-gradient(104.61deg, #FF00B8 2.65%, #FF655B 51.83%, #FFC700 100%)',
        border: 0,
        borderRadius: 10,
        color: 'white',
        height: 80,
        width: "100%",
        padding: '0 30px',
        textTransform: 'capitalize',
    },
    btnText: {
        fontFamily: 'Red Hat Display',
        fontSize: '1.5rem',
        [theme.breakpoints.down('sm')]: {
            fontSize: "1.25rem"

        },

    }

}));

const AdviseButton = () => {
    const classes = useStyles();

    return (
        <>
            <Box style={{ padding: "0 2rem 3rem 2rem" }}>
                <Grid container direction='row' justify='space-between' spacing={2} >

                    <Grid item xs={12} sm={4} md={4} >
                        <Button className={classes.btn}><Typography className={classes.btnText}>Advise A Startup</Typography></Button>
                    </Grid>
                    <Grid item xs={12} sm={4} md={4} >
                        <Button className={classes.btn}><Typography className={classes.btnText}>Join Minority Ventures Cohort</Typography></Button>
                    </Grid>
                    <Grid item xs={12} sm={4} md={4} >
                        <Button className={classes.btn}><Typography className={classes.btnText}>Help &#60;Code &#47;&#62;</Typography></Button>
                    </Grid>
                </Grid>
                {/* <Button className={classes.btn}><Typography className={classes.btnText}>Advise A Startup</Typography></Button>
                <Button className={classes.btn}><Typography className={classes.btnText}>Join Minority Ventures Cohort</Typography></Button>
                <Button className={classes.btn}><Typography className={classes.btnText}>Help &#60;Code &#47;&#62;</Typography></Button> */}
            </Box>

        </>
    )
}

export default AdviseButton