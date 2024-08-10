import React from "react";
import { Layout } from "../../Components/Layout/Layout";
import "../CSS/Profile.css";
import { useUserDetails } from "../../Components/Context";
import { useNavigate } from "react-router-dom";

export const UserProfile = () => {
  const { userDetails, removeUserDetails } = useUserDetails();
  const navigate = useNavigate();

  const handleLogout = () => {
    removeUserDetails();
    navigate("/");
  };

  console.log("userDetails", userDetails);
  return (
    <Layout>
      <div className="main">
        <h2>My profile</h2>
        <div className="profile-container">
          <div className="detail-container">
            Full Name:{" "}
            <span className="user-detail-item">
              {userDetails.firstName}
              &nbsp;{userDetails.lastName}
            </span>
          </div>
          <div className="detail-container">
            Email Address:{" "}
            <span className="user-detail-item">{userDetails.email}</span>
          </div>
          <div className="detail-container">
            User Role:{" "}
            <span className="user-detail-item">
              {userDetails.isAdmin ? "Admin" : "User"}
            </span>
          </div>
          <div className="detail-container">
            User Password:{" "}
            <span className="user-detail-item">{userDetails.password}</span>
          </div>
          <div className="d-flex justify-content-end mt-1">
            <button onClick={handleLogout} className="mt-1 btn btn-primary">
              Logout
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};
