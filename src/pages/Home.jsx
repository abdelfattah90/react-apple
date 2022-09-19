import Navbar from '../componenets/Navbar'
import hero_bts from '../assets/hero_bts.jpg'
import iphone14Pro from '../assets/hero_iphone14pro.jpg'
import iphone14 from '../assets/hero_iphone14.jpg'

const Home = () => {
  return (
    <>
      <Navbar />
      <section className='header text-center p-3'>
        <img src={hero_bts} className='img-fluid' alt='hero_bts' />
        <h1 className='fst-italic fw-bold'>
          Get <span className='supercharged'>supercharged</span> for college
        </h1>
        <h5>Save on Mac or iPad. Plus get a gift card up to $150</h5>
      </section>

      <section className='header2 text-center'>
        <h1 className='text-white fw-bold pt-5'>iPhone 14 Pro</h1>
        <h5 className='text-white'>Pro.Beyond.</h5>
        <img src={iphone14Pro} className='img-fluid' alt='iphone14Pro' />
      </section>

      <section className='header3 text-center '>
        <h1 className='fw-bold pt-5'>iPhone 14</h1>
        <h4 className=''>Big and bigger</h4>
        <p className='text-muted'>iPhone 14 Plus available starting 10.7</p>
        <img src={iphone14} className='img-fluid' alt='iphone14' />
      </section>
    </>
  )
}

export default Home
