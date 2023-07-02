import { Container, Col, Row } from 'reactstrap';
import SubHeader from '../components/subheader/SubHeader';
import ContactForm from '../features/contactform/ContactForm';
import AboutUsCard from '../features/aboutus/AboutUsCard';

const ContactPage = () => {
  return (
    <>
      <div>
        <SubHeader current='contact us' />
        <Container style={{ marginTop: '40px', marginBottom: '120px' }}>
          <Row className='mx-auto'>
            <Col sm='12' md='6'>
              <h2>Send Us Your Feedback</h2>
              <div>
                <ContactForm />
              </div>
            </Col>
            <Col sm='12' md='6'>
              <div>
                <AboutUsCard />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default ContactPage;
