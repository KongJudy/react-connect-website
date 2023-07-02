import { Button } from 'reactstrap';
import connect1 from '../../app/assets/img/connect.png';
import connect2 from '../../app/assets/img/connectedW.png';
import './connectBtn.css';

const ConnectBtn = () => {
  return (
    <>
      <Button className='connectBtn'>
        <div className='changeImg'>
          <img className='connect' src={connect1} alt='connect logo' />
        </div>
        <div className='changeImg'>
          <img className='connect' src={connect2} alt='connected logo' />
        </div>
      </Button>
    </>
  );
};

export default ConnectBtn;
