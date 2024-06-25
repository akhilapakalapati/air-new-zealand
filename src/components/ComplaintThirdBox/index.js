import { Link } from 'react-router-dom'
import './index.css';

const ComplaintThirdBox = (props)=>{
    const {thirdBoxList, mainHideBox}=props;
    const {text}=thirdBoxList;

    const subMainHideBox=()=>{
        mainHideBox(true)
    }


    return(

    <div className='maincomplaint-style'>
        <p className='para-complaintThirdBox'>{text}</p>
        <button className='btn-maincomplaint'  onClick={subMainHideBox}>Select</button>
    </div>
    )
}

export default ComplaintThirdBox;