import React from 'react';
import { makeStyles, } from '@material-ui/core/styles';
import { Typography, Box, Grid, } from '@material-ui/core';
import CategoryCard from '../cards/CategoryCard.component'

const category_data = [
    {
        id: 1,
        name: 'engineering',
        alt: 'cogs logo',
        imageUrl: 'https://res.cloudinary.com/dnk89i35i/image/upload/v1618088612/category_logo1_ysr4uy.png',
    },
    {
        id: 2,
        name: 'science',
        alt: 'globe logo',
        imageUrl: 'https://res.cloudinary.com/dnk89i35i/image/upload/v1618088612/category_logo2_mbf9cr.png',
    },
    {
        id: 3,
        name: 'innovation',
        alt: 'hand logo',
        imageUrl: 'https://res.cloudinary.com/dnk89i35i/image/upload/v1618088612/category_logo3_n4uxfq.png',
    },
    {
        id: 4,
        name: 'programming',
        alt: 'cog logo',
        imageUrl: 'https://res.cloudinary.com/dnk89i35i/image/upload/v1618094740/category_logo4_tgz1ph.png',
    },
]

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: 10,
        textAlign: "center"

    }
}));


const Category = () => {

    const classes = useStyles();
    return (
        <>
            <Box style={{ padding: "1rem", marginBottom: '1rem' }}>
                <Box style={{ padding: "1rem", marginBottom: '1rem' }}><Typography variant='h4'>By Category</Typography></Box>
                <Box>

                    <Grid container direction='row' spacing={2} justify='center'>
                        {category_data.map((c) => (
                            <Grid key={c.id} item xs={9} sm={5} md={3} className={classes.paper}>

                                <CategoryCard category={c} />

                            </Grid>
                        ))}

                    </Grid>



                </Box>
            </Box>

        </>
    )
}

export default Category