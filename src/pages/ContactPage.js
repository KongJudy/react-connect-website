import AboutUsCard from '../components/aboutus/AboutUsCard';
import { Container, Col, Row } from 'reactstrap';
import SubHeader from '../components/subheader/SubHeader';

const ContactPage = () => {
  return (
    <>
      <div>
        <SubHeader current='contact us' />
        <Container style={{ marginTop: '40px', marginBottom: '120px' }}>
          <Row className='mx-auto'>
            <Col sm='12' md='8'>
              <div></div>
            </Col>
            <Col sm='12' md='4'>
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
