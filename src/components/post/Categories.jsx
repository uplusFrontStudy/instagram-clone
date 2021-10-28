import React from 'react';
import styled, { css } from 'styled-components';
import Responsive from '../common/Responsive';
import icons from '../../../src/images/icons.png';

const categories = [
  {
    name: 'post',
    text: '게시물',
    icon: ['-160px -369px', '-174px -369px'],
  },
  {
    name: 'storage',
    text: '저장됨',
    icon: ['0 -389px', '-12px -389px'],
  },
  {
    name: 'tags',
    text: '태그됨',
    icon: ['-216px -369px', '-230px -369px'],
  },
];

const CategoriesBlock = styled(Responsive)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 1px;
  text-align: center;
`;

const Category = styled.a`
  cursor: pointer;
  white-space: pre;
  text-decoration: none;
  color: #8e8e8e;
  margin-right: 60px;
  position: relative;

  &:hover {
    color: #495057;

    ::before {
      ${(props) =>
        props.icon &&
        css`
          background-position: ${props.icon[1]};
        `}
    }
  }

  ::before {
    content: '';
    display: block;
    position: absolute;
    left: -16px;
    height: 12px;
    width: 12px;
    background-repeat: no-repeat;
    ${(props) =>
      props.icon &&
      css`
        background-position: ${props.icon[0]};
      `}
    background-image: url(${icons});
  }
`;

const Icons = styled.span`
  display: inline-block;
  margin-right: 8px;
  position: relative;
  background-repeat: no-repeat;
  ${(props) =>
    props.icon &&
    css`
      background-position: ${props.icon[0]};
      &:hover {
        background-position: ${props.icon[1]};
      }
    `}

  height: 12px;
  width: 12px;
  background-image: url(${icons});
`;

const Categories = () => {
  return (
    <>
      <CategoriesBlock>
        {categories.map((c) => (
          <Category key={c.name} icon={c.icon}>
            {c.text}
          </Category>
        ))}
      </CategoriesBlock>
    </>
  );
};

export default Categories;
