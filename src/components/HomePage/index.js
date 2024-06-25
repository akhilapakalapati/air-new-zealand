import './index.css'
import MainComplaintBox from '../MainComplaintBox'
import {faThumbsDown,faThumbsUp,faQuestion} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';



//list

const maincomplaintList=[
  { id:1,
    pathname:"MakeComplaint",
    logo:"https://media.istockphoto.com/id/1316208739/vector/red-thumb-down-icon-isolated-on-white-background-dislike-button-social-media-icon-vector.jpg?s=612x612&w=0&k=20&c=4SA8ATamhjLQIF1l3MUhz4-LSyPCJ77mf19PtiGLVK8=",
head:"Make a complaint",
para:"I had a bad experience"},
{
  id:2,
  pathname:"complaint-file",
  logo:"https://t3.ftcdn.net/jpg/04/48/26/04/360_F_448260495_cOP5mWiuYSJQo4sBZvbNUqS4EjSiwPm1.jpg",
  head:"Leave a compliment",
  para:"I had a great experience"
},
{
  id:3,
  pathname:"air-question",
  logo:"https://img.freepik.com/premium-vector/free-vector-question-mark-icon_901408-624.jpg",
  head:"Ask a question",
  para:"I have a general question to ask"
}
]



//sign-box

const SignBox=()=>(
  <div className='signbox-container'>
  <div>
    <h2 className='heading-1'>Sign in with your Airpoints account</h2>
    <p>This will pre-fill necessary details and helps us to assist you faster.</p>
  </div>
  <Link to="/sign-in-form">
  <button className='sign-btn'>sign in</button>
  </Link>
  </div>
)

//HomePage

const HomePage = () => {
  return (
    <>
      <div className='homepage-container'>
        <p className='para-top-home'>Help and contact</p>
        <hr className='line-style'/>
        <div className='home-main-conatiner'>
          <h1 className='heading'>Help and support</h1>
          <h1>What are you looking to do?</h1>
          <div><SignBox/></div>
          <div className='home-maincomplaintList-container'>{maincomplaintList.map(items=><MainComplaintBox maincomplaintListDetails={items} key={items.id}/>)}</div>
        </div>
      </div>
    </>
  )
}

export default HomePage