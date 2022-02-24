import React from 'react';
import styled from 'styled-components';

const Write = ({ onChangeField, content }) => {
  const onChangeContent = (e) => {
    onChangeField({
      key: 'content',
      value: e.target.value,
    });
  };

  return (
    <WriteBlock>
      <TitleLabel>상세 정보</TitleLabel>
      <Textarea
        maxLength="2200"
        placeholder="문구 입력..."
        rows="3"
        onChange={onChangeContent}
        value={content}
      ></Textarea>
      <LocationSection>
        <input placeholder="위치추가" />
      </LocationSection>
    </WriteBlock>
  );
};

export default Write;
const WriteBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 340px;
  padding: 0 16px;
`;
const TitleLabel = styled.label`
  width: 100%;
  color: #262626;
  display: block;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  margin: 16px 0px;
`;

const Textarea = styled.textarea`
  width: 100%;
  height: 24px !important;
  background-color: transparent;
  border: 0;
  border-radius: 6px;
  color: #262626;
  font-size: 16px;
  line-height: 24px;
  outline: 0;
  resize: none;
  max-height: 168px;
  min-height: 168px;
`;

const LocationSection = styled.div`
  border-top: 1px solid #dbdbdb;
  border-bottom: 1px solid #dbdbdb;
  display: flex;
  flex-direction: row;
  justify-content: center;
  input {
    height: 44px;
    border: 0;
    padding: 4px 9px;
    width: 100%;
    font-size: 16px;
    color: #262626 !important;
  }
`;
