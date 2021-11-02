import React, { useRef } from 'react';
import styled from 'styled-components';
import Button from '../common/Button';
import Modal from '../common/Modal';
import palette from '../../lib/styles/palettes';
import defaultImg from '../../images/profile_default_image.png';
import { Link } from 'react-router-dom';

const EditModal = ({ visible, onCancle, currentUser, onEdit }) => {
  const nameRef = useRef();
  const introduceRef = useRef();

  const onUpdate = (event) => {
    event.preventDefault();
    onEdit({
      ...currentUser,
      userName: nameRef.current.value,
      introduce: introduceRef.current.value,
    });
    onCancle();
  };

  const title = (
    <>
      <div></div>
      <h1>프로필 편집하기</h1>
      <div></div>
    </>
  );

  return (
    <Modal title={title} visible={visible}>
      <EditForm>
        <ul>
          <li>
            <div className="image-box">
              <img
                src={currentUser.profileURL || defaultImg}
                alt="프로필 이미지 바꾸기"
              />
            </div>
            <div>
              <p className="userId">{currentUser.userId}</p>
              <p>프로필 사진 바꾸기</p>
            </div>
          </li>
          <li>
            <h3>이름</h3>
            <div>
              <input
                type="text"
                defaultValue={currentUser.userName}
                ref={nameRef}
              />
              <p className="description">
                사람들이 이름, 별명 또는 비즈니스 이름 등 회원님의 알려진 이름을
                사용하여 회원님의 계정을 찾을 수 있도록 도와주세요.
              </p>
            </div>
          </li>
          <li>
            <h3>소개</h3>
            <div>
              <textarea
                type="text"
                defaultValue={currentUser.introduce}
                ref={introduceRef}
              />
            </div>
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
    </Modal>
  );
};

export default EditModal;

const EditForm = styled.form`
  padding: 1.5rem;

  & li {
    display: flex;
    margin-bottom: 30px;
  }

  & li > *:nth-child(1) {
    text-align: left;
    line-height: 1.7;
    font-size: 16px;
    width: 20%;
  }

  & li > *:nth-child(2) {
    width: 80%;
    max-width: 350px;
    padding-top: 4px;
  }

  .image-box img {
    width: 42px;
    heigth: 42px;
    border-radius: 50%;
  }

  .userId {
    font-size: 20px;
    line-height: 22px;
    margin-bottom: 2px;
  }

  .userId + p {
    color: ${palette.cyan[10]};
    font-size: 13px;
    cursor: pointer;
  }

  input,
  textarea {
    width: 100%;
    background: 0;
    border: 1px solid #dbdbdb;
    border-radius: 3px;
    padding: 5px 10px;
  }

  textarea {
    height: 80px;
    resize: none;
  }

  .description {
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    color: ${palette.gray[7]};
    margin-top: 10px;
  }
`;

const Buttons = styled.div`
  text-align: right;
  & > Button + Button {
    margin-left: 10px;
  }
`;
