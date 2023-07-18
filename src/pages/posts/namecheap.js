import { useState } from "react";
import styles from "./NameCheap.module.css";

const NameCheap = () => {
  const [email, setEmail] = useState("");

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
    const response = await fetch(`/api/submit_email/namecheap`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });
    if (response.ok) {
      // Redirect to the affiliate link after submission
      window.location.href = "https://namecheap.pxf.io/5g53bD";
    } else {
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className={styles.body}>
      <div className={styles.container}>
        <div className={styles.formContainer}>
          <h1 className={styles.heading}>Unlock Namecheap's Services</h1>
          <p className={styles.subheading}>
            Experience affordable, reliable, and secure domain registration, web
            hosting, and more. Start your online journey with us today.
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
              Claim Your Offer
            </button>
          </form>
        </div>
        <a
          href="https://namecheap.pxf.io/c/4197431/408988/5618"
          target="_top"
          id="408988"
          className={styles.logoLink}
        >
          <img
            className={styles.logo}
            src="//a.impactradius-go.com/display-ad/5618-408988"
            alt="Namecheap"
          />
        </a>
      </div>
    </div>
  );
};
export default NameCheap;
