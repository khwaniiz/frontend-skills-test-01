import React from 'react';
import { Typography, Box, Grid } from '@material-ui/core';
import StartUpCard from '../cards/StartUpCard.component'
const featured_data = [
    {
        id: 1,
        projectName: 'orovault',
        projectDescription: 'changing the way you gold forever',
        projectLogo: 'https://res.cloudinary.com/dnk89i35i/image/upload/v1618029695/RoLogo_hfs7fd.png',
        currentFunding: '83,000/100,000',
        fundingGoal: '83% Funded',
        giveLink: 'no',
        learnLink: 'yes'

    }

]


const UpcomingStartups = () => {
    return (
        <>
            <Box style={{ padding: "1rem", marginBottom: '1rem' }}>
                <Box style={{ padding: "1rem", marginBottom: '1rem' }}><Typography variant='h4'>Upcoming Startups</Typography></Box>
                <Box>

                    <Grid container direction='row' justify='space-around' style={{ gap: 1 }}>
                        {featured_data.map((f, idx) => (
                            <Grid key={idx} item xs={12} sm={5} md={2} style={{ margin: "1rem 0" }}>
                                <StartUpCard featured={f} />

                            </Grid>
                        ))}
                        {featured_data.map((f, idx) => (
                            <Grid key={idx} item xs={12} sm={5} md={2} style={{ margin: "1rem 0" }}>
                                <StartUpCard featured={f} />

                            </Grid>
                        ))}
                        {featured_data.map((f, idx) => (
                            <Grid key={idx} item xs={12} sm={5} md={2} style={{ margin: "1rem 0" }}>
                                <StartUpCard featured={f} />

                            </Grid>
                        ))}
                        {featured_data.map((f, idx) => (
                            <Grid key={idx} item xs={12} sm={5} md={2} style={{ margin: "1rem 0" }}>
                                <StartUpCard featured={f} />

                            </Grid>
                        ))}
                        {featured_data.map((f, idx) => (
                            <Grid key={idx} item xs={12} sm={5} md={2} style={{ margin: "1rem 0" }}>
                                <StartUpCard featured={f} />

                            </Grid>
                        ))}
                    </Grid>

                </Box>
            </Box>

        </>
    )
}

export default UpcomingStartups