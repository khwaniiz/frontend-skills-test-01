import React from 'react';
import { Typography, Box, Grid } from '@material-ui/core';
import LearnCard from '../cards/LearnCard.component';


const FeaturedCourses = () => {

    return (
        <>
            <Box style={{ padding: "1rem", marginBottom: '1rem' }}>
                <Box style={{ padding: "1rem", marginBottom: '1rem' }}><Typography variant='h4'>Featured Courses</Typography></Box>
                <Box>

                    <Grid container direction='row' justify='space-around' style={{ gap: 1 }}>
                        <Grid item xs={12} sm={5} md={2} style={{ margin: "1rem 0" }}>
                            <LearnCard />
                        </Grid>
                        <Grid item xs={12} sm={5} md={2} style={{ margin: "1rem 0" }}>
                            <LearnCard />
                        </Grid>
                        <Grid item xs={12} sm={5} md={2} style={{ margin: "1rem 0" }}>
                            <LearnCard />
                        </Grid>
                        <Grid item xs={12} sm={5} md={2} style={{ margin: "1rem 0" }}>
                            <LearnCard />
                        </Grid>
                        <Grid item xs={12} sm={5} md={2} style={{ margin: "1rem 0" }}>
                            <LearnCard />
                        </Grid>


                    </Grid>

                </Box>
            </Box>

        </>
    )
}

export default FeaturedCourses