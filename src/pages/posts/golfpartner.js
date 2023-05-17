import { useState } from "react";
import styles from "./GolfPartner.module.css";

const GolfPartner = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const validateForm = async (event) => {
    event.preventDefault();
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (!regex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }
    sendData(email);
  };

  const sendData = async (email) => {
    const response = await fetch(`/api/submit_email/golfpartner`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });
    if (response.ok) {
      setSubmitted(true);
    } else {
      alert("Something went wrong. Please try again.");
    }
  };

  if (submitted) {
    window.location.href = "https://golfpartnerusa.com/";
  }

  return (
    <div className={styles.container}>
      <img
        className={styles.backgroundImage}
        src="../../images/welcomeToGizmogo.png"
        alt="Background Image"
      />
      <a
        href="https://golfpartnerusa.com/"
        target="_top"
        id="golfpartner"
        className={styles.logoLink}
      >
        <img
          className={styles.logo}
          src="../../images/golfPartnerLogo.png"
          alt="GolfPartner"
        />
      </a>
      <h1 className={styles.heading}>Get GolfPartner Now!</h1>
      <p className={styles.subheading}>
        Don't miss out on our limited-time offer.
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

export default GolfPartner;
