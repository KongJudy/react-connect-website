import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import './subHeader.css';

const SubHeader = ({ current, detail }) => {
  return (
    <div className='subheader'>
      <Breadcrumb className='d-flex justify-content-end breadcrumbDiv'>
        <BreadcrumbItem className='breadcrumbLink'>
          <Link className='link' to='/'>
            home
          </Link>
        </BreadcrumbItem>
        {detail && (
          <BreadcrumbItem>
            <Link to='/donate'>donate</Link>
          </BreadcrumbItem>
        )}
        <BreadcrumbItem active>{current}</BreadcrumbItem>
      </Breadcrumb>
    </div>
  );
};

export default SubHeader;
