import { Link } from 'react-router-dom';
import './index.css'


const ComplaintBox = (props) =>{

    const {ComplaintBoxListDetails}=props;
    const {id,url,text,pathname}=ComplaintBoxListDetails;


    return(
        <Link to={pathname} className="remove-line complaintBox-stying">
    <div>
        <img src={url} alt={id} className='img-complaintBox'/>
        <p>{text}</p>
        <button className='btn-select' >select</button>
    </div>
    </Link>)
}

export default ComplaintBox;