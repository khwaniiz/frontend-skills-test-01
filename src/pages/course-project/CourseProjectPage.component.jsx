import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Box } from '@material-ui/core';
import { BsFillPeopleFill, BsGraphUp } from "react-icons/bs";
import landingImage from '../../assets/blockchain.jpg'
import Topics from '../../components/courses/Topics.component'
import About from '../../components/courses/About.component'
import PricingCourse from '../../components/courses/PricingCourse.component'
import Team from '../../components/courses/Team.component'
import FreeTrial from '../../components/courses/FreeTrial.component'
import Contact from '../../components/courses/Contact.component'

const useStyles = makeStyles((theme) => ({

    hero: {
        display: "flex",
        justifyContent: "space-around",
        [theme.breakpoints.down('sm')]: {
            flexDirection: "column",
            justifyContent: "center",

        },
    },
    imageContainer: {
        width: "100%"

    },
    image: {
        width: "500px",
        height: "500px",
        verticalAlign: "middle",
        borderStyle: "none",
        [theme.breakpoints.down('sm')]: {
            width: "300px",
            height: "300px",
            alignSelf: "center"

        },
    },
    header: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignContent: "center",
        padding: "2rem"
    },
    title: {
        fontFamily: 'Red Hat Display',
        fontSize: "4rem",
        fontWeight: "bold",
        color: "#151371",
        lineHeight: 1.3,
        [theme.breakpoints.down('xs')]: {
            fontSize: "3rem",
            textAlign: "left"

        },
    },
    subTitle: {
        fontFamily: 'Red Hat Display',
        fontSize: "1.5rem",
        color: "#676565",
        [theme.breakpoints.down('xs')]: {
            fontSize: "1rem",
            textAlign: "left"

        },
    },
    iconContainer: {
        display: "flex",
        marginTop: "1rem",
        marginRight: "1rem",

    },
    logoTextWrapper: {
        fontSize: "3.5rem",
        marginRight: "1rem",
        [theme.breakpoints.down('xs')]: {
            fontSize: "2rem",
            marginRight: "1rem",
        },

    },
    textCard: {
        display: "flex",
        alignItems: "center",
        [theme.breakpoints.down('sm')]: {
            textAlign: "center"
        },

    },
    topic: {
        fontFamily: 'Red Hat Display',
        fontSize: "1rem",
        fontWeight: "700",
        color: "#151371",
        marginRight: "1rem"

    },

}));


const CourseProjectPage = () => {
    const classes = useStyles();
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            {/* Hero */}
            <Box className={classes.hero}>
                <Box className={classes.header}>
                    <Typography className={classes.title}>Into Blockchain Course</Typography>
                    <Typography className={classes.subTitle}>blockchain, cryptocurrency fundamentals</Typography>
                    <Box className={classes.iconContainer}>
                        <Box className={classes.logoTextWrapper} ><BsGraphUp color="#FF00B8" /></Box>
                        <Box className={classes.textCard}>
                            <Box><Typography className={classes.topic}>Connected</Typography></Box>
                        </Box>
                        <Box className={classes.logoTextWrapper} ><BsFillPeopleFill color="#FF00B8" /></Box>
                        <Box className={classes.textCard}>
                            <Box><Typography className={classes.topic}>Startup</Typography></Box>
                        </Box>
                    </Box>
                </Box>

                <img src={landingImage} alt='girl' className={classes.image} />

            </Box>
            <section>

            </section>

            <section style={{ background: "#f4f6f7" }}>
                <Topics />
            </section>

            <section>
                <About />
            </section>

            <section style={{ background: "#f4f6f7" }}>
                <PricingCourse />
            </section>

            <section>
                <Team />
            </section>

            <section style={{ background: "#f4f6f7" }}>
                <FreeTrial />
            </section>

            <section>
                <Contact />
            </section>
        </>
    )
}

export default CourseProjectPage
