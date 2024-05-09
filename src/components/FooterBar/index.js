import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook,faTwitter, faYoutube, faInstagram} from '@fortawesome/free-brands-svg-icons';
import './index.css'

const FooterBar=()=>(
    <div className='footer-bar-main-container'>
        <img src="https://static.brandirectory.com/logos/aned001_nz_airnz1.png" logo="logo"className='footer-bar-style'/>
        <ul className='main-footerbar-container'>
            <li>
                <a target="_blank" rel='noreferrer' href='https://www.linkedin.com/in/akhila-pakalapati/'>
                    <FontAwesomeIcon icon={faFacebook} color="white"/>
                </a>
            </li>
            <li>
                <a target="_blank" rel='noreferrer' href='https://github.com/akhilapakalapati'>
                    <FontAwesomeIcon icon={faTwitter} color="white"/>
                </a>
            </li>
            <li>
                <a target="_blank" rel='noreferrer' href='https://www.youtube.com/channel/UCja-e11og6pzff7vW0nWHPA'>
                    <FontAwesomeIcon icon={faYoutube} color="white"/>
                </a>
            </li>
            <li>
                <a target="_blank" rel='noreferrer' href='https://www.youtube.com/channel/UCja-e11og6pzff7vW0nWHPA'>
                    <FontAwesomeIcon icon={faInstagram} color="white"/>
                </a>
            </li>
        </ul>
    </div>
)

export default FooterBar;