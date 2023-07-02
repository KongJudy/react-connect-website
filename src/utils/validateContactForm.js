export const validateContactForm = (values) => {
  const errors = {};

  if (!values.fullName) {
    errors.fullName = 'Required';
  } else if (values.fullName.length < 3) {
    errors.fullName = 'Must be at least 4 characters';
  }

  if (!values.email.includes('@')) {
    errors.email = 'Must contain a @';
  }

  return errors;
};
