import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Box } from '@material-ui/core';
import IntroStartup from '../../components/startups/IntroStartup.component'
import PricingStartup from '../../components/startups/PricingStartup.component'
import Subscribe from '../../components/startups/Subscribe.component'
import Testimonial from '../../components/startups/Testimonial.component'
import Sponsor from '../../components/startups/Sponsor.component'


const useStyles = makeStyles((theme) => ({

    hero: {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1552581234-26160f608093?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80')`,
        height: '80vh',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fff',
    },
    header: {
        fontFamily: 'Red Hat Display',
        fontSize: "5rem",
        fontWeight: "bold",
        letterSpacing: "4px",
        lineHeight: 2,
        [theme.breakpoints.down('sm')]: {
            fontSize: "4rem",
        },
    },

}));


const StartupProjectPage = () => {
    const classes = useStyles();
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            {/* Hero */}
            <Box className={classes.hero}>
                <Typography className={classes.header}>Startup</Typography>
            </Box>
            <section>
                <IntroStartup />
            </section>
            <section style={{ background: "#f4f6f7" }}>
                <PricingStartup />
            </section>

            <section>
                <Subscribe />
            </section>

            <section>
                <Testimonial />
            </section>

            <section style={{ background: "#f4f6f7", borderBottomLeftRadius: "20px", borderBottomRightRadius: "20px" }}>
                <Sponsor />
            </section>
        </>
    )
}

export default StartupProjectPage
