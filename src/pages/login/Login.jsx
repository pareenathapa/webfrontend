import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";
import { loginUserApi } from "../../apis/Api";
import { Layout } from "../../Components/Layout/Layout";
import { useUserDetails } from "../../Components/Context";

const Login = () => {
  const navigate = useNavigate();
  // useState
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const { addUserDetails } = useUserDetails();

  // Form validation function
  const validate = () => {
    let isValid = true;
    if (email.trim() === "") {
      setEmailError("Email is empty or invalid");
      isValid = false;
    }

    if (password.trim() === "") {
      setPasswordError("Password is Required");
      isValid = false;
    }

    return isValid;
  };

  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();

    const isValid = validate();
    if (!isValid) {
      return;
    }

    // Making JSON object
    const data = {
      email: email,
      password: password,
    };

    // Making API requests
    console.log("Login data:", data); // Log data being sent in the request
    loginUserApi(data)
      .then((res) => {
        console.log("Login response:", res.data); // Log the response data
        // Success: true/false, message
        if (res.data.success === false) {
          toast.error(res.data.message);
        } else {
          toast.success(res.data.message);
          // Redirect or perform any other action upon successful login
          // Received data: success: boolean, message: string, userData: JSON, token: string
          // 1. Set token
          localStorage.setItem("token", res.data.token);

          // setting user details in context
          addUserDetails(res.data.userData);

          navigate("/");
        }
      })
      .catch((error) => {
        console.error("Login API error:", error);
        toast.error("An error occurred while logging in. Please try again.");
      });
  };

  // API call function
  return (
    <Layout>
      <div style={styles.loginContainer}>
        <h1 style={styles.loginTitle}>Login into your account</h1>
        <form style={styles.loginForm}>
          <label style={styles.loginLabel}>Enter your Email</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            style={styles.loginInput}
            placeholder="Email"
          />
          {emailError && <p style={styles.loginError}>{emailError}</p>}
          <label style={styles.loginLabel}>Enter your password</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            style={styles.loginInput}
            placeholder="Password"
          />
          {passwordError && <p style={styles.loginError}>{passwordError}</p>}
          <button onClick={handleSubmit} style={styles.loginButton}>
            Log In
          </button>
        </form>
        <h4 className="mt-3">
          Create your account.{" "}
          <Link to="/register" href="http://">
            Register
          </Link>
        </h4>
        <ToastContainer />
      </div>
    </Layout>
  );
};

const styles = {
  loginContainer: {
    backgroundColor: "#FFFFFF", // White background
    color: "#000000", // Black text
    padding: "20px",
    borderRadius: "8px",
    maxWidth: "400px",
    margin: "0 auto",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  loginTitle: {
    textAlign: "center",
    marginBottom: "20px",
    color: "#005f73", // Sea blue color
  },
  loginForm: {
    display: "flex",
    flexDirection: "column",
  },
  loginLabel: {
    marginBottom: "5px",
    color: "#005f73", // Sea blue color
  },
  loginInput: {
    padding: "10px",
    marginBottom: "10px",
    border: "1px solid #005f73", // Sea blue color
    borderRadius: "4px",
  },
  loginError: {
    color: "red",
    fontSize: "0.875em",
  },
  loginButton: {
    padding: "10px",
    backgroundColor: "#005f73", // Sea blue color
    color: "#FFFFFF", // White text
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
  loginButtonHover: {
    backgroundColor: "#0a9396", // Darker sea blue on hover
  },
};

export default Login;
