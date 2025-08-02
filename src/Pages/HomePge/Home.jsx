import React from 'react'
import MenuHeder from '../../Components/MenuHeder'
import Carousel from './Carousel'
import Container from '../../Components/Container'
import Trends from './Trends'
import MyFeedback from './MyFeedback'
import Recent from './Recent'
import Footer from './Footer'

const Home = () => {
  return (
    <>
      <MenuHeder />
      <Container className="bg-[#1677BD] mt-14 max-w-[1345px] mx-auto rounded-[9px] pb-10 overflow-x-hidden">
        <h1 className="text-3xl text-[#FFFFFF] ml-0 lg:ml-[99px] py-5 mt-[14px]  text-center md:text-start">
          Find the best restaurant ratings below
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4  gap-10 px-4 md:px-4 lg:px-10 py-2   sm:ml-0">
          <Carousel
            title="Bottega"
            des="The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout."
            image="/images/Rating.png"
            ratingTitle="(876 reviews)"
            rating="5.0"
            image1="/images/Bottega.png"
          />

          <Carousel
            title="Bottega"
            des="The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout."
            image="/images/Rating.png"
            ratingTitle="(876 reviews)"
            rating="5.0"
            image1="/images/Bottega1.png"
          />
          <Carousel
            title="Bottega"
            des="The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout."
            image="/images/Rating.png"
            ratingTitle="(876 reviews)"
            rating="5.0"
            image1="/images/Bottega2.png"
          />
          <Carousel
            title="Bottega"
            des="The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout."
            image="/images/Rating.png"
            ratingTitle="(876 reviews)"
            rating="5.0"
            image1="/images/Bottega3.png"
          />
        </div>
      </Container>
        <Trends/>
        <MyFeedback/>
        <Recent/>
        <Footer/>
    </>
  );
}

export default Home