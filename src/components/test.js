import React from 'react'
import {Formik, validateYupSchema} from 'formik';
import * as Yup from 'yup';

const test = () => {
    return (
        <div>
            <Formik
                initialValues={{
                    name:"",
                    email:"",
                    rememberme:false,
                    password:""
                }}
                validateYupSchema={Yup.object({
                    name: Yup.string()
                        .min(3 , "must be at least three characters")
                        .max(15, 'less than 15 character')
                        .required('Requierd'),

                    email: Yup.string()
                        .email('invalid email address')
                        .required('Requierd'),

                    rememberme: Yup.boolean()
                    .required('Requierd'),
                    
                    password: Yup.string()
                    .min(6, "password should be felan")
                    .max(16, "less than 16 plz")
                    .required('its requierd')
                })}
                onSubmit={(values, {setSubmitting, resetForm}) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        resetForm();
                        setSubmitting(false);
                    }, 3000)
                }}
            
            >

            </Formik>
        </div>
    )
}

export default test;
