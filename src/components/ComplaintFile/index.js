import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import FormContainer from '../FormContainer'
import './index.css'

// complaint box

const ComplaintTop=()=>(
    <div className='Complainttop-conatiner'>
        <div>
            <img src="https://i.pinimg.com/736x/e5/c4/c1/e5c4c1e94dc8cae5b9cba07d715a6b2d.jpg" alt="thumbsup-logo" className="thumbsup-logo-cf"/>
            <p className='complaintTop-para-1'>Leave a compliment</p>
        </div>
        <Link to="/">
        <button className='complainttop-btn'>Change</button>
        </Link>
    </div>
)




const complaintFile =()=>{
    return(
        <div className='complaintFile-main-container'>
            <h1>Help and support</h1>
            <h2>What are you looking to do?</h2>
            <div><ComplaintTop/></div>
            <div><FormContainer/></div>
        </div>
    )
}

export default complaintFile;