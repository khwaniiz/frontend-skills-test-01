import { createMuiTheme } from '@material-ui/core/styles';

// const gradientPinkYellow = "linear-gradient(104.61deg, #FF00B8 2.65%, #FF655B 51.83%, #FFC700 100%)";

// const gradientPinkPurple = "linear-gradient(161.32deg, #FF00B8 3.86%, #151371 98.64%)";

export default createMuiTheme({
    palette: {
        common: {
            main: "#FFC700"
        },
        primary: {
            main: "#151371",
            contrastText: "#FFC700",

        },
        secondary: {
            main: "#FF00B8"
        }
    },
    typography: {
        h3: {
            fontFamily: 'Red Hat Display',
            color: "#fff",
            fontWeight: "bold",
            fontSize: "2.5rem"
        },
        h4: {
            fontFamily: 'Red Hat Display',
            color: "#151371",
            fontWeight: "bold"
        },
        h5: {
            fontFamily: 'Red Hat Display',
            color: "#151371",
        },
        subtitle1: {
            fontFamily: 'Red Hat Display',
            fontSize: "1rem",
            lineHeight: 1
        },
        title: {
            fontFamily: 'Red Hat Display',
            color: "#151371",
            fontWeight: "bold",
            fontSize: "3rem"
        },

        normal: {
            fontFamily: 'Red Hat Display',
            fontSize: "1.1rem",
            lineHeight: 1,
            color: "#676565",
        }
    },

    button: {
        fontFamily: 'Red Hat Display',
        textTransform: 'uppercase',
        borderRadius: '200px',
        transition: 'all .2s ease',
        color: "#fff",
        width: "100%",
        margin: ".1rem"
    },



})