import { Button, Label, Col, FormGroup } from 'reactstrap';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import './contactForm.css';
import { validateContactForm } from '../../utils/validateContactForm';

const ContactForm = () => {
  const handleSubmit = (values, { resetForm }) => {
    console.log('form values:', values);
    console.log('in JSON format:', JSON.stringify(values));
    resetForm();
  };

  return (
    <Formik
      initialValues={{
        fullName: '',
        email: '',
        feedback: ''
      }}
      onSubmit={handleSubmit}
      validate={validateContactForm}
    >
      <Form className='contact-form'>
        <FormGroup row>
          <Label htmlFor='fullName' md='2'>
            Full Name
          </Label>
          <Col md='10'>
            <Field
              name='fullName'
              className='form-control contact-field'
              placeholder='Full Name'
            />
            <ErrorMessage name='fullName'>
              {(msg) => <p classname='text-danger'>{msg}</p>}
            </ErrorMessage>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label htmlFor='email' md='2'>
            Email
          </Label>
          <Col md='10'>
            <Field
              name='email'
              className='form-control contact-field'
              placeholder='Email'
            />
            <ErrorMessage name='email'>
              {(msg) => <p classname='text-danger'>{msg}</p>}
            </ErrorMessage>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label htmlFor='feedback' md='2'>
            Your Feedback
          </Label>
          <Col md='10'>
            <Field
              name='feedback'
              as='textarea'
              rows='12'
              className='form-control contact-field'
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Col md={{ size: 10, offset: 2 }}>
            <Button
              type='submit'
              style={{ backgroundColor: 'white', color: 'black' }}
            >
              Send Feedback
            </Button>
          </Col>
        </FormGroup>
      </Form>
    </Formik>
  );
};

export default ContactForm;
