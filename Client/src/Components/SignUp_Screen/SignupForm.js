import React, { useState } from 'react';
import './SignupForm.css';
import img1 from '../../Assests/react.png'
import bg from '../../Assests/bg.jpg'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import MyAlert from '../Alert Popup/popup';

const SignUpForm = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [age, setAge] = useState('');
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case 'fullName':
        setFullName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'phone':
        setPhone(value);
        break;
      case 'age':
        setAge(value);
        break;
      case 'password':
        setPassword(value);
        break;
      case 'confirmPassword':
        setConfirmPassword(value);
        break;
      default:
        break;
    }
  };

  const validateForm = () => {
    const errors = {};

    if (!fullName) {
      errors.fullName = 'Full Name Field Empty!';
    }else if(fullName.trim().length < 2){
      errors.fullName = 'Name Must have more then 2 Characters!';
    }

    if (!email) {
      errors.email = 'Email Field Empty!';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Email not Valid. Formate should be : (example@exapmle.com)';
    }
    if (!age) {
      errors.age = 'Age Field Empty!';
    } else if (isNaN(age) || age < 13 || age > 99) {
      errors.age = 'Recheck Age, Age must be between 13-99';
    }
    if (!phone) {
      errors.phone = 'Phone Number Field Empty!';
    } else if (!/^\d{10}$/.test(phone)) {
      errors.phone = 'Phone Number not Valid, Formate Should be : (03XXXXXXXX)';
    }
    if (!password) {
      errors.password = 'Password Field Empty!';
    } else if (password.length < 6) {
      errors.password = 'Minimum 6 Characters Required in Password';
    }

    if (!confirmPassword) {
      errors.confirmPassword = 'Confirm Password Field Empty!';
    } else if (password !== confirmPassword) {
      errors.confirmPassword = "Password and Confirm Password didn't Match!";
    }



    setErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Perform signup or submit action here
      console.log('Form submitted successfully');
    }
  };

  const [currentStep, setCurrentStep] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    setSelectedImage(event.target.files[0]);
  };
  const nextStep = () => {
    if (validateForm()) {   
      setCurrentStep(currentStep + 1);
    }
  };

  const previousStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const navigate = useNavigate();

  const gotoLogin = (event) => {
    navigate('/login');
  }

  //alert
  const [showAlert, setShowAlert] = useState(false);

  const handleShowAlert = () => {    
    setShowAlert(true);   
  };

  const handleCloseAlert = () => {
    setShowAlert(false);
  };

  const ClearForm=()=>{
    setFullName("");
    setEmail("");
    setAge("");
    setPassword("");
    setConfirmPassword("");
    setPhone("");
  }

  return (
    <>     
      <Link to="/signup"></Link>
      {showAlert && (
        <MyAlert name={fullName} email={email} age={age} onClose={handleCloseAlert} ClearForm={ClearForm}/>
      )}
      <div className='parent'>
        <div class="logo-container">
          <img class="logo" src={img1} alt="Logo 1" />
          <h2 class="form-heading">React Sign-Up Form</h2>
        </div>
        <div className="container">
          <div className='formtitle'>My React Website</div>
          <div className='text'>Discover a world of endless possibilities with ReactJS</div>
          <div className='formsubheading'>Sign Up</div>
          <form id="twoStepForm" encType="multipart/form-data" onSubmit={handleSubmit}>
            <div className={currentStep === 0 ? "step active" : "step"} id="step1">
              <p className='text_'>Fill the following fields</p>
              <div className="form-group">
                <label htmlFor="fullName">Full Name</label>
                <div>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={fullName}
                  onChange={handleInputChange}
                  required
                />
                {errors.fullName && <span style={{color:'red'}} className="error">{errors.fullName}</span>}
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={handleInputChange}
                  required
                />
                {errors.email && <span style={{color:'red'}} className="error">{errors.email}</span>}
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="age">Age</label>
               <div>
               <input
                  type="number"
                  id="age"
                  name="age"
                  value={age}
                  onChange={handleInputChange}
                  required
                />
                {errors.phone && <span style={{color:'red'}} className="error">{errors.age}</span>}
               </div>
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
               <div>
               <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={phone}
                  onChange={handleInputChange}
                  required
                />
                {errors.phone && <span style={{color:'red'}} className="error">{errors.phone}</span>}
               </div>
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <div>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={password}
                  onChange={handleInputChange}
                  required
                />
                {errors.password && <span style={{color:'red'}} className="error">{errors.password}</span>}
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="confirmPassword">Confirm Password</label>
               <div className='Group'> 
               <div>
               <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={confirmPassword}
                  onChange={handleInputChange}
                  required
                />                
                {errors.confirmPassword && <span style={{color:'red'}} className="error">{errors.confirmPassword}</span>}
               </div>
               </div>
              </div>
              <button className="submit-button" onClick={nextStep}>
                Next
              </button>
            </div>
            <div className={currentStep === 1 ? "step active fade-in" : "step"} id="step2">
              <div className='_subheading'>Upload Your Photo Here</div>
              <div className="logo-container">
                <img src={selectedImage ? URL.createObjectURL(selectedImage) : { bg }} alt="" className="logo_" />
              </div>
              <div className="file-upload">
                <span className="file-path">{selectedImage ? selectedImage.name : "No image selected"}</span>
                <input type="file" name="image" id="image" onChange={handleImageChange} required style={{ display: 'none' }} />
                <label htmlFor="image" className="browse-btn">
                  Browse
                </label>
              </div>
              <br />
              <div className='button_container'>
                <button className="btn previous" onClick={previousStep}>
                  Previous
                </button>
                <button onClick={handleShowAlert} className="btn">
                  Submit
                </button>
              </div>
            </div>
          </form>
          <div className="signup-container">
            <span className="account-text">Already have an Account?</span>
            <button className="signup-button" onClick={() => { gotoLogin() }}>Login Here</button>
          </div>
        </div>
        <div>
          <div className="bottom-section">
            <p className="copy-right">© 2023 Your Company. All rights reserved.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUpForm;
