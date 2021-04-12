import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Box, Grid, } from '@material-ui/core';



const useStyles = makeStyles((theme) => ({
    imageContainer: {
        height: "auto",
        width: "80%",
    },
    image: {
        width: "100%",
        height: "100%",

    }

}));

// https://minorityprogrammers.com/assets/images/ntv.png

const Sponsor = () => {
    const classes = useStyles();

    return (
        <>
            <Box pt={10} pb={10} mr={5} ml={5}>
                <Grid container direction='row' justify='center' spacing={4}>
                    <Grid item xs={6} sm={3}>
                        <Box className={classes.imageContainer}>
                            <img src={'https://minorityprogrammers.com/assets/images/accenture.png'} alt='sponsor' className={classes.image} />
                        </Box>
                    </Grid>
                    <Grid item xs={6} sm={3}>
                        <Box className={classes.imageContainer}>
                            <img src={'https://minorityprogrammers.com/assets/images/cgi.png'} alt='sponsor' className={classes.image} />
                        </Box>
                    </Grid>
                    <Grid item xs={6} sm={3}>
                        <Box className={classes.imageContainer}>
                            <img src={'https://minorityprogrammers.com/assets/images/caotech.png'} alt='sponsor' className={classes.image} />
                        </Box>
                    </Grid>
                    <Grid item xs={6} sm={3}>
                        <Box className={classes.imageContainer}>
                            <img src={'https://minorityprogrammers.com/assets/images/jmucob.png'} alt='sponsor' className={classes.image} />
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default Sponsor
