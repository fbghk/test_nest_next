import React from 'react';
import styles from '@/styles/Auth.module.css';

export default function SignIn() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>#Welcome #Back</h1>
      <form className={styles.form}>
        <input type="text" placeholder="User Id / Email" className={styles.input} />
        <input type="password" placeholder="Password" className={styles.input} />
        <button type="submit" className={styles.button}>#SIGN IN</button>
      </form>
      <div className={styles.links}>
        <a href="#" className={styles.link}>#Forgot Password?</a>
        <a href="/signup" className={styles.link}>#Create Your Account</a>
      </div>
    </div>
  );
}