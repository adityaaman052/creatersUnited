import Creators from '@/components/Creators'
import Hero from '@/components/Hero'
import Trending from '@/components/Trending'
import SectionNav from '@/components/SectionNav'
import React from 'react'

const page = () => {
  return (
    <div>
      <SectionNav />
      <section id="hero">
        <Hero/>
      </section>
      <section id="trending">
        <Trending/>
      </section>
      <section id="creators">
        <Creators/>
      </section>
    </div>
  )
}

export default page