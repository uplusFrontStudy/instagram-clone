import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import WriteModal from '../../components/post/WriteModal';
import user from '../../modules/user';
import { initialize, setView, writePost } from '../../modules/write';

const WriteModalContainer = ({ visible, children }) => {
  const { postFiles, content, logginedUser, post, postError, view } =
    useSelector(({ write, user }) => ({
      postFiles: write.postFiles,
      content: write.content,
      logginedUser: user.user[0].userId,
      post: write.post,
      postError: write.postError,
      view: write.view,
    }));
  const dispatch = useDispatch();
  let history = useHistory();

  const onCancle = (e) => {
    e.stopPropagation();
    history.goBack();
    dispatch(initialize());
  };

  const onPublish = (e) => {
    e.preventDefault();
    dispatch(
      writePost({
        content,
        postFiles,
        logginedUser,
      }),
    );
  };

  const onViewChange = (changeView) => {
    dispatch(setView(changeView));
  };

  useEffect(() => {
    if (post) {
      history.push(`/`);
    }

    if (postError) {
      console.log(postError);
    }
  }, [history, post, postError]);

  return (
    <WriteModal
      visible={visible}
      onCancle={onCancle}
      onPublish={onPublish}
      onViewChange={onViewChange}
      view={view}
    >
      {children}
    </WriteModal>
  );
};

export default WriteModalContainer;
