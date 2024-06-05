import { Link } from 'react-router-dom'
import './index.css';

const ComplaintThirdBox = (props)=>{
    const {thirdBoxList, mainHideBox}=props;
    const {heading,pathname}=thirdBoxList;

    const subMainHideBox=()=>{
        mainHideBox(true)
    }


    return(
        <Link to={pathname} className="remove-line">

    <div className='maincomplaint-style'>
        <p className='para-complaintThirdBox'>{heading}</p>
        <button className='btn-maincomplaint'  onClick={subMainHideBox}>Select</button>
    </div>
    </Link>
    )
}

export default ComplaintThirdBox;