'use client'
import React from 'react';
import styles from './page.module.scss'

export default function Page() {

  const submitRegistration = async (event) => {
    setFormErrors([]);
    event.preventDefault();
    const target = event.target;
    if (target.password.value != target.confirmPassword.value) {
        setFormErrors(formErrors.push('passwords do not match'));
        return;
    }

    const res = await fetch(`http://localhost:3000/api/auth/register`, {
        body: JSON.stringify({
            username: event.target.username.value,
            firstName: event.target.firstName.value,
            lastName: event.target.lastName.value,
            email: event.target.email.value,
            password: event.target.password.value,
            birthDate: event.target.password.birthDate
        }),
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
    }).then;

  }

  const [dobValue, setDobValue] = React.useState({
      startDate: null,
      endDate: null
  });

  const [formErrors, setFormErrors] = React.useState([]);

  const handleDateChange = (newValue) => {
      setDobValue(newValue);
  }

  return (
    <main className={styles.main}>
      <div className={styles.registerForm}> 
            <div className={styles.header}>
                <h1>Register</h1> 
            </div>
            <form className={styles.form} onSubmit={submitRegistration}>
                <div className={styles.field}>
                    <label>Email Address</label>
                    <input required id="email" name="email" type="text" placeholder="Email Address"/>    
                </div>
                <div className={styles.field}>
                    <label>First Name</label>
                    <input required id="firstName" name="firstName" type="text" placeholder="First Name" />    
                </div>
                <div className={styles.field}>
                    <label>Last Name</label>
                    <input required id="lastName" name="lastName" type="text" placeholder="Last Name" />    
                </div>
                <div className={styles.field}>
                    <label>Date of Birth</label>
                    <input required id="birthDate" name="birthDate" type="date"/>  
                </div>
                <div className={styles.field}>
                    <label>Username</label>
                    <input required id="username" name="username" type="text" placeholder="Username" />    
                </div>
                <div className={styles.field}>
                    <label>Password</label>
                    <input required type="password" id="password" name="password" placeholder="Password" />    
                </div>
                <div className={styles.field}>
                    <label>Confirm Password</label>
                    <input required type="password" id="confirmPassword" name="confirmPassword" placeholder="Password" />    
                </div>


                <div className={styles.buttonRow}>
                    <button type="submit" className={styles.button}>Register</button>
                    <button className={styles.button}>Cancel</button>
                </div>
            </form>
        </div>
    </main>
  )
}