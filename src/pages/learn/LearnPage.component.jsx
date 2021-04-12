import React, { useEffect } from 'react';
import Hero from '../../components/hero/Hero.component'
import MyCourses from '../../components/my-courses/MyCourses.component'
import FeaturedCourses from '../../components/featured-courses/FeaturedCourses.component'
import Category from '../../components/category/Category.component'
const learn = {
    title: 'Learn high in',
    subTitle: 'Demand IT Skills & get crypto',
    note: 'powered by KoinStreet',
    leftImg: 'https://res.cloudinary.com/dnk89i35i/image/upload/v1617937861/whiteglobe_l7notw.png',
    middleImg: 'https://res.cloudinary.com/dnk89i35i/image/upload/v1618041483/butterfly_tnpzhk.png',
    rightImg: 'https://res.cloudinary.com/dnk89i35i/image/upload/v1617987709/femalemale_gm03f5.png',
    altMiddle: 'butterfly',
    altLeft: 'globe',
    altRight: 'femaleMale'
}

const LearnPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <>
            <Hero {...learn} />
            <MyCourses />
            <FeaturedCourses />
            <Category />
        </>
    )
}

export default LearnPage