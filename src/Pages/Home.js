import React from 'react'
import Layouts from '../Components/Layouts'
import HomeBanner from '../Components/Home/HomeBanner'
import Popular from '../Components/Home/Popular'
import Top from '../Components/Home/Top'

function Home() {
  return (
    <div>
      <Layouts >
        <div className="container mx-auto min-h-screen px-2 mb-6">
          <HomeBanner />
          <Popular />
          <Top />
        </div>
      </Layouts>
      
    </div>
  )
}

export default Home
