import { Link } from 'react-router-dom';
import './index.css'


const  ComplaintBoxInside = (props) =>{

    const {ComplaintBoxListDetails,mainHideBox}=props;
    const {id,url,text,pathname}=ComplaintBoxListDetails;

    const subMainHideBox=()=>{
        mainHideBox(true)
    }

    return(
        <Link to={pathname} className="remove-line complaintBox-stying">
    <div>
        <img src={url} alt={id} className='img-complaintBox'/>
        <p>{text}</p>
        <button className='btn-select' onClick={subMainHideBox}>select</button>
    </div>
    </Link>)
}

export default ComplaintBoxInside;