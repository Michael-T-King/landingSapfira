import React from 'react'
import FirstBlock from './FirstBlock/FirstBlock'
import Basic from './Basic/Basic'
import './Home.scss'
import HowWeWork from './HowWeWork/HowWeWork'
import HowWeDo from './HowWeDo/HowWeDo'
import HomeOrder from './HomeOrder/HomeOrder'
import News from './News/News'

function Home() {
  return (
    <div className='home'>
<FirstBlock/>
<Basic/>
<HowWeWork/>
<HowWeDo/>
<HomeOrder/>
<News/>
    </div>
  )
}

export default Home
