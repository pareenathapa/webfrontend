import React, { useState } from "react";
import { registerUserApi } from "../../apis/Api";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const handleFirstname = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastname = (e) => {
    setLastName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  const validate = () => {
    let isValid = true;

    setFirstNameError("");
    setLastNameError("");
    setEmailError("");
    setPasswordError("");
    setConfirmPasswordError("");

    if (firstName.trim() === "") {
      setFirstNameError("First name is required");
      isValid = false;
    }

    if (lastName.trim() === "") {
      setLastNameError("Last name is required");
      isValid = false;
    }

    if (email.trim() === "") {
      setEmailError("Email is required");
      isValid = false;
    }

    if (password.trim() === "") {
      setPasswordError("Password is required");
      isValid = false;
    }

    if (confirmPassword.trim() === "") {
      setConfirmPasswordError("Confirm password is required");
      isValid = false;
    }

    if (password.trim() !== confirmPassword.trim()) {
      setConfirmPasswordError("Password does not match");
      isValid = false;
    }

    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    const data = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      confirmPassword: confirmPassword
    };
    try {
      const res = await registerUserApi(data);
      if(res.data.success === false){
        toast.error(res.data.message)
      }else{
        toast.success(res.data.message)
      }
    } catch (error) {
      toast.error("An error occurred. Please try again later.");
    }
  };

  const styles = {
    link:{
      color: "#005f73"
    },
    registerButton: {
      padding: "10px",
      backgroundColor: "#005f73", // Sea blue color
      color: "#FFFFFF", // White text
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
      transition: "background-color 0.3s ease",
    },
    registerContainer: {
      backgroundColor: "#FFFFFF", // White background
      color: "#000000", // Black text
      padding: "20px",
      borderRadius: "8px",
      maxWidth: "400px",
      margin: "0 auto",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    },
    registerTitle: {
      textAlign: "center",
      marginBottom: "20px",
      color: "#005f73", // Sea blue color
    },
    registerForm: {
      display: "flex",
      flexDirection: "column",
    },
    registerLabel: {
      marginBottom: "5px",
      color: "#005f73", // Sea blue color
    },
    registerInput: {
      padding: "10px",
      marginBottom: "10px",
      border: "1px solid #005f73", // Sea blue color
      borderRadius: "4px",
    },
    registerError: {
      color: "red",
      fontSize: "0.875em",
    },

    registerButtonHover: {
      backgroundColor: "#0a9396", // Darker sea blue on hover
    },
  };

  return (
    <div style={styles.registerContainer}>
      <h1 style={styles.registerTitle}>Create an Account </h1>
      <form onSubmit={handleSubmit} style={styles.registerForm}>
        <label style={styles.registerLabel}>First name:</label>
        <input
          onChange={handleFirstname}
          type="text"
          style={styles.registerInput}
          placeholder="Enter your first name"
        />
        {firstNameError && <p style={styles.error}>{firstNameError}</p>}

        <label style={styles.registerLabel}>Last name:</label>
        <input
          onChange={handleLastname}
          type="text"
          style={styles.registerInput}
          placeholder="Enter your last name"
        />
        {lastNameError && <p style={styles.error}>{lastNameError}</p>}

        <label style={styles.registerLabel}>Email Address:</label>
        <input
          onChange={handleEmail}
          type="email"
          style={styles.registerInput}
          placeholder="Enter your email address"
        />
        {emailError && <p style={styles.error}>{emailError}</p>}

        <label style={styles.registerLabel}>Password:</label>
        <input
          onChange={handlePassword}
          type="password"
          style={styles.registerInput}
          placeholder="Enter your password"
        />
        {passwordError && <p style={styles.error}>{passwordError}</p>}

        <label style={styles.registerLabel}>Confirm Password:</label>
        <input
          onChange={handleConfirmPassword}
          type="password"
          style={styles.registerInput}
          placeholder="Enter your confirm password"
        />
        {confirmPasswordError && (
          <p style={styles.error}>{confirmPasswordError}</p>
        )}

        <button onClick={handleSubmit} style={styles.registerButton}>
          Register
        </button>
      </form>
      <h4 className="mt-3">
        Create your account.{" "}
        <Link to="/login" href="http://">
          Login
        </Link>
      </h4>
    </div>
  );
};

export default Register;
