import React from 'react';

const ProfileEditForm = ({users}) => {

    return (
        <form>
            <h2>프로필 편집 </h2>
            <h3>이름</h3>
            <input type="text" value={users.userId}></input>

            <h3>사용자 이름</h3>
            <input type="text" value={users.userId}></input>

            <h3>웹사이트</h3>
            <input type="text"></input>

            <h3>소개</h3>
            <input></input>

            <h3>이메일</h3>
            <input></input>

            <h3>전화번호</h3>
            <input></input>

            <h3>성별</h3>
            <input></input>

            <button>제출</button>
        </form>

    );

}

export default ProfileEditForm;