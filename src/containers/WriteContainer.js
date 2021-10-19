import React, { useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import Write from '../components/post/Write';
import { changeField, initialize } from '../modules/write';

const WriteContainer = () => {
  const dispath = useDispatch();
  const { content } = useSelector(({ write }) => ({
    content: write.content,
  }));

  const onChangeField = useCallback(
    (paylod) => {
      dispath(changeField(paylod));
    },
    [dispath],
  );

  //언마운트될 때 초기화
  useEffect(() => {
    return () => {
      dispath(initialize());
    };
  }, [dispath]);

  return <Write onChangeField={onChangeField} content={content} />;
};

export default WriteContainer;
