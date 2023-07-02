import { useSelector } from 'react-redux';
import { Card, CardBody, CardText, Container } from 'reactstrap';

const JournalEntries = () => {
  const entries = useSelector((state) => state.journal.entries);

  return (
    <Container className='mx-auto'>
      <h3>Your Entries:</h3>
      <Card className='journal-card' style={{ height: '370px' }}>
        <CardBody>
          <CardText>{entries}</CardText>
        </CardBody>
      </Card>
    </Container>
  );
};

export default JournalEntries;
