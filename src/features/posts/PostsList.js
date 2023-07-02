import { Container, Col, Row } from 'reactstrap';
import PostCard from './PostCard';
import './postCard.css';
import { selectAllPosts } from '../posts/postsSlice';

const PostsList = () => {
  const posts = selectAllPosts;

  return (
    <Container>
      <Row className='mx-auto'>
        {posts.map((post) => {
          return (
            <Col sm='12' md='6' lg='4' className='p-4' key={post.id}>
              <PostCard post={post} />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default PostsList;
