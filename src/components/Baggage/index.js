import { Link } from 'react-router-dom'
import {ComplaintTop} from '../MakeComplaint';
import './index.css'
import ComplaintThirdBox from '../ComplaintThirdBox';

const baggageList=[{
    id:1,
    heading:"Lost baggage",
    pathname:"/air",
},{
    id:2,
    heading:"Damaged baggage",
    pathname:"/air",
},{
    id:2,
    heading:"Other",
    pathname:"/air",
}]

const BaggageTop=()=>{

    return(<div className='Complainttop-conatiner'>
    <div>
        <img src="https://static.vecteezy.com/system/resources/previews/021/448/258/original/travel-bag-icon-luggage-illustration-symbol-storage-logo-vector.jpg" alt="thumbsup-logo" className="thumbsup-logo-cf"/>
        <p className='complaintTop-para-1'>Airpoints</p>
    </div>
    <Link to="/MakeComplaint">
    <button className='complainttop-btn'>Change</button>
    </Link>
</div>)
}

const Baggage=()=>{

    return(<div className='complimentFile-main-container'>
    <h1>Help and support</h1>
    <h2>What are you looking to do?</h2>
    <div>
        <div>
            <ComplaintTop/>
        </div>
        <h2>What is your complaint about?</h2>
        <BaggageTop/>
        <h2>What help do you need with Airpoints?</h2>
        <div className='airpoints-box-style'>
            {baggageList.map(items=>(<ComplaintThirdBox thirdBoxList={items} key={items.id}/>))}
        </div>
    </div>
</div>)

}

export default Baggage