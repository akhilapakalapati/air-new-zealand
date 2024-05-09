import './index.css'
import {Link} from 'react-router-dom'

const Navbar = () => (
    <>
    <Link to="/" className="link-conatiner">
      <div  className="nav-conatiner">
        <img src="https://static.brandirectory.com/logos/aned001_nz_airnz1.png" alt="logo" className="logo-style"/>
        <Link to="/" className="para-container-nav">
            <h1 className='para-nav'>Sign in</h1>
        </Link>
      </div>
    </Link>

    </>
  )

  export default Navbar