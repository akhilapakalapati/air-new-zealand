import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import {ComplaintTop} from '../MakeComplaint';
import ComplaintThirdBox from '../ComplaintThirdBox';
import ComplaintForm from '../ComplaintForm';
import './index.css';

const airpointsList=[{
    id:1,
    heading:"Airpoints membership",
    pathname:"/airpoints",
},{
    id:2,
    heading:"Airpoints store",
    pathname:"/airpoints",
}]

const AirpointsTop=()=>{



    return(<div className='Complainttop-conatiner'>
    <div>
        <img src="https://static.vecteezy.com/system/resources/previews/005/925/291/non_2x/initial-letter-a-logo-and-wings-symbol-wings-design-element-initial-letter-a-logo-icon-initial-logo-a-silhouette-vector.jpg" alt="thumbsup-logo" className="thumbsup-logo-cf"/>
        <p className='complaintTop-para-1'>Airpoints</p>
    </div>
    <Link to="/MakeComplaint">
    <button className='complainttop-btn'>Change</button>
    </Link>
</div>)
}

const Airpoints=()=>{

    const [showForm, setShowForm] = useState(false);

    const mainHideBox=(props) => setShowForm(props)



    return(<div className='complimentFile-main-container'>
    <h1>Help and support</h1>
    <h2>What are you looking to do?</h2>
    <div>
        <div>
            <ComplaintTop/>
        </div>
        <h2>What is your complaint about?</h2>
        <AirpointsTop/>
        <h2>What help do you need with Airpoints?</h2>
        {!showForm && (<div className='airpoints-box-style'>
            {airpointsList.map(items=>(<ComplaintThirdBox thirdBoxList={items}  mainHideBox={mainHideBox}key={items.id}/>))}
        </div>)}
        {showForm && <div><ComplaintForm/></div>}
    </div>
</div>)

}

export default Airpoints