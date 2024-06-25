import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import {ComplaintTop} from '../MakeComplaint';
import ComplaintForm from '../ComplaintForm';
import './index.css';
import ComplaintBoxInside from '../ComplaintBoxInside';

const atTheAirportList=[{
    id:1,
    text:"I am due to fly",
    pathname:"/bookings-and-airfares",
    url:"https://t4.ftcdn.net/jpg/05/28/69/29/360_F_528692947_a24JXuek0FtFN2GVUwf0vNvBHltKbGkC.jpg",
},{
    id:2,
    text:"I have flown",
    pathname:"/bookings-and-airfares",
    url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2BfK23cuEQlYG4Ei0d-H5OdkfH6j8ttw-ocSrGQ-g7NJ3u9AJIeKfBYyw9DO60vMj-CA&usqp=CAU",
},{
    id:3,
    text:"Not related to a flight",
    pathname:"/bookings-and-airfares",
    url:"https://pngimg.com/d/question_mark_PNG115.png",
}]



const CorporatePolicyTop=()=>{
    return(<div className='Complainttop-conatiner'>
    <div>
        <img src="https://previews.123rf.com/images/yupiramos/yupiramos1704/yupiramos170407874/75621388-documento-de-papel-aislado-icono-vector-ilustraci%C3%B3n-dise%C3%B1o.jpg" alt="thumbsup-logo" className="thumbsup-logo-cf"/>
        <p className='complaintTop-para-1'>Corporate policy</p>
    </div>
    <Link to="/MakeComplaint">
    <button className='complainttop-btn'>Change</button>
    </Link>
</div>)
}

const CorporatePolicy=()=>{

    const [showForm, setShowForm] = useState(false);

    const [textdownbox,setTextdownbox] = useState("")


    const mainHideBox=(props) => setShowForm(props)
    const textUpdate=(props) => {
        setTextdownbox(props)
    }

    const downBox=(text)=>{
        return(<div className='Complainttop-conatiner'>
        <div>
            <p className='complaintTop-para-1'>{text}</p>
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
        <CorporatePolicyTop/>
        <h2>What help do you need with Airpoints?</h2>
        {!showForm && (<div className='airpoints-box-style'>
            {atTheAirportList.map(items=>(<ComplaintBoxInside ComplaintBoxListDetails={items} mainHideBox={mainHideBox} textUpdate={textUpdate} key={items.id}/>))}
        </div>)}
        {showForm && <div><div>{downBox(textdownbox)}</div>
            <ComplaintForm/></div>}
    </div>
</div>)

}

export default CorporatePolicy;