import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import './index.css';


const MainComplimenttBox=(props)=>{
    const {maincomplaintListDetails}=props;
    const {logo,pathname, head,para}=maincomplaintListDetails;

    return(
        <Link to={pathname} className="remove-line">
    <div className='maincomplaint-style'>
          <img src={logo} alt="img1" className='threelog'/>
          <h3>{head}</h3>
          <p>{para}</p>
          <button className='btn-maincomplaint'>Select</button>
    </div>
    </Link>
    )
}


export default MainComplimenttBox