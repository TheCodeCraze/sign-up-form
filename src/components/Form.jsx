import { useState } from "react";
import styles from "../styles/Form.module.css";

export const Form = () => {
  const [inputs, setInputs] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    firstName: false,
    lastName: false,
    email: false,
    password: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors({
      firstName: !inputs.firstName,
      lastName: !inputs.lastName,
      email: !inputs.email.includes("@"),
      password: !inputs.password,
    });
    inputs.firstName &&
      inputs.lastName &&
      inputs.email.includes("@") &&
      inputs.password &&
      setInputs({ firstName: "", lastName: "", email: "", password: "" });
  };

  return (
    <div className={styles.container}>
      <button className={styles["button-trial"]}>
        <span>Try it free 7 days</span> then $20/mo. thereafter
      </button>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.group}>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={inputs.firstName}
            onChange={handleChange}
            className={errors.firstName ? styles.error : null}
          />
          {errors.firstName ? (
            <>
              <p className={styles["error-message"]}>
                First Name cannot be empty
              </p>
              <img
                src="/icon-error.svg"
                alt="Error occured"
                className={styles["error-icon"]}
              />
            </>
          ) : null}
        </div>
        <div className={styles.group}>
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={inputs.lastName}
            onChange={handleChange}
            className={errors.lastName ? styles.error : null}
          />
          {errors.lastName ? (
            <>
              <p className={styles["error-message"]}>
                Last Name cannot be empty
              </p>
              <img
                src="/icon-error.svg"
                alt="Error occured"
                className={styles["error-icon"]}
              />
            </>
          ) : null}
        </div>
        <div className={styles.group}>
          <input
            type="text"
            name="email"
            placeholder={errors.email ? "email@example/com" : "Email Address"}
            value={inputs.email}
            onChange={handleChange}
            className={errors.email ? styles.error : null}
          />
          {errors.email ? (
            <>
              <p className={styles["error-message"]}>
                Looks like this is not an email
              </p>
              <img
                src="/icon-error.svg"
                alt="Error occured"
                className={styles["error-icon"]}
              />
            </>
          ) : null}
        </div>
        <div className={styles.group}>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={inputs.password}
            onChange={handleChange}
            className={errors.password ? styles.error : null}
          />
          {errors.password ? (
            <>
              <p className={styles["error-message"]}>
                Password cannot be empty
              </p>
              <img
                src="/icon-error.svg"
                alt="Error occured"
                className={styles["error-icon"]}
              />
            </>
          ) : null}
        </div>
        <button className={styles["button-form"]}>Claim your free trial</button>
        <p className={styles.terms}>
          By clicking the button, you are agreeing to our
          <span>Terms and Services</span>
        </p>
      </form>
    </div>
  );
};
