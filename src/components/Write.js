import React, { useState } from 'react';
import styled from 'styled-components';
import Header from './common/Header';
import FileUpload from './FileUpload';
import Responsive from './common/Responsive';

const Write = () => {
  const WriteBlock = styled(Responsive)`
    margin: 60px auto 0;
    max-width: 935px;
  `;

  const WriteWapper = styled.div`
    width: 100%;
  `;

  const WriteForm = styled.form`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    .postImage {
      flex-basis: 320px;
      flex-grow: 0;
      display: block;
      margin-right: 60px;
      background-color: beige;
    }

    .postContent {
      display: block;
      flex-grow: 1;
      max-width: 555px;

      h2 {
        font-size: 32px;
        line-height: 40px;
        font-weight: 300;
      }

      label {
        color: #262626;
        display: block;
        font-size: 16px;
        font-weight: 600;
        line-height: 24px;
        margin-top: 28px;
        margin-bottom: 10px;
      }

      textarea {
        background-color: transparent;
        border: 0;
        color: #262626;
        font-size: 12px;
        line-height: 16px;
        outline: 0;
        resize: none;
      }

      button {
        display: block;
        cursor: pointer;
        background-color: rgba(var(--d69, 0, 149, 246), 1);
        color: rgba(var(--eca, 255, 255, 255), 1);
        box-sizing: border-box;
        font-weight: 600;
        padding: 5px 9px;
        border: 1px solid transparent;
        border-radius: 4px;
      }
    }
  `;

  const [newUserInfo, setNewUserInfo] = useState({
    profileImages: [],
  });

  const updateUploadedFiles = (files) =>
    setNewUserInfo({ ...newUserInfo, profileImages: files });

  return (
    <>
      <Header />
      <WriteBlock>
        <WriteWapper>
          <WriteForm>
            <div className="postImage">
              <FileUpload
                accept=".jpg,.png,.jpeg"
                multiple
                updateFilesCb={updateUploadedFiles}
              />
            </div>
            <div className="postContent">
              <h2> 새 동영상 추가하기</h2>
              <label>상세 정보</label>
              <textarea
                maxlength="2200"
                placeholder="문구 입력..."
                rows="3"
              ></textarea>
              <label>사람 태그하기</label>
              <label>위치 추가</label>
              <button>게시</button>
            </div>
          </WriteForm>
        </WriteWapper>
      </WriteBlock>
    </>
  );
};

export default Write;
