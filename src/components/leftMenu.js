import React from "react";
import profilePic from "./../static/profile-pic.jpeg"
import { BsBoxes } from "react-icons/bs"
import { AiOutlineCompass } from "react-icons/ai"
import { BsPeople } from "react-icons/bs"
import { BsFire } from "react-icons/bs"
import { FiSettings } from "react-icons/fi"
import { BiLogOut } from "react-icons/bi"
import { useRef } from "react";
import {  IoGameControllerOutline } from "react-icons/io5"

const lightTheme = {
  name: "LIGHT",
  bg: "#FDFDFD",
  sec: "#D9D9D9",
  font: "#5E5E5E"
}


const darkTheme = {
  name: "DARK",
  bg: "#21262C",
  sec: "#1A1B1F",
  font: "#ffffff"
}



export default function LeftMenu(props){
  const myRef = useRef(null);

  const clickHandler = (e) => {
    if(myRef.current.style.justifyContent == "flex-end"){
      myRef.current.style.justifyContent = "flex-start";
    } else {
      myRef.current.style.justifyContent = "flex-end"
    }

    let new_theme = props.theme.name == "LIGHT" ? darkTheme  : lightTheme;
    props.themechanger(new_theme)
  } 


  return(
    <div className="left-menu" style={{borderColor: props.theme.sec, color: props.theme.font}}>

      <div className="profile-container">
        <img src={profilePic}></img>
        <h4 style={{fontWeight: "600"}}>Vansh Agarwal</h4>
      </div>

      <ul className="menu-container">
        <li style={{fontWeight: "700"}}>
          <IoGameControllerOutline style={{fontSize: "20px"}}/> 
          Dashboard
        </li>
        <li>
          <BsBoxes style={{fontSize: "20px"}}/> 
          Subscriptions
        </li>
        <li>
          <AiOutlineCompass style={{fontSize: "20px"}}/> 
          Discover
        </li>
        <li>
          <BsPeople style={{fontSize: "20px"}}/> 
          Friends
        </li>
        <li>
          <BsFire style={{fontSize: "20px"}}/> 
          Trending
        </li>
        <li>
          <FiSettings style={{fontSize: "20px"}}/> 
          Settings
        </li>
        <li>
          <BiLogOut style={{fontSize: "20px"}}/> 
          Logout
        </li>
      </ul>



      <button className="theme-btn" style={{backgroundColor: props.theme.sec}} ref={myRef} >
        <div style={{backgroundColor: props.theme.bg, color: props.theme.font }} onClick={clickHandler}> {props.theme.name} </div>
      </button>
    </div>
  )
}