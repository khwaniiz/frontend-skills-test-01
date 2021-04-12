import React, { useEffect } from 'react';
import Hero from '../../components/hero/Hero.component'
import FeatureStartUp from '../../components/featured-startup/FeaturedStartUp.component'
import UpcomingStartups from '../../components/upcoming-startups/UpcomingStartups.component'
import AdviseButton from '../../components/advise-button/AdviseButton.component'
import { startup } from './startup.data'

const StartUpPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <>
            <Hero {...startup} />
            <FeatureStartUp />
            <UpcomingStartups />
            <AdviseButton />
        </>
    )
}

export default StartUpPage