import React from "react";
import UserProfileCard from './Components/UserProfileCard';
import envi from "./assets/girl.jpg"
import heney from "./assets/girl2.jpg"
import pruthvi from "./assets/boy.jpg"
import arjit from "./assets/boy2.jpg"
import savan from "./assets/boy3.jpg"
import resha from "./assets/girl3.jpg"


function App() {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      <UserProfileCard
        name="Envi Solanki"
        email="Envi@gmail.com"
        profilePicture={envi}
        location="Ahmedabad, India"
        phone="+91-9876543210"
        bio="Full Stack Developer passionate about creating amazing web experiences."
        jobTitle="Software Developer"
      />

      <UserProfileCard
        name="Heney Desai"
        email="heney@gmail.com"
        profilePicture={heney}
        phone="+91-9123456789"
        location="Mumbai, India"
        bio="UI/UX Designer and Frontend Enthusiast."
        jobTitle="Product Designer"
      />

      <UserProfileCard
        name="Pruthvi Patel"
        email="pruthvi@gmail.com"
        profilePicture={pruthvi}
        phone="+91-9876543210"
        location="Ahmedabad, India"
        bio="Full Stack Developer passionate about creating amazing web experiences."
        jobTitle="Software Engineer"
      />

      <UserProfileCard
        name="Arjit khunt"
        email="arjit@gmail.com"
        profilePicture={arjit}
        phone="+91-9876543210"
        location="Surat, India"
        bio="Full Stack Developer passionate about creating amazing web experiences."
        jobTitle="Full-Stack Developer"
      />

      <UserProfileCard
        name="Savan Gohil"
        email="savan@gmail.com"
        profilePicture={savan}
        phone="+91-9876543210"
        location="Delhi, India"
        bio="Full Stack Developer passionate about creating amazing web experiences."
        jobTitle="Software Engineer"
      />

      <UserProfileCard
        name="Resha Yadav"
        email="resha@gmail.com"
        profilePicture={resha}
        phone="+91-987654321"
        location="Kolkata, India"
        bio="UI/UX Designer and Frontend Enthusiast."
        jobTitle="UI/UX Desinger"
      />

      
    </div>
  );
}

export default App;
