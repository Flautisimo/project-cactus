import React from 'react'
import { Formik, Form, useField } from 'formik'
import * as Yup from 'yup'

const CustomTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props)

  return (
    <div className='block mb-1 font-bold text-gray-500'>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input
        className='text-input' {...field} {...props}
        className='w-full border-2 border-gray-200 p-1 md:p-3 rounded outline-none focus:border-purple-500'
      />
      {meta.touched && meta.error ? (
        <div className='error'>{meta.error}</div>
      ) : null}
    </div>
  )
}

const CustomCheckBox = ({ children, ...props }) => {
  const [field, meta] = useField(props, 'checkbox')

  return (
    <div className='flex items-center'>
      <label className='checkbox font-semibold uppercase ml-2 text-sm'>
        <input type='checkbox' {...field} {...props} />
        {children}
      </label>
      {meta.touched && meta.error ? (
        <div className='error'>{meta.error}</div>
      ) : null}
    </div>
  )
}

export default function Contact () {
  return (
    <Formik
      initialValues={{
        fullName: '',
        email: '',
        phone: '',
        message: '',
        acceptedTerms: false
      }}
      validationSchema={Yup.object({
        fullName: Yup.string()
          .min(3, 'Must be at least 3 characters')
          .required('Required'),
        email: Yup.string()
          .email('Invalid email address')
          .required('Required'),
        phone: Yup.number()
          .min(10, 'Must have 10 digits')
          .max(10, 'Must have 10 digits'),
        message: Yup.string()
          .required('Required'),
        acceptedTerms: Yup.boolean()
          .required('Required')
          .oneOf([true], 'You must accept the terms and conditions')
      })}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2))
          resetForm()
          setSubmitting(false)
        }, 2000)
      }}
    >

      {props => (
        <div data-aos='fade-right' data-aos-duration='2000' id='Contact' className='flex items-center justify-center bg-white'>
          <div className='bg-white w-full md:w-6/12 h-auto py-8 px-8 shadow-2xl'>
            <h2 className='px-1 md:space-x-9 font-body font-medium text-center text-2xl md:text-4xl mb-10 text-indigo-900'>Feel free to drop me a line:</h2>
            <Form className='px-0 space-y-2 md:space-y-4'>

              <div>
                <CustomTextInput label='Name' name='fullName' type='text' placeholder='Please enter your full name' />
              </div>
              <div>
                <CustomTextInput label='E-mail' name='email' type='email' placeholder='email@example.com' />
              </div>
              <div>
                <CustomTextInput label='Phone (optional)' name='phone' type='string' placeholder='0123456789' />
              </div>
              <div>
                <CustomTextInput label='Message' name='message' type='text' placeholder='Let me know your thougts' />
              </div>
              <div>
                <CustomCheckBox name='acceptedTerms'>
                  I accept the terms and conditions
                </CustomCheckBox>
              </div>
              <button type='submit' className='block w-full mb-0 font-body font-bold bg-blue-400 hover:bg-gray-500 p-3 md:p-4 rounded text-indigo-900 hover:text-white transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 ... uppercase'>
                {props.isSubmitting ? 'Sendind...' : 'Send Message'}
              </button>

            </Form>
          </div>
        </div>

      )}
    </Formik>
  )
};
