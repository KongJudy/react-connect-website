import { Card, CardImg } from 'reactstrap';
import { Link } from 'react-router-dom';

const DonationCard = ({ donation }) => {
  const { id, name, image } = donation;
  return (
    <Link to={id}>
      <Card className="donateCard">
        <CardImg className="donateCardImg" src={image} alt={name} />
      </Card>
    </Link>
  )
}

export default DonationCard;