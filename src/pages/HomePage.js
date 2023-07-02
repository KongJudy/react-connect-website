import { Container } from 'reactstrap';
import PostsList from '../features/posts/PostsList';
import SubHeader from '../components/subheader/SubHeader';

const HomePage = () => {
  return (
    <>
      <div>
        <SubHeader current="home" />
      </div>
      <Container>
        <PostsList />
      </Container>
    </>
  );
};

export default HomePage;
