import React from 'react';
import { useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../common/Header';
import Button from '../common/Button';
import Responsive from '../common/Responsive';

const ProfileEdit = ({ user, editUser, loginUser }) => {
    
    const nameRef = useRef();
    const history = useHistory();
    const onUpated = (event) => {
        event.preventDefault();
        editUser({
            userId: loginUser.userId,
            userName: nameRef.current.value,
        });
        history.goBack();
    }

    return (
        <>
            <Header />
            <Block>
                <EditContainer>
                    <Menu>
                        <li>프로필 편집</li>
                    </Menu>
                    <ContentsContainer>
                    <form>
                        <div>
                            <h3>이름</h3>
                            <input type="text" defaultValue={loginUser.userName} ref={nameRef}></input>
                        </div>

                        <div>
                            <h3>웹사이트</h3>
                            <input type="text"></input>
                        </div>

                        <div>
                            <h3>소개</h3>
                            <input></input>
                        </div>

                        <div>
                            <h3>이메일</h3>
                            <input></input>
                        </div>


                        <div>
                            <h3>전화번호</h3>
                            <input></input>
                        </div>


                        <div>
                            <h3>성별</h3>
                            <input></input>
                        </div>
                        <Button cyan={true} onClick={onUpated}>제출</Button>
                    </form>

                    </ContentsContainer>

                </EditContainer>
            </Block>
        </>
    );
}

export default ProfileEdit;

const Block = styled(Responsive)`
    display: flex;
    padding: 1rem;
`;

const EditContainer = styled.div`
    width:100%;
    margin: 85px auto;
    font-size: 1.125rem;
    display: flex;
    border: 1px solid rgba(var(--b6a,219,219,219),1);
`;

const ContentsContainer = styled.div`
    width: 75%;

    form > div {
        display: flex;
        margin: 25px;
    }

    form h3{
        width: 150px;
        text-align: right;
        line-height: 1.7;
        padding: 0 32px;
        font-size: 16px;
    }

    form input{
        background: 0 0;
        border: 1px solid #dbdbdb;
        border: 1px solid rgba(var(--ca6,219,219,219),1);
        border-radius: 3px;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        color: #262626;
        color: rgba(var(--i1d,38,38,38),1);
        -webkit-box-flex: 0;
        -webkit-flex: 0 1 355px;
        -ms-flex: 0 1 355px;
        flex: 0 1 355px;
        font-size: 16px;
        height: 32px;
        padding: 0 10px;
        width: 100%;
    }
`;

const Menu = styled.ul`
    width: 25%;
    border-right: 1px solid #dbdbdb;

    li{
        border-left: 2px solid black;
        font-size: 16px;
        line-height: 20px;
        padding: 16px 16px 16px 30px;
        width: calc(100% - 48px);
        cursor: pointer;
    }
`

const StyledLink = styled(Link)`
	box-sizing: border-box;
	display: block;
	padding: 4px 8px;
	margin: 0 auto;
    text-decoration: none;
    color: black;

	font-weight: ${(props) => (props.isActive ? "bold" : "normal")};
`;