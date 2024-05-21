import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const MainComplimenttBox=(props)=>{
    const {maincomplaintListDetails}=props;
    const {logo,pathname, head,para}=maincomplaintListDetails;

    return(
        <Link to={pathname} className="remove-line">
    <div className='maincomplaint-style'>
          <FontAwesomeIcon icon={logo} />
          <h3>{head}</h3>
          <p>{para}</p>
          <button className='btn-maincomplaint'>Select</button>
    </div>
    </Link>
    )
}


export default MainComplimenttBox