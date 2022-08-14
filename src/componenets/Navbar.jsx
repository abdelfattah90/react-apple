import { NavLink } from 'react-router-dom'
import AppleLogo from '../assets/Apple-logo.png'

const links = [
  { id: 1, name: 'Home', url: '/' },
  { id: 2, name: 'Store', url: 'store' },
  { id: 3, name: 'iPad', url: 'ipad' },
  { id: 4, name: 'iPhone', url: 'iphone' },
  { id: 5, name: 'Watch', url: 'watch' },
  { id: 6, name: 'AirPods', url: 'airpods' },
  { id: 7, name: 'TV & Home', url: 'tv-home' },
  { id: 8, name: 'Only on Apple', url: 'servies' },
  { id: 9, name: 'Accessories', url: 'accessories' },
  { id: 10, name: 'Support', url: 'support' },
]

const Navbar = (link) => {
  return (
    <>
      <nav className='navbar navbar-expand-lg nav-color'>
        <div className='container-fluid'>
          <img
            className='apple-logo d-lg-none'
            src={AppleLogo}
            alt=''
            width='30'
            height='24'
          />

          <i
            className='bi bi-list apple-list d-lg-none'
            data-bs-toggle='collapse'
            data-bs-target='#navbarTogglerApple'
            aria-controls='navbarTogglerApple'
            aria-expanded='false'
            aria-label='Toggle navigation'></i>
          <div className='collapse navbar-collapse' id='navbarTogglerApple'>
            <ul className='navbar-nav nav-apple'>
              <li className='nav-item'>
                <a className='nav-link' href='/'>
                  <img
                    className='d-none d-none d-lg-block'
                    src={AppleLogo}
                    alt='AppleLogo'
                    width='30'
                    height='24'
                  />
                </a>
              </li>

              {links.map((link) => (
                <li key={link.id} className='nav-item'>
                  <NavLink className='nav-link' to={link.url}>
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
