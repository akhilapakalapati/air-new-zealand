import './index.css'
import MainComplaintBox from '../MainComplaintBox'
import {faThumbsDown,faThumbsUp,faQuestion} from '@fortawesome/free-solid-svg-icons';



//list 

const maincomplaintList=[
  { id:1,
    pathname:"MakeComplaint",
    logo:faThumbsDown,
head:"Make a complaint",
para:"I had a bad experience"},
{
  id:2,
  pathname:"complaint-file",
  logo:faThumbsUp,
  head:"Leave a compliment",
  para:"I had a great experience"
},
{
  id:3,
  pathname:"",
  logo:faQuestion,
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
  <button className='sign-btn'>sign in</button>
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