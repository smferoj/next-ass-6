 import React from 'react'
import Header from '../components/Header'
import Content from '../components/Content'
import Footer from '../components/Footer'
 
 const Home = () => {
   return (
     <div className='container'>
        <Header title="First React Project"/>
        <Content/>
        <Footer/>
     </div>
   )
 }
 
 export default Home