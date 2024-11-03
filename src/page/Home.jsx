import React from 'react'
import Hero from './Hero'
import Product from './Product'
import Banner from './Banner'
import Banner2 from './Banner2'
import Banner3 from './Banner3'

function Home() {
  return (
    <div className=''>
      <Hero/>
      <Banner/>
      <Product/>
      <Banner2/>
      <Banner3/>
    </div>
  )
}

export default Home
