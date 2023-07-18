import { useState } from "react";
import styles from "./Gizmogo.module.css";

const Gizmogo = () => {
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
    const response = await fetch(`/api/submit_email/gizmogo`, {
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
    window.location.href = "https://gizmogo.pxf.io/ethosPromos";
  }

  return (
    <div className={styles.container}>
      <img
        className={styles.backgroundImage}
        src="../../images/gizmogoBackground.webp"
        alt="Gizmogo Background Image"
        style={{ opacity: 0.8 }} // Increase opacity
      />
      <a
        href="https://gizmogo.pxf.io/c/4197431/1604433/17499"
        target="_top"
        id="1604433"
        className={styles.logoLink}
      >
        <img
          className={styles.logo}
          src="../../images/gizmogoLogo.webp"
          alt="Gizmogo Logo"
        />
      </a>
      <h1 className={styles.heading}>Get Gizmogo Now!</h1>
      <p className={styles.subheading}>Get an extra $10 on your next device!</p>
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

export default Gizmogo;
