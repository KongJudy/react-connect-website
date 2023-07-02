import { Container, Row, Col } from 'reactstrap';
import './footer.css';

const Footer = () => {
  return (
    <footer className='site-footer'>
      <Container>
        <Row
          style={{
            textAlign: 'center',
            placeContent: 'center',
            justifyContent: 'center'
          }}
        >
          <a
            role='button'
            className='btn btn-social-icon btn-md'
            href='tel:+12065551234'
          >
            <i className='fa fa-phone' />
          </a>
          <a
            className='btn btn-social-icon btn-md'
            href='http://instagram.com/'
          >
            <i className='fa fa-instagram' />
          </a>{' '}
          <a
            className='btn btn-social-icon btn-md'
            href='http://www.facebook.com/'
          >
            <i className='fa fa-facebook' />
          </a>{' '}
          <a className='btn btn-social-icon btn-md' href='http://twitter.com/'>
            <i className='fa fa-twitter' />
          </a>{' '}
          <a className='btn btn-social-icon btn-md' href='http://youtube.com/'>
            <i className='fa fa-youtube' />
          </a>
          <a
            role='button'
            className='btn btn-social-icon btn-md'
            href='mailto:notreal@notreal.co'
          >
            <i className='fa fa-envelope-o' />
          </a>
        </Row>
        <Row className='footer-site-info'>
          <Col>
            Copyright © 2023 connect | Privacy | Terms of Use | Security
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
