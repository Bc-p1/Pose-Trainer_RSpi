import React, { useState } from 'react';
import icon from '../../utils/temp/icon.png';
import icon1 from '../../utils/images/icon1.jpg';
import dog from '../../utils/temp/dog.png';
import warrior from '../../utils/temp/warrior.png';
import cobra from '../../utils/temp/cobra.png';
import triangle from '../../utils/temp/triangle.png';
import tree from '../../utils/temp/tree.png';
import chair from '../../utils/temp/chair.png';
import shoulderstand from '../../utils/temp/shoulderstand.png';

import MenuComponent from '../../components/MenuComponent/MenuComponent';
import './Profile.css';

const yogaPoses = [
  { name: 'Dog', image: dog },
  { name: 'Warrior', image: warrior },
  { name: 'Cobra', image: cobra },
  { name: 'Triangle', image: triangle },
  { name: 'Tree', image: tree },
  { name: 'Chair', image: chair },
  { name: 'Shoulder Stand', image: shoulderstand },
];

const Profile = () => {

  const [name, setName] = useState('John Doe');
  const [email, setEmail] = useState('johoe@example.com');
  const [location, setLocation] = useState('New York, USA');
  const [bio, setBio] = useState('I am a yoga enthusiast and love to practice every day.');
  const [profilePhoto, setProfilePhoto] = useState('https://via.placeholder.com/150');
  const [isEditing, setIsEditing] = useState(false);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleBioChange = (event) => {
    setBio(event.target.value);
  };

  const handleProfilePhotoChange = (event) => {
    setProfilePhoto(event.target.value);
  };

  const handleProfilePhotoUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setProfilePhoto(reader.result);
    };
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
  };

  const handlePoseButtonClick = (poseName) => {
    // Navigate to start page with poseName as a parameter
    window.location.href = `/start?pose=${poseName}`;
  };

  return (
    <>
      <div className="menu-container">
        <MenuComponent />
      </div>
      {/* <div className="app-icon-container">
        <img className="app-icon" src={icon} alt="App Icon" width="30" height="30" /> 
      </div> */}
      <div className="profile-container">
        <div className="profile-header">
          <div className="profile-photo-container">
            {isEditing ? (
              <div>
                <input type="text" value={profilePhoto} onChange={handleProfilePhotoChange} />
                <img className="profile-photo" src={profilePhoto} alt="Profile" />
                <input type="file" onChange={handleProfilePhotoUpload} />
              </div>
            ) : (
              <img className="profile-photo" src={icon1} alt="Profile" />
            )}
          </div>
          <h1>{isEditing ? <input type="text" value={name} onChange={handleNameChange} /> : name}</h1>
          {isEditing ? <button className="save-button" onClick={handleSaveClick}>Save</button> : <button className="edit-button" onClick={handleEditClick}>Edit</button>}
        </div>
        <div className="profile-details">
          <p><strong>Email:</strong> {isEditing ? <input type="text" value={email} onChange={handleEmailChange} /> : email}</p>
          <p><strong>Location:</strong> {isEditing ? <input type="text" value={location} onChange={handleLocationChange} /> : location}</p>
          <p><strong>Bio:</strong> {isEditing ? <textarea value={bio} onChange={handleBioChange} /> : bio}</p>
        </div>

        <h2 className='center'>Recent</h2>
        <ul className="yoga-poses">
          {yogaPoses.map((pose, index) => (
            <li key={index} id="pose-container" className="pose-button">
              <img id="pose-image" src={pose.image} alt={pose.name} />
              <span id="pose-button" className="pose-button-name" onClick={() => handlePoseButtonClick(pose.name,pose.image)}>{pose.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Profile;
