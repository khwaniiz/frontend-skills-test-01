import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { IconButton } from '@material-ui/core';
import { FaAngleUp } from "react-icons/fa";

const useStyles = makeStyles((theme) => ({
    toTop: {
        zIndex: 2,
        position: 'fixed',
        bottom: '2vh',
        backgroundColor: "#fff",
        color: "#151371",
        boxShadow: "0 3px 6px 0 rgb(0 0 0 / 16%)",
        "&:hover, &.Mui-focusVisible": {
            transition: '0.3s',
            color: "#fff",
            backgroundColor: "#151371",
        },
        [theme.breakpoints.up('xs')]: {
            right: '5%',
            backgroundColor: "#fff",
        },
        [theme.breakpoints.up('lg')]: {
            right: '6.5%',
        },
    }
})
)

const ScrollUp = ({ showBelow, }) => {

    const classes = useStyles();

    const [show, setShow] = useState(showBelow ? false : true)

    const handleScroll = () => {
        if (window.pageYOffset > showBelow) {
            if (!show) setShow(true)
        } else {
            if (show) setShow(false)
        }
    }

    const handleClick = () => {
        window[`scrollTo`]({ top: 0, behavior: `smooth` })
    }

    useEffect(() => {
        if (showBelow) {
            window.addEventListener(`scroll`, handleScroll)
            return () => window.removeEventListener(`scroll`, handleScroll)
        }
    })

    return (
        <div>
            {show &&
                <IconButton onClick={handleClick} className={classes.toTop} aria-label="to top" component="span">
                    <FaAngleUp />
                </IconButton>
            }
        </div>
    )
}
export default ScrollUp