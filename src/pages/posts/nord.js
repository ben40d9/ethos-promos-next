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
      <h1 className={styles.heading}>Secure Your Internet with NordVPN Now!</h1>
      <p className={styles.subheading}>
        Enjoy secure and private access to the internet with the world's most
        advanced VPN. Don't miss out on our limited-time offer.
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
          Claim Offer
        </button>
      </form>
    </div>
  );
};

export default NordVPN;
