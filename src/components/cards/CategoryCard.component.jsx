import React from 'react';
import './card.styles.css'
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Box } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    categoryWrapper: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    headerText: {
        textTransform: "capitalize",
        fontSize: "2rem",
        marginBottom: "1rem"
    },
    imageWrapper: {
        maxWidth: "150px",
        height: "160px",
        display: "flex",
        justifyContent: "center",

    },
    image: {
        maxWidth: "100%",
        height: "auto"
    },
    imageHand: {
        maxWidth: "100%",
        height: "186px",
    },

}));

const CategoryCard = ({ category }) => {
    const classes = useStyles();
    return (
        <>

            <Box className="card">
                <Box className={classes.categoryWrapper}>
                    <Box className={classes.headerWrapper}>
                        <Typography variant='h5' className={classes.headerText}>{category.name}</Typography>
                    </Box>
                    <Box className={classes.imageWrapper}>
                        {category.name === 'innovation' ? (<img src={category.imageUrl} alt={category.alt} className={classes.imageHand} />) : <img src={category.imageUrl} alt={category.alt} className={classes.image} />}
                    </Box>
                </Box>
                {category.name === 'innovation' ? (<h1 className='test'><div className='clip'></div></h1>) : ''}
                {category.name === 'programming' ? (<h1 className='test'><div className='clip'></div></h1>) : ''}

            </Box>

            {/* {category.name === 'innovation' ? (<Box className='clipWrapper'><Box className='clip'></Box></Box>) : ''}
            {category.name === 'programming' ? (<Box className='clipWrapper'><h1 className='clip'></h1></Box>) : ''} */}

        </>
    )
}
export default CategoryCard