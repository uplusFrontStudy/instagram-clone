import React, { useRef } from 'react';
import styled from 'styled-components';

const Modal = ({trigger, setTrigger, onUpload, onDelete, user}) => {
    
    const inputRef = useRef();

    const onInputClick = event => {
        event.preventDefault();
        inputRef.current.click();
    };

    async function uploadProfile(event) {
        const file = event.target.files[0];
        onUpload(file, user);
        setTrigger(false);
    };

    async function deleteProfile(event) {
        
        onDelete(user);
        setTrigger(false);
    };


    return (trigger) ? (
        <ModalContainer>
            <ModalInner>
                <ModalTitle>프로필 사진 바꾸기</ModalTitle>
                
                <FileInput ref={inputRef} type="file" accept="image/*" name="profile" onChange={uploadProfile}/>
            <ColorButton red onClick={onInputClick}>사진 업로드</ColorButton>
                <ColorButton blue onClick={deleteProfile}>현재 사진 삭제</ColorButton>
                <Button onClick={() => setTrigger(false)}>취소</Button>                
            </ModalInner>
        </ModalContainer>

    ) : "";
}

export default Modal;

const ModalContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0 , 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ModalInner = styled.div`
    width: 400px;
    height: 222px;
    border-radius : 12px;
    position: relative;
    background-color: white;
    text-align: center;
    display: flex;
    flex-direction: column;
`;
const ModalTitle = styled.h3`
    font-size: 18px;
    font-weight: 600;
    height: 45px;
    line-height: 45px;
`;

const Button = styled.button`
    background-color: transparent;
    outline: 0;
    border: 0;
    width: 100%;
    height: 47px;
    font-size: 14px;
    border-top: 1px solid #dbdbdb;
    cursor: pointer;
`;

const ColorButton = styled(Button)`
    color: ${props =>  props.red ? "#ed4956" : "#0095f6"};
    font-weight: 700;
`;

const FileInput = styled.input`
    display: none;
`;


