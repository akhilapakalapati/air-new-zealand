import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import ComplaintForm from '../ComplaintForm'
import {ComplaintTop} from '../MakeComplaint';
import './index.css'
import ComplaintThirdBox from '../ComplaintThirdBox';

const baggageList=[{
    id:1,
    text:"Lost baggage",
    pathname:"/air",
},{
    id:2,
    text:"Damaged baggage",
    pathname:"/air",
},{
    id:3,
    text:"Other",
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

    const [showForm, setShowForm] = useState(false);

    const [textdownbox,setTextdownbox] = useState("")


    const mainHideBox=(props) => setShowForm(props)
    const textUpdate=(props) => {
        setTextdownbox(props)
    }

    const downBox=(textdownbox)=>{
        return(<div className='Complainttop-conatiner'>
        <div>
            <p className='complaintTop-para-1'>{textdownbox}</p>
        </div>
        <button className='complainttop-btn' onClick={() => setShowForm(false)}>Change</button>
    </div>)
    }

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
        {!showForm && (<div className='airpoints-box-style'>
            {baggageList.map(items=>(<ComplaintThirdBox thirdBoxList={items} mainHideBox={mainHideBox}
            mainHideBox={(show) => {
                mainHideBox(show);
                textUpdate(items.text); // Update the textdownbox state when an item is clicked
              }}
            key={items.id}/>))}
        </div>) }
        {showForm && <div><div>{downBox(textdownbox)}</div>
            <ComplaintForm/></div>}
    </div>
</div>)

}

export default Baggage