import { Link } from 'react-router-dom'
import FormContainer from '../FormContainer'
import './index.css'

// complaint box

const ComplimentTop=()=>(
    <div className='Complainttop-conatiner'>
        <div>
            <img src="https://t3.ftcdn.net/jpg/04/48/26/04/360_F_448260495_cOP5mWiuYSJQo4sBZvbNUqS4EjSiwPm1.jpg" alt="thumbsup-logo" className="thumbsup-logo-cf"/>
            <p className='complaintTop-para-1'>Leave a compliment</p>
        </div>
        <Link to="/">
        <button className='complainttop-btn'>Change</button>
        </Link>
    </div>
)




const ComplimentFile =()=>{
    return(
        <div className='complimentFile-main-container'>
            <h1>Help and support</h1>
            <h2>What are you looking to do?</h2>
            <div><ComplimentTop/></div>
            <div><FormContainer/></div>
        </div>
    )
}

export default ComplimentFile;