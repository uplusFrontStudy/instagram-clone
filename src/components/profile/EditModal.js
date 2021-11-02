import React, { useRef } from 'react';
import styled from 'styled-components';
import Button from '../common/Button';
import Modal from '../common/Modal';

const EditModal = ({ visible, onCancle, currentUser, onEdit }) => {
  const nameRef = useRef();
  const introduceRef = useRef();

  const onUpdate = (event) => {
    event.preventDefault();
    onEdit({
      uid: currentUser.uid,
      userName: nameRef.current.value,
    });
    onCancle();
  };

  return (
    <Modal
      title={'프로필 편집'}
      visible={visible}
      content={
        <EditForm>
          <ul>
            <li>
              <h3>이름</h3>
              <input
                type="text"
                defaultValue={currentUser.userName}
                ref={nameRef}
              />
            </li>
            <li>
              <h3>사용자아이디</h3>
              <input type="text" defaultValue={currentUser.userId} readOnly />
            </li>

            <li>
              <h3>소개</h3>
              <input
                type="text"
                defaultValue={currentUser.introduce}
                ref={introduceRef}
              />
            </li>
          </ul>
          <Buttons>
            <Button cyan={true} onClick={onUpdate}>
              제출
            </Button>
            <Button cyan={false} onClick={onCancle}>
              취소
            </Button>
          </Buttons>
        </EditForm>
      }
    />
  );
};

export default EditModal;

const EditForm = styled.form`
  padding: 1.5rem;

  & li {
    display: flex;
    margin-bottom: 30px;
  }

  & h3 {
    text-align: left;
    line-height: 1.7;
    padding: 0 20px 0 0;
    font-size: 16px;
    width: 70%;
  }

  & input {
    min-width: 250px;
    background: 0 0;
    border: 1px solid #dbdbdb;
    border-radius: 3px;
    padding: 0 10px;
    height: 32px;
  }
`;

const Buttons = styled.div`
  text-align: right;

  & > Button + Button {
    margin-left: 10px;
  }
`;
