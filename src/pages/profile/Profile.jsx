import React, { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import './styles.css';


const Profile = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userData = JSON.parse(localStorage.getItem("user"));
        if (userData) {
          setUser(userData);
        }
      } catch (error) {
        toast.error("Failed to load user data");
      }
    };

    fetchUserData();
  }, []);

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put("/api/updateProfile", user); // Replace with your API endpoint
      if (res.data.success === false) {
        toast.error(res.data.message);
      } else {
        toast.success(res.data.message);
        localStorage.setItem("user", JSON.stringify(user));
      }
    } catch (error) {
      toast.error("An error occurred while updating the profile.");
    }
  };

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <div style={styles.profileContainer}>
      <h1 style={styles.profileTitle}>Profile</h1>
      <form onSubmit={handleUpdate} style={styles.profileForm}>
        <label style={styles.profileLabel}>First Name:</label>
        <input
          type="text"
          name="firstName"
          value={user.firstName}
          onChange={handleChange}
          style={styles.profileInput}
          placeholder="First Name"
        />
        <label style={styles.profileLabel}>Last Name:</label>
        <input
          type="text"
          name="lastName"
          value={user.lastName}
          onChange={handleChange}
          style={styles.profileInput}
          placeholder="Last Name"
        />
        <label style={styles.profileLabel}>Email:</label>
        <input
          type="email"
          name="email"
          value={user.email}
          onChange={handleChange}
          style={styles.profileInput}
          placeholder="Email"
        />
        <button type="submit" style={styles.profileButton}>
          Update Profile
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

const styles = {
  profileContainer: {
    backgroundColor: "#FFFFFF",
    color: "#000000",
    padding: "20px",
    borderRadius: "8px",
    maxWidth: "400px",
    margin: "0 auto",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  profileTitle: {
    textAlign: "center",
    marginBottom: "20px",
    color: "#005f73",
  },
  profileForm: {
    display: "flex",
    flexDirection: "column",
  },
  profileLabel: {
    marginBottom: "5px",
    color: "#005f73",
  },
  profileInput: {
    padding: "10px",
    marginBottom: "10px",
    border: "1px solid #005f73",
    borderRadius: "4px",
  },
  profileButton: {
    padding: "10px",
    backgroundColor: "#005f73",
    color: "#FFFFFF",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
  profileButtonHover: {
    backgroundColor: "#0a9396",
  },
};

export default Profile;
