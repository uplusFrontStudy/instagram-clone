import React from 'react';
import Avatar from './Avatar';
import palette from '../../lib/styles/palettes';
import FollowActionButtonContainer from '../../containers/profile/FollowActionButtonContainer';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const UserList = ({users, loginUser, onCancle}) => {    
    return(
        <List>
            {users.map((user) => (
                <li className="follow-user" key={user.uid}>
                    <div>
                    <Link to={`../${user.userId}`} onClick={onCancle}>
                        <Avatar profileURL={user.profileURL} size="45px" />
                    </Link>

                    <div>
                        <p className="userid">{user.userId}</p>
                        <p className="username">{user.userName}</p>
                    </div>
                    </div>

                    <FollowActionButtonContainer
                    currentUser={user}
                    loginUser={loginUser}
                    visibleProfileEditButton={false}
                    />
                </li>
            ))}
        </List>            
    );
}

export default UserList;


const List = styled.ul`
    padding: 1rem;

    & li {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    & li > div {
        display: flex;
        align-items: center;
    }

    & li > div > div {
        margin-left: 15px;
    }

    & li .userid {
        font-weight: 600;
    }

    & li .username {
        font-weight: 400;
        color: ${palette.gray[6]};
        font-size: 15px;
    }

    & li + li {
        margin-top: 20px;
    }
`;
