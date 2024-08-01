import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './styles.css';


const Checkout = () => {
  const navigate = useNavigate();
  const [address, setAddress] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [addressError, setAddressError] = useState("");
  const [paymentError, setPaymentError] = useState("");

  const validate = () => {
    let isValid = true;
    if (address.trim() === "") {
      setAddressError("Address is required");
      isValid = false;
    }
    if (paymentMethod.trim() === "") {
      setPaymentError("Payment method is required");
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
      address: address,
      paymentMethod: paymentMethod,
    };

    try {
      const res = await axios.post("/api/checkout", data); // Replace with your API endpoint
      if (res.data.success === false) {
        toast.error(res.data.message);
      } else {
        toast.success(res.data.message);
        navigate("/confirmation"); // Redirect to confirmation page
      }
    } catch (error) {
      toast.error("An error occurred during checkout. Please try again.");
    }
  };

  return (
    <div style={styles.checkoutContainer}>
      <h1 style={styles.checkoutTitle}>Checkout</h1>
      <form onSubmit={handleSubmit} style={styles.checkoutForm}>
        <label style={styles.checkoutLabel}>Shipping Address:</label>
        <input
          onChange={(e) => setAddress(e.target.value)}
          type="text"
          style={styles.checkoutInput}
          placeholder="Enter your address"
        />
        {addressError && <p style={styles.checkoutError}>{addressError}</p>}

        <label style={styles.checkoutLabel}>Payment Method:</label>
        <select
          onChange={(e) => setPaymentMethod(e.target.value)}
          style={styles.checkoutInput}
        >
          <option value="">Select Payment Method</option>
          <option value="credit_card">Credit Card</option>
          <option value="paypal">PayPal</option>
          <option value="bank_transfer">Bank Transfer</option>
        </select>
        {paymentError && <p style={styles.checkoutError}>{paymentError}</p>}

        <button type="submit" style={styles.checkoutButton}>
          Place Order
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

const styles = {
  checkoutContainer: {
    backgroundColor: "#FFFFFF",
    color: "#000000",
    padding: "20px",
    borderRadius: "8px",
    maxWidth: "400px",
    margin: "0 auto",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  checkoutTitle: {
    textAlign: "center",
    marginBottom: "20px",
    color: "#005f73",
  },
  checkoutForm: {
    display: "flex",
    flexDirection: "column",
  },
  checkoutLabel: {
    marginBottom: "5px",
    color: "#005f73",
  },
  checkoutInput: {
    padding: "10px",
    marginBottom: "10px",
    border: "1px solid #005f73",
    borderRadius: "4px",
  },
  checkoutError: {
    color: "red",
    fontSize: "0.875em",
  },
  checkoutButton: {
    padding: "10px",
    backgroundColor: "#005f73",
    color: "#FFFFFF",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
  checkoutButtonHover: {
    backgroundColor: "#0a9396",
  },
};

export default Checkout;
