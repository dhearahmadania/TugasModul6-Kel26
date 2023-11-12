import { Fragment } from "react";
import React from "react";
import "./Profile.css"; 
import { groupMembers } from "../components/data/ProfileData"; 
import CardProfile from "../components/card/CardProfile"; 

export default function Profile() {
  return (
    <>
        <p className="profile-title centered-title">Anggota Kelompok</p>
        {groupMembers.map((member, index) => (
            <Fragment key={member.id}>
            <CardProfile
                name={member.name}
                nim={member.nim}
                profilePicture={member.profilePicture}
            />
            {groupMembers.length === index + 1 && <div style={{ marginBottom: 80 }} />}
            </Fragment>
        ))}
        </>
  );
}