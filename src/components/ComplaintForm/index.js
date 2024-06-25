import React, { useState } from 'react';
import { ThreeDots } from 'react-loader-spinner';
import "./index.css";

const countries = [
    { name: 'New Zealand', code: '+64' },
    { name: 'United States', code: '+1' },
    { name: 'United Kingdom', code: '+44' },
    { name: 'Australia', code: '+61' },
    { name: 'Canada', code: '+1' },
    { name: 'India', code: '+91' },
    { name: 'Germany', code: '+49' },
    { name: 'France', code: '+33' },
    { name: 'China', code: '+86' },
    { name: 'Japan', code: '+81' },
    { name: 'Brazil', code: '+55' },
    { name: 'South Africa', code: '+27' },
    { name: 'Russia', code: '+7' },
    { name: 'Mexico', code: '+52' },
    { name: 'Italy', code: '+39' },
    { name: 'Spain', code: '+34' },
    { name: 'Netherlands', code: '+31' },
    { name: 'Belgium', code: '+32' },
    { name: 'Switzerland', code: '+41' },
    { name: 'Sweden', code: '+46' },
    { name: 'Norway', code: '+47' },
    { name: 'Denmark', code: '+45' },
    { name: 'Finland', code: '+358' },
    { name: 'Ireland', code: '+353' },
    { name: 'Portugal', code: '+351' },
    { name: 'Greece', code: '+30' },
    { name: 'Turkey', code: '+90' },
    { name: 'Saudi Arabia', code: '+966' },
    { name: 'South Korea', code: '+82' },
    { name: 'Singapore', code: '+65' },
    { name: 'Malaysia', code: '+60' },
    { name: 'Philippines', code: '+63' },
    { name: 'Thailand', code: '+66' },
    { name: 'Indonesia', code: '+62' },
    { name: 'Vietnam', code: '+84' },
    { name: 'Pakistan', code: '+92' },
    { name: 'Bangladesh', code: '+880' },
    { name: 'Nigeria', code: '+234' },
    { name: 'Egypt', code: '+20' },
    { name: 'Argentina', code: '+54' },
    { name: 'Chile', code: '+56' },
    { name: 'Colombia', code: '+57' },
    { name: 'Peru', code: '+51' },
    { name: 'Venezuela', code: '+58' },
    { name: 'Poland', code: '+48' },
    { name: 'Austria', code: '+43' },
    { name: 'Israel', code: '+972' },
    { name: 'Czech Republic', code: '+420' },
    { name: 'Hungary', code: '+36' },
    { name: 'Romania', code: '+40' },
    { name: 'New Caledonia', code: '+687' },
    { name: 'Fiji', code: '+679' },
    { name: 'Papua New Guinea', code: '+675' },
    { name: 'Solomon Islands', code: '+677' },
    { name: 'Vanuatu', code: '+678' },
    // Can add countries as needed
];

const ComplaintForm = () => {
    const [title, setTitle] = useState('');
    const [titleTouched, setTitleTouched] = useState(false);

    const [firstName, setFirstName] = useState('');
    const [firstNameTouched, setFirstNameTouched] = useState(false);

    const [familyName, setFamilyName] = useState('');

    const [email, setEmail] = useState('');
    const [selectedCountry, setSelectedCountry] = useState('+64');
    const [contact, setContact] = useState('');

    const [feedbackMessage, setFeedbackMessage] = useState('');
    const [response, setResponse] = useState('');
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
        setTitleTouched(true);
    };

    const handleFirstNameChange = (event) => {
        setFirstName(event.target.value);
        setFirstNameTouched(true);
    };

    const handleFamilyNameChange = (event) => {
        setFamilyName(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleCountryChange = (event) => {
        setSelectedCountry(event.target.value);
    };

    const handlePhoneNumberChange = (event) => {
        setContact(event.target.value);
    };

    const handleFeedbackChange = (event) => {
        setFeedbackMessage(event.target.value);
    };

    const handleResponseChange = (event) => {
        setResponse(event.target.value);
    };

    const submitForm = async (event) => {
        event.preventDefault();

        // Basic validation
        if (!title || !firstName || !email || !contact || !feedbackMessage) {
            setError('Please fill out all required fields.');
            return;
        }

        setLoading(true);
        setError(null);

        try {
            const response = await fetch('http://localhost:8080/v1/api/complaints', { // Updated to match your Swagger endpoint
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    title,
                    firstName,
                    familyName,
                    email,
                    selectedCountry,
                    contact,
                    feedbackMessage,
                }),
            });

            if (!response.ok) {
                throw new Error('Failed to submit form');
            }

            // Reset form after successful submission
            setTitle('');
            setFirstName('');
            setFamilyName('');
            setEmail('');
            setContact('');
            setFeedbackMessage('');
            setResponse('');
            setLoading(false);
            alert('Form submitted successfully!');
        } catch (error) {
            setError(error.message);
            setLoading(false);
        }
    };

    const renderLoader = () => (
        <div className="products-loader-container">
            <ThreeDots color="#0b69ff" height="50" width="50" />
        </div>
    );

    const ErrorMsg = ({ message }) => (
      <p className="error-message">{message}</p>
  );

    const renderForm = () => (
        <div>
            <form className="form-container" onSubmit={submitForm}>
                <h1>Enter your details</h1>
                <label htmlFor="title" className='label-style'>Title</label>
                <select id="title" value={title} onChange={handleTitleChange} className='title-input-style'>
                    <option value="">Select</option>
                    <option value="Mr">Mr</option>
                    <option value="Mrs">Mrs</option>
                    <option value="Miss">Miss</option>
                </select>
                {titleTouched && title.trim() === '' && <ErrorMsg />}
                <div className="name-container">
                    <div className='first-name-container'>
                        <label htmlFor="firstName" className='label-style'>First Name</label>
                        <input
                            type="text"
                            id="firstName"
                            value={firstName}
                            onChange={handleFirstNameChange}
                        />
                        {firstNameTouched && firstName.trim() === '' && <ErrorMsg />}
                    </div>
                    <div className='first-name-container'>
                        <label htmlFor="familyName" className='label-style'>Family Name</label>
                        <input
                            type="text"
                            id="familyName"
                            value={familyName}
                            onChange={handleFamilyNameChange}
                        />
                    </div>
                </div>
                <div className='first-name-container'>
                    <label htmlFor="emailAddress" className='label-style'>Email address</label>
                    <input
                        type="text"
                        id="emailAddress"
                        value={email}
                        onChange={handleEmailChange}
                        className='email-style'
                    />
                </div>
                <div className="phone-number-input">
                    <label htmlFor="phone-number">Phone number</label>
                    <div className="phone-number-container">
                        <select
                            value={selectedCountry}
                            onChange={handleCountryChange}
                            className="country-code-dropdown"
                        >
                            {countries.map((country) => (
                                <option key={country.code} value={country.code}>
                                    {country.name} {country.code}
                                </option>
                            ))}
                        </select>
                        <input
                            type="text"
                            value={contact}
                            onChange={handlePhoneNumberChange}
                            placeholder="Enter phone number"
                            className="phone-number-input-field"
                        />
                    </div>
                </div>
                <h1>Support details</h1>
                <p>Your question or feedback</p>
                <textarea
                    rows="11"
                    cols="50"
                    className='text-style'
                    value={feedbackMessage}
                    onChange={handleFeedbackChange}
                    placeholder='Tell us about your great experience and include information such as the staff member’s name or team you dealt with, airport it applies to, and any other relevant details.'
                ></textarea>
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
                    </label>
                </div>
                <button type="submit" className="submit-button">
                    Submit
                </button>
                {error && <p className="error-message">{error}</p>}
            </form>
        </div>
    );

    return (
        <>{loading ? renderLoader() : renderForm()}</>
    );
};

export default ComplaintForm;
