import React from 'react';
import styled from 'styled-components';
import Responsive from './common/Responsive';

const categories = [
  {
    name: 'post',
    text: '게시물',
  },
  {
    name: 'video',
    text: '동영상',
  },
  {
    name: 'storage',
    text: '저장됨',
  },
  {
    name: 'tags',
    text: '태그됨',
  },
];

const CategoriesBlock = styled(Responsive)`
  display: flex;
  padding: 1rem;
`;

const Category = styled.div`
  margin-top: 55px;
  font-size: 1.125rem;
  cursor: pointer;
  white-space: pre;
  text-decoration: none;
  color: inherit;
  padding-bottom: 0.25rem;

  &:hover {
    color: #495057;
  }

  & + & {
    margin-left: 1rem;
  }
`;

const Categories = () => {
  return (
    <>
      <CategoriesBlock>
        {categories.map((c) => (
          <Category key={c.name}>{c.text}</Category>
        ))}
      </CategoriesBlock>
    </>
  );
};

export default Categories;
