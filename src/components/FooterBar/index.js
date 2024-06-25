import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faYoutube, faInstagram} from '@fortawesome/free-brands-svg-icons';
import './index.css'

const FooterBar=()=>(
    <div className='footer-bar-main-container'>
        <img src="https://static.brandirectory.com/logos/aned001_nz_airnz1.png" logo="logo"className='footer-bar-style'/>
        <ul className='main-footerbar-container'>
            <li className='sub-list-footerbar'>
                <a target="_blank" rel='noreferrer' href='https://www.facebook.com/AirNewZealand'>
                    <FontAwesomeIcon icon={faFacebook} color="white"/>
                </a>
            </li>
            <li className='sub-list-footerbar'>
                <a target="_blank" rel='noreferrer' href='https://twitter.com/flyairnz'>
                    <FontAwesomeIcon icon={faTwitter} color="white"/>
                </a>
            </li>
            <li className='sub-list-footerbar'>
                <a target="_blank" rel='noreferrer' href='https://www.youtube.com/c/airnz'>
                    <FontAwesomeIcon icon={faYoutube} color="white"/>
                </a>
            </li>
            <li className='sub-list-footerbar'>
                <a target="_blank" rel='noreferrer' href='https://www.instagram.com/airnz/'>
                    <FontAwesomeIcon icon={faInstagram} color="white"/>
                </a>
            </li>
        </ul>
        <p>A STAR ALLIANCE MEMBERS</p>
        <p>Copyright <snap className="c-styling"> c </snap> 2024 Air New Zealand Limited</p>
    </div>
)

export default FooterBar;


