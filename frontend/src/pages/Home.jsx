import React from 'react'
import Hero from '../components/section/Home/Hero'
import LatestCollection from '../components/section/Home/LatestCollection'
import BestSeller from '../components/section/Home/BestSeller'

function Home() {
  return (
    <div>
      <Hero/>
      {/* <LatestCollection/> */}
      <BestSeller/>
    </div>
  )
}

export default Home
