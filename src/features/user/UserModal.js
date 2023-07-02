import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentUser, selectCurrentUser } from './userSlice';
import {
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  Label,
  Button
} from 'reactstrap';
import { Formik, Field, Form } from 'formik';
import connect from '../../app/assets/img/connect.png';
import bunnyAvatar from '../../app/assets/img/bunny.png';
import iconAvatar from '../../app/assets/img/icon-avatar.png';
import iconAvatarW from '../../app/assets/img/icon-w-avatar.png';
import './userModal.css';

const UserModal = () => {
  const [loginOpen, setLoginOpen] = useState(false);

  const currentUser = useSelector(selectCurrentUser);

  const dispatch = useDispatch();

  const handleLogin = (values) => {
    const currentUser = {
      id: Date.now(),
      avatar: bunnyAvatar,
      username: values.username,
      password: values.password
    };
    dispatch(setCurrentUser(currentUser));
    setLoginOpen(false);
  };

  return (
    <>
      <span className='navbar-text ml-auto'>
        {currentUser ? (
          <div style={{ width: '4rem', height: '4rem' }}>
            <img
              src={currentUser.avatar}
              alt={'user'}
              style={{ width: '100%', height: '100%' }}
            />
          </div>
        ) : (
          <div className='nav-link' onClick={() => setLoginOpen(true)}>
            <img
              className='changeImg '
              src={iconAvatar}
              alt='contact page button'
            />
            <img
              className='changeImg'
              src={iconAvatarW}
              alt='contact page button'
            />
          </div>
        )}
      </span>
      <Modal isOpen={loginOpen} contentClassName='customLoginModal'>
        <ModalHeader toggle={() => setLoginOpen(false)}>
          <img src={connect} alt='connect logo' />
          <span style={{ fontSize: '1.6em', fontWeight: 'bold' }}>connect</span>
        </ModalHeader>
        <ModalBody>
          <Formik
            initialValues={{
              username: '',
              password: ''
            }}
            onSubmit={handleLogin}
          >
            <Form>
              <FormGroup>
                <Label htmlFor='username'>username</Label>
                <Field
                  id='username'
                  name='username'
                  placeholder='username'
                  className='form-control'
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor='password'>password</Label>
                <Field
                  id='password'
                  name='password'
                  placeholder='password'
                  className='form-control'
                />
              </FormGroup>
              <Button className='submitBtn' type='submit'>
                connect
              </Button>
            </Form>
          </Formik>
        </ModalBody>
      </Modal>
    </>
  );
};

export default UserModal;
