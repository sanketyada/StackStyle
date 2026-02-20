import React from 'react'
import Hero from '../components/section/Home/Hero'
import LatestCollection from '../components/section/Home/LatestCollection'
import BestSeller from '../components/section/Home/BestSeller'
import OurPolicy from '../components/section/Home/OurPolicy'
import NewsLetterBox from '../components/section/Home/NewsLetterBox'

function Home() {
  return (
    <div>
      <Hero/>
      <LatestCollection/>
      <BestSeller/>
      <OurPolicy/>
      <NewsLetterBox/>
    </div>
  )
}

export default Home
