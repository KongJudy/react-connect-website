import { Col, Container, Row } from 'reactstrap';
import SubHeader from '../components/subheader/SubHeader';
import JournalEntry from '../features/journal/JournalEntry';
import JournalEntries from '../features/journal/JournalEntries';

const JournalPage = () => {
  return (
    <>
      <div>
        <SubHeader current='journal' />
      </div>
      <Container>
        <Row className='mx-auto'>
          <Col sm='12' md='6'>
            <div>
              <JournalEntries />
            </div>
          </Col>

          <Col sm='12' md='6'>
            <div>
              <JournalEntry />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default JournalPage;
