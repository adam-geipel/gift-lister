'use client'

import { Formik, Field, Form, FormikHelpers } from 'formik';
import styles from "./loginModal.module.scss";

interface LoginValues {
    username: string;
    password: string;
}

export default function LoginModal() {


    return (
        <div className={styles.loginModal}>
            <Formik
                initialValues={{
                    username: '',
                    password: '',
                }}

                onSubmit={(
                    values: LoginValues, 
                    { setSubmitting }: FormikHelpers<LoginValues>
                ) => {
                    setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                    }, 500);
                }}
        
            >
                <Form className={styles.form}>
                    <Field id="username" name="username" placeholder="Username" />
                    <Field type="password" id="password" name="password" placeholder="Password" />
                    <button type="submit" className={styles.button}>Login</button>
                </Form>
            </Formik>
        </div>
    )
}