import puzzlesimg from '../../app/assets/img/puzzleBg.jpg';
import connect from '../../app/assets/img/connect.png';
import {
  Card,
  CardImgOverlay,
  CardHeader,
  CardImg,
  CardBody,
  CardFooter
} from 'reactstrap';
import './aboutUsCard.css';

const AboutUsCard = () => {
  return (
    <Card className='aboutCard'>
      <CardImg
        className='aboutImg'
        top
        src={puzzlesimg}
        alt='background image of puzzles'
      />
      <CardImgOverlay
        style={{ textAlign: 'center', display: 'inline-block', padding: '0' }}
      >
        <CardHeader className='aboutHeader'>our mission</CardHeader>
      </CardImgOverlay>
      <div style={{ fontSize: '14px', fontWeight: 'bold' }}>
        Photo by
        <a href='https://unsplash.com/@melpoole?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>
          {' '}
          Mel Poole
        </a>
      </div>
      <CardBody className='aboutCardBody'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt
        in culpa qui officia deserunt mollit anim id est laborum.
      </CardBody>
      <CardFooter className='aboutFooter'>
        <span style={{ fontWeight: 'bold' }}>connecteam</span>
        <div className='aboutFooterLogo'>
          <img src={connect} alt='connect logo' />
        </div>
      </CardFooter>
    </Card>
  );
};

export default AboutUsCard;
