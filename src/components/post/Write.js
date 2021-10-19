import React, { useEffect } from 'react';
import styled from 'styled-components';

const Label = styled.label`
  color: #262626;
  display: block;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  margin-top: 28px;
  margin-bottom: 10px;
`;

const Textarea = styled.textarea`
  width: 80%;
  background-color: transparent;
  border: 1px solid #262626;
  border-radius: 6px;
  padding: 7px;
  color: #262626;
  font-size: 12px;
  line-height: 16px;
  outline: 0;
  resize: none;
`;

const Write = ({ onChangeField, content }) => {
  const onChangeContent = (e) => {
    onChangeField({
      key: 'content',
      value: e.target.value,
    });
  };

  return (
    <>
      <Label>상세 정보</Label>
      <Textarea
        maxLength="2200"
        placeholder="문구 입력..."
        rows="3"
        onChange={onChangeContent}
        value={content}
      ></Textarea>
    </>
  );
};

export default Write;
