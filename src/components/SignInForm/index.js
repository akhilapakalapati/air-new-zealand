import React from 'react';
import './index.css';

const SignInForm = () => {
  return (
    <div className="signform">
      <h2 className='heading-zealand'>AIR NEW ZEALAND</h2>
      <div className='signform-background'>
        <h1>Sign In</h1>
        <label htmlFor="signformAirpints" className='Airpoints-signform'>Airpoints™ number / username</label>
                    <input
                        type="text"
                        id="signformAirpints"
                        className='inputbox'
                        value={null}
                        onChange={null}
        />
        <div>
      <label>
        <input
          type="checkbox"
          checked={null}
          onChange={null}
        />
        {null ? 'Checked' : 'Unchecked'}
      </label>
    </div>
    <button className='sign-btn'>Sign in</button>
    <p>Forgot username/password</p>
    <hr className="headline"/>
    <p>Not an Airpoints™ member?</p>
    <button className='join-btn'>Join Airpoints</button>
    </div>
    </div>
  );
};

export default SignInForm;
