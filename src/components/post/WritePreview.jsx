import React, { useState } from 'react';

import FilePreview from './FilePreview';

const WritePreview = ({ postFiles, onChangeImages }) => {
  return (
    <>
      {console.log('wretePreview')}
      {Array.isArray(postFiles) && postFiles.length !== 0 && (
        <FilePreview
          postFiles={[postFiles[0]]} //WritePreview은 배열 첫번쨰 이미지만 나옴
          onChangeImages={onChangeImages}
        />
      )}
    </>
  );
};

export default WritePreview;
