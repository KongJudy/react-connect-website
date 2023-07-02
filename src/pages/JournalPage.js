import { Container } from 'reactstrap';
import SubHeader from '../components/subheader/SubHeader';
import JournalEntry from '../features/journal/JournalEntry';

const JournalPage = () => {
  return (
    <>
      <div>
        <SubHeader current='journal' />
      </div>
      <Container>
        <JournalEntry />
      </Container>
    </>
  );
};

export default JournalPage;
