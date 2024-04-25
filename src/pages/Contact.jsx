import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setSubmitted(true);
  };

  return (
    <>
      <div className="contact-container">
        <h1 className="about-text">Talk to us</h1>
      </div>
      <div className="form">
        <Box
          sx={{
            width: 500,
            maxWidth: "100%",
            "& .MuiTextField-root": {
              marginBottom: "20px",
            },
          }}
        >
          <Formik
            initialValues={{
              name: "",
              email: "",
              subject: "",
              additionalInfo: "",
            }}
            validationSchema={Yup.object({
              name: Yup.string().required("Name is required"),
              email: Yup.string()
                .email("Invalid email address")
                .required("Email is required"),
              subject: Yup.string().required("Subject is required"),
              additionalInfo: Yup.string(),
            })}
            onSubmit={(values, { setSubmitting }) => {
              handleSubmit();
              setSubmitting(false);
            }}
          >
            <Form>
              <Field
                as={TextField}
                fullWidth
                label="Name"
                name="name"
                id="name"
              />
              <ErrorMessage name="name" component="div" />

              <Field
                as={TextField}
                fullWidth
                label="Email"
                name="email"
                id="email"
              />
              <ErrorMessage name="email" component="div" />

              <Field
                as={TextField}
                fullWidth
                label="Subject"
                name="subject"
                id="subject"
              />
              <ErrorMessage name="subject" component="div" />

              <Field
                as={TextField}
                fullWidth
                label="Additional information"
                name="additionalInfo"
                id="additionalInfo"
                multiline
                rows={4}
              />
              <Button
                type="submit"
                variant="contained"
                style={{
                  backgroundColor: "black",
                  color: "white",
                  marginTop: 30,
                  width: "100%", 
                }}
              >
                Submit
              </Button>
            </Form>
          </Formik>
          {submitted && <p>Thank you for contacting us!</p>}
        </Box>
      </div>
    </>
  );
}

export default Contact;
