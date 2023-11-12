import React from "react";
import "./CardProfile.css";

export default function CardProfile(props) {
  return (
    <div className="profile-card">
      <img src={props.profilePicture} alt="" className="profile-picture" />
      <div className="profile-info">
        <p id="nama">Nama: {props.name}</p>
        <p id="nim">Nim: {props.nim}</p>
      </div>
    </div>
  );
}
