import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import {ComplaintTop} from '../MakeComplaint';
import './index.css'
import ComplaintBoxInside from '../ComplaintBoxInside'

const atTheAirportList=[{
    id:1,
    text:"Airpoints membership",
    pathname:"/at-the-airport",
    url:"https://t4.ftcdn.net/jpg/05/28/69/29/360_F_528692947_a24JXuek0FtFN2GVUwf0vNvBHltKbGkC.jpg",
},{
    id:2,
    text:"Airpoints store",
    pathname:"/at-the-airport",
    url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2BfK23cuEQlYG4Ei0d-H5OdkfH6j8ttw-ocSrGQ-g7NJ3u9AJIeKfBYyw9DO60vMj-CA&usqp=CAU",
}]

const AtTheAirportTop=()=>{
    return(<div className='Complainttop-conatiner'>
    <div>
        <img src="https://static.vecteezy.com/system/resources/previews/008/326/114/non_2x/real-estate-building-logo-icon-design-free-vector.jpg" alt="thumbsup-logo" className="thumbsup-logo-cf"/>
        <p className='complaintTop-para-1'>At the airport</p>
    </div>
    <Link to="/MakeComplaint">
    <button className='complainttop-btn'>Change</button>
    </Link>
</div>)
}

const AtTheAirport=()=>{

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
        <AtTheAirportTop/>
        <h2>What help do you need with Airpoints?</h2>
        {!showForm && (<div className='airpoints-box-style'>
            {atTheAirportList.map(items=>(<ComplaintBoxInside ComplaintBoxListDetails={items} mainHideBox={mainHideBox} key={items.id}/>))}
        </div>)}
    </div>
</div>)

}

export default AtTheAirport;