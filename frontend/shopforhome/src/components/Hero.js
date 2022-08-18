import React from 'react'

const Hero = () => {
  return (
        <div className='hero-container'>
            <div className='hero-holder row'>
                <div className='banner col'>
                    <div className='hero-detail'>
                        <h1>
                            Online Shopping Destination
                        </h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, at sed omnis corporis doloremque possimus velit! Repudiandae nisi odit, aperiam odio ducimus, obcaecati libero et quia tempora excepturi quis alias?</p>
                        <button className='btn btn-outline-dark'>SHOP NOW</button>
                    </div>
                </div>
                <div className='hero-image col'>
                    <img className='main-image' src='https://images.pexels.com/photos/462235/pexels-photo-462235.jpeg?auto=compress&cs=tinysrgb&w=600' alt='main-pic'></img>
                    <img className='small-image' src='https://images.pexels.com/photos/1090638/pexels-photo-1090638.jpeg?auto=compress&cs=tinysrgb&w=600' alt='small-pic'></img>
                    <div className='image-back'></div>
                </div>
            </div>
        </div>
  )
}

export default Hero;