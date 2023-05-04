import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Profile = () => {
  const [User, setUser] = useState("User");
    const navigate = useNavigate;
  useEffect(() => {
    let login = JSON.parse(localStorage.getItem("UserLogged"));
    setUser(login);
  }, []);
  return <div>profile page of {User}
  
  click <strong onClick={()=>{
    localStorage.setItem('UserLogged', '')
    navigate('/')
  }}>Here</strong> to logout 
  
  </div>;
};
