import React, { useState } from 'react';
import { ThreeDots } from 'react-loader-spinner';
import "./index.css"

const FormContainer =()=>{

    const [title, setTitle] = useState('');
    const [titleTouched, setTitleTouched] = useState(false);


    const [firstName, setFirstName] = useState('');
    const [firstNameTouched, setFirstNameTouched] = useState(false);


    const [familyName,setFamilyName]=useState('')

    const [emailAddress,setEmailAddress] =useState('')
    const [text, setText] = useState('');
    const [response, setResponse] = useState('');
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);




    const handleChangeText = (event) => {
        setText(event.target.value);
      };


    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };

  const handleChange = (event) => {
    setFirstName(event.target.value);
    setFirstNameTouched(true);
  };

  const handleChangeFamily=(event)=>{
    setFamilyName(event.target.value)
  }

  const handleChangeEmail=(event)=>{
    setEmailAddress(event.target.value)
  }



  const handleResponseChange = (event) => {
      setResponse(event.target.value);
  }


  const ErrorMsg=()=>(
    <p>Please fill out all required fields.</p>
  )


  const submitForm = async event => {
    event.preventDefault()

    console.log("button working")

    setLoading(true);
        try {
            const response = await fetch('https://your-api-endpoint.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    title,
                    firstName,
                    familyName,
                    emailAddress,
                    text,
                    response
                }),
            });
            if (!response.ok) {
                throw new Error('Failed to submit form');
            }
            // Reset form after successful submission
            setTitle('');
            setFirstName('');
            setFamilyName('');
            setEmailAddress('');
            setText('');
            setResponse('');
            setError(null);
            setLoading(false);
            alert('Form submitted successfully!');
        } catch (error) {
            setError(error.message);
            setLoading(false);
        }

  }

  const FormDetails=()=>(<div>
    <form className="form-container" onSubmit={submitForm}>
        <h1>Enter your details</h1>
        <label htmlFor="title" className='label-style'>Title</label>
  <select id="title" value={title} onChange={handleTitleChange} className='title-input-style'>
    <option value="">Select</option>
    <option value="Mr">Mr</option>
    <option value="Mrs">Mrs</option>
    <option value="Miss">Miss</option>
  </select>
        <div className="name-container">
            <div className='first-name-container'>
        <label htmlFor="firstName" className='label-style'>First Name</label>
            <input
                type="text"
                id="firstName"
                value={firstName}
                onBlur={handleChange}
            />
            {firstNameTouched && firstName.trim() === '' && <ErrorMsg/>}


            </div>
            <div className='first-name-container'>
            <label htmlFor="firstName" className='label-style'>Family Name</label>
            <input
                type="text"
                id="FamilyName"
                value={familyName}
                onChange={handleChangeFamily}
            />
            </div>

        </div>
        <div className='first-name-container'>
            <label htmlFor="emailAddress" className='label-style'>Email address</label>
            <input
                type="text"
                id="emailAddress"
                value={emailAddress}
                onChange={handleChangeEmail}
                className='email-style'
            />
            </div>

      <h1>Support details</h1>
      <p>Your question or feedback</p>
      <textarea  rows="11" cols="50" className='text-style' value={text}
    onChange={handleChangeText} placeholder='Tell us about your great expreience and include information such
      as the staff members nameor teamyou deault with ariport it applies to and any other relevant details.'></textarea>
      <div>
        <p>Would you like a response?</p>
         <label>
    <input
      type="radio"
      name="response"
      value="yes"
      checked={response === "yes"}
      onChange={handleResponseChange}
    />
    Yes
  </label>
  <label>
    <input
      type="radio"
      name="response"
      value="no"
      checked={response === "no"}
      onChange={handleResponseChange}
    />
    No
  </label></div>
      <button type="submit" className="submit-button">
        submit
      </button>
    </form>
</div>)


const renderLoader = () => (
    <div className="products-loader-container">
        <ThreeDots color="#0b69ff" height="50" width="50" />
    </div>
)



    return(
    <>{ loading ? renderLoader() : FormDetails() }</>
)

}

export default FormContainer