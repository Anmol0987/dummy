import React from 'react'
import Card from './Card'


const Home = () => {
  return (
    <>
    <div className='flex relative  w-screen items-center justify-evenly h-screen p-5'>

      <div className='flex items-center gap-4 h-full w-full relative '>
        <Card title={"on premies"} />
        <Card title={"Bronze"} />
        <Card title={"Silver"} />
        <Card title={"Gold"} />

      </div>
      
    </div>

  </>
  )
}

export default Home