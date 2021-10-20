import React, { useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import Write from '../components/post/Write';
import { changeField, initialize } from '../modules/write';

const WriteContainer = () => {
  const dispatch = useDispatch();
  const { content } = useSelector(({ write }) => ({
    content: write.content,
  }));

  const onChangeField = useCallback(
    (paylod) => {
      dispatch(changeField(paylod));
    },
    [dispatch],
  );

  //언마운트될 때 초기화
  useEffect(() => {
    return () => {
      dispatch(initialize());
    };
  }, [dispatch]);

  return <Write onChangeField={onChangeField} content={content} />;
};

export default WriteContainer;
