import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Box, Button, TextField, Container } from '@material-ui/core';

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
    buttonContainer: {
        display: "flex",
        justifyContent: "center"
    },

    button: {
        ...theme.button,
        width: "150px",
        margin: "1rem",
        background: "#151371",
        color: "#fff",
        height: "40px",
        padding: "20px 32px",
        top: 5,
        fontWeight: "bold",
        transition: "all .5s ease-in",
        '&:hover': {
            background: "#2c2a7f",
        }
    },
    input: {
        width: "100%",
        height: "50px",
        border: 0,
        borderRadius: "50px",
        backgroundColor: "#fff",
        paddingLeft: "60px",
        paddingRight: "30px",
        fontFamily: 'Red Hat Display',
        fontSize: "1rem",
        marginTop: "0",
        [theme.breakpoints.down('xs')]: {
            width: "100%",
            padding: "0",

        },
    },
}));


const Contact = () => {
    const classes = useStyles();

    return (
        <>

            <Box pt={10} pb={10} mr={5} ml={5}>
                <Box mb={5} style={{ display: "flex", flexDirection: "column", padding: "0 2rem", width: "100%" }}>
                    <Typography className={classes.title}>Get In touch</Typography>
                    <Typography variant='subtitle1' className={classes.subTitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </Typography>

                    <Container component="main" maxWidth="xs">
                        <Box>
                            <form>
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="name"
                                    label="Name"
                                    name="email"
                                    autoComplete="email"
                                    autoFocus
                                    InputProps={{
                                        className: classes.input,
                                    }}
                                />
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="text"
                                    autoComplete="email"
                                    autoFocus
                                    InputProps={{
                                        className: classes.input,
                                    }}
                                />

                                <TextField
                                    id="standard-multiline-static"
                                    label="Your Message"
                                    multiline
                                    required
                                    rows={4}
                                    variant="outlined"
                                    fullWidth
                                    margin="normal"
                                    InputProps={{
                                        className: classes.input,
                                        style: { height: "200px" }
                                    }}
                                />

                                <Box className={classes.buttonContainer}>
                                    <Button
                                        type="submit"
                                        className={classes.button}
                                    >
                                        Submit
                                    </Button></Box>

                            </form>
                        </Box>
                    </Container>

                </Box>
            </Box>

        </>
    )
}

export default Contact
