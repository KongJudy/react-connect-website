import SubHeader from '../components/subheader/SubHeader';
import { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import DonationDetail from '../features/donations/DonationDetail';
import DonationsList from '../features/donations/DonationsList';
import { selectDonationById } from '../features/donations/donationsSlice';

const DonatePage = () => {
  const [donationId, setDonationId] = useState(0);
  const selectedDonation = selectDonationById(donationId);

  return (
    <>
      <div>
        <SubHeader current='donate' />
      </div>
      <Container className='mx-auto'>
        <Row>
          <Col sm='12' md='12' lg='7'>
            <DonationsList setDonationId={setDonationId} />
          </Col>
          <Col sm='12' md='12' lg='5'>
            <DonationDetail donation={selectedDonation} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default DonatePage;
