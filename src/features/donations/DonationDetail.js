import { Card, CardImg, CardText, CardBody, Col, CardFooter } from 'reactstrap';
import './donationCard.css';

const DonationDetail = ({ donation }) => {
  const { name, image, description, address, href } = donation;

  return (
    <Col className='m-4 mx-auto'>
      <Card className='detailCard' style={{ backgroundColor: '#F6EEE0' }}>
        <CardImg className='detailImg' top src={image} alt='background image' />
        <CardBody style={{ zIndex: '1' }}>
          <CardText className='detailText'>{description}</CardText>
        </CardBody>
        <CardFooter className='detail-footer' style={{ zIndex: '1' }}>
          <div className='donateAddress'>{address}</div>{' '}
          <a href={href}>{name}</a>
        </CardFooter>
      </Card>
    </Col>
  );
};

export default DonationDetail;
