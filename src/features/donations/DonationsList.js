import { Col, Row } from 'reactstrap';
import DonationCard from './DonationCard';
import { selectAllDonations } from './donationsSlice';

const DonationsList = ({ setDonationId }) => {
  const donations = selectAllDonations();

  return (
    <Row className='mx-auto'>
      {donations.map((donation) => {
        return (
          <Col
            md='5'
            className='m-4'
            key={donation.id}
            onClick={() => setDonationId(donation.id)}
          >
            <DonationCard donation={donation} />
          </Col>
        );
      })}
    </Row>
  );
};

export default DonationsList;
