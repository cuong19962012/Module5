import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup"
export function Contact() {
    // const REGEX = {
    //     email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
    // }
    // const [form, setForm] = useState
    return (
        <>

            <h1>Contact Form</h1>
            <Formik
                initialValues={{ name: '', email: '', phone: '', message: '' }}
                validationSchema={Yup.object({
                    name: Yup.string().required("Name is not empty"),
                    email: Yup.string()
                        .required("Email is not empty")
                        .matches(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/),
                    phone: Yup.string().required("Phone is not empty"),
                    message: Yup.string().required("Message is not empty")
                })}
                onSubmit={(values, { setSubmitting }) => {
                    setSubmitting(false);
                    console.log(values);
                }}
            >{({ isSubmitting }) => (
                <Form>
                    <label>Name</label>
                    <Field type="text" name='name' />
                    <ErrorMessage name='name' component='span' />
                    <br />
                    <label>Email</label>
                    <Field type="text" name='email' />
                    <ErrorMessage name='email' component='span' />
                    <br />
                    <label>Phone</label>
                    <Field type="text" name='phone' />
                    <ErrorMessage name='phone' component='span' />
                    <br />
                    <label>Message</label>
                    <Field as='textarea' cols='30'
                        rows='10' name='message' />
                    <ErrorMessage name='message' component='span' />
                    <br />
                    <button type="submit">Submit</button>
                </Form>
            )}
            </Formik>
        </>
    );
}