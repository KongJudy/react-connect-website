import { Container } from 'reactstrap';
import UserCalendar from '../usercalendar/UserCalendar';
import './leftSidebar.css';

const LeftSidebar = () => {
  return (
    <Container className='leftSidebar'>
      <UserCalendar />
    </Container>
  );
};

export default LeftSidebar;
