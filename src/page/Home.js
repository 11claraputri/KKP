import React, { Component, Fragment } from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Modal from '../components/Modal'


export class Home extends Component {
  render() {
    return (
      <>
        {/* <div>
            <Navbar/>
            
        </div> */}
        <div>
            <Hero/>
        </div>
        
        
      </>
    )
  }
}

export default Home
