import Navbar from '../componenets/Navbar'
import hero_bts from '../assets/hero_bts.jpg'

const Home = () => {
  return (
    <>
      <Navbar />
      <br />
      <p>
        Apple Navbar : React, Raect-router-dom and Active Link, Bootstrap ,
        bootstrap-icons
      </p>
      <section className='header1'>
        <div className='header1-headline'>
          <h1 className='headline fst-italic'>
            Get <span className='supercharged'>supercharged</span> for college
          </h1>
          <h5>Save on Mac or iPad. Plus get a gift card up to $150</h5>
        </div>
        <img src={hero_bts} className='img-fluid' alt='hero_bts' />
      </section>
    </>
  )
}

export default Home
