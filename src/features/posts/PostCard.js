import ConnectBtn from '../../components/connectbtn/ConnectBtn';
import { useState } from 'react';
import {
  Card,
  CardImg,
  CardBody,
  CardImgOverlay,
  CardTitle,
  CardFooter,
  Col,
  Row,
  Button
} from 'reactstrap';
import './postCard.css';

const PostCard = ({ post }) => {
  const { username, image, location, date_posted, topic, posted } = post;

  const [counter, setCounter] = useState(0);

  return (
    <Card
      style={{
        width: '310px',
        height: '390px',
        fontWeight: '600'
      }}
    >
      <CardImg
        height='180px'
        className='bgImage'
        src={image}
        alt='background image'
      />
      <CardImgOverlay style={{ textAlign: 'center', fontWeight: 'bold' }}>
        <CardTitle
          className='cardTitle px-1'
          style={{ fontSize: '2.1rem', marginTop: '10px' }}
        >
          {topic}
        </CardTitle>
        <Row
          style={{
            fontSize: '.9rem',
            fontWeight: 'bold'
          }}
        >
          <Col>{date_posted}</Col>
        </Row>
      </CardImgOverlay>
      <CardBody className='cardBody'>
        {posted}
        <Button className='readMoreBtn'>
          <span className='readMore'>read more</span>
        </Button>
      </CardBody>
      <CardFooter className='card-footer'>
        <Row>
          <Col md='7'>
            <div className='userNameLocation'>
              {username} ({location})
            </div>
          </Col>
          <Col md='2'>
            <div className='counter'>{counter}</div>
          </Col>
          <Col md='3'>
            <div
              onClick={() => setCounter(counter + 1)}
              className='postConnectBtn'
            >
              <ConnectBtn className='postConnectBtn' />
            </div>
          </Col>
        </Row>
      </CardFooter>
    </Card>
  );
};

export default PostCard;
