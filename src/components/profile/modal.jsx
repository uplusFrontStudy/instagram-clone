import React, { useRef } from 'react';
import styled from 'styled-components';

const Modal = (props) => {
    const inputRef = useRef();

    const onInputClick = event => {
        event.preventDefault();
        inputRef.current.click();
    };

    const onProfileUpload = event => {

        const file = event.target.files[0];
        /*
        const storageRef = storage.ref();
        const fileRef = storageRef.child(file.name);
        fileRef.put(file).then(()=>{
            console.log("upload");
        });
        */
    };

    return (props.trigger) ? (
        <ModalContainer>
            <ModalInner>
                <ModalTitle>프로필 사진 바꾸기</ModalTitle>
                
                <FileInput ref={inputRef} type="file" accept="image/*" name="profile" onChange={onProfileUpload}/>
            <ColorButton red onClick={onInputClick}>사진 업로드</ColorButton>
                <ColorButton blue>현재 사진 삭제</ColorButton>
                <Button onClick={() => props.setTrigger (false)}>취소</Button>                
            </ModalInner>
        </ModalContainer>

    ) : "";
}

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


export default Modal;