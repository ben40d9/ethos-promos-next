import { useState } from "react";
import styles from "./Nord.module.css";

const NordVPN = () => {
  const [email, setEmail] = useState("");

  const validateForm = async (event) => {
    event.preventDefault();
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (!regex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }
    const response = await fetch(`/api/submit_email/nordvpn`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });
    if (response.ok) {
      window.location.href = "https://nordvpn.sjv.io/ethosPromos";
    } else {
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className={styles.container}>
      <a href="https://nordvpn.sjv.io/ethosPromos" target="_top" id="493823">
        <img
          src="//a.impactradius-go.com/display-ad/7452-493823"
          border="0"
          alt=""
          width="144"
          height="144"
        />
      </a>
      <h1 className={styles.heading}>
        Secure Your Online Privacy with NordVPN
      </h1>
      <p className={styles.subheading}>
        Get up to 63% off NordVPN + 3 extra months. Secure your online data with
        a VPN.
      </p>
      <form onSubmit={validateForm} className={styles.form}>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className={styles.emailInput}
        />
        <button type="submit" className={styles.submitButton}>
          Get Our Best Online Protection Tools
        </button>
      </form>
    </div>
  );
};

export default NordVPN;
