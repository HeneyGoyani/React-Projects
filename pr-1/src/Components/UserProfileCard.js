import React from "react";
import "./UserProfileCard.css";

const UserProfileCard = ({
  name,
  email,
  profilePicture,
  phone,
  location,
  bio,
  website,
  jobTitle,
}) => {
  return (
    <div className="user-card">
      <img src={profilePicture} alt={`${name}'s profile `} className="profile-img" />
      <h2 className="user-name">{name}</h2>
      <p className="user-job">{jobTitle}</p>
      <div className="user-details">
        <p><b>Email:</b> {email}</p>
        <p><strong>Phone:</strong> {phone}</p>
        <p><strong>Location:</strong> {location}</p>
        <p><strong>Bio:</strong> {bio}</p>
      </div>
    </div>
  );
};

export default UserProfileCard;


const ProfileCard = ({
  name,
  grid,
  phoneNumber,
  course,
  duration
}) => {
  return(
    <div className="card-user">
      

    </div>
  )
}