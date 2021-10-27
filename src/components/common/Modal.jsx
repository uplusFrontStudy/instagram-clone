import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palettes';
import Button from './Button';


const Fullscreen = styled.div`
  position: fixed;
  z-index: 30;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalBlock = styled.div`
  min-width: 320px;
  background-color: white;
  border-radius: 4px;
  box-shadow: 0 0 8px rgb(0 0 0 / 13%);
  padding: 1.5rem 1rem 1.5rem 1rem;
  display: flex;
  flex-direction: column;
    & > section {
        width: 100%;
        text-align: center;
    }
    & > .buttons{
        padding: 0 1rem 1rem 1rem;
        display: flex;
        flex-direction: column;
    }
`;

const Header = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${palette.gray[4]};
  padding: 0 1rem 1rem 1rem;
  div {
    height: 100%;
    width: 24px;
  }
`;

const Content = styled.section`
  display: flex;
  flex-direction: column;
  padding: 0 1rem 1rem 1rem;
  
`;

const Modal = ({ visible, title, content, confirmText, cancleText, onConfirm, onCancle, closeButton }) => {

  if (!visible) return null;

  return (
    <Fullscreen>
      <ModalBlock>
        <Header>
          <div></div>
          <h1>{title}</h1>
          { !closeButton ?
          <div></div> : 
          <div onClick={onCancle}>
                <svg
                aria-label="닫기"
                className="_8-yf5 "
                color="#262626"
                fill="#262626"
                height="24"
                role="img"
                viewBox="0 0 48 48"
                width="24">
                <path
                    clipRule="evenodd"
                    d="M41.1 9.1l-15 15L41 39c.6.6.6 1.5 0 2.1s-1.5.6-2.1 0L24 26.1l-14.9 15c-.6.6-1.5.6-2.1 0-.6-.6-.6-1.5 0-2.1l14.9-15-15-15c-.6-.6-.6-1.5 0-2.1s1.5-.6 2.1 0l15 15 15-15c.6-.6 1.5-.6 2.1 0 .6.6.6 1.6 0 2.2z"
                    fillRule="evenodd"
                ></path>
                </svg>
          </div>
        }
        </Header>
        <Content>
            {content}
        </Content>
        <section className="buttons">
        {confirmText && <Button>{confirmText}</Button>}
        {cancleText && <Button>{cancleText}</Button>}
        </section>
      </ModalBlock>
    </Fullscreen>
  );
};

export default Modal;
