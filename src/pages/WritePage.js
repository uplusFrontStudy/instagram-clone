import React, { useEffect, useState } from 'react';
import WriteContainer from '../containers/post/WriteContainer';
import WriteFileUploadContainer from '../containers/post/WriteFileUploadContainer';
import WriteFilePreviewContainer from '../containers/post/WriteFilePreviewContainer';
import WritePreviewListContainer from '../containers/post/WritePreviewListContainer';
import WriteModalContainer from '../containers/post/WriteModalContainer';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

function WritePage() {
  const [modal, setModal] = useState(false);

  const { view } = useSelector(({ write }) => ({
    view: write.view,
  }));

  useEffect(() => {
    setModal(true);
  }, [modal, view]);

  console.log('WritePage');
  return (
    <>
      <WriteModalContainer visible={modal}>
        {view === 'upload' && (
          <WriteUploadForm>
            <WriteFileUploadContainer />
            {/*  <WriteFilePreviewContainer /> */}
            {/*    <WritePreviewListContainer /> */}
          </WriteUploadForm>
        )}
        {view === 'content' && (
          <PreviewListForm>
            <WriteUploadForm>
              <WriteFilePreviewContainer />
            </WriteUploadForm>
            <WriteContainer />
          </PreviewListForm>
        )}
      </WriteModalContainer>
    </>
  );
}

export default WritePage;

const WriteUploadForm = styled.div`
  display: flex;
  height: 750px;
  width: 750px;
  max-height: min(calc(100vw - 372px), 855px);
  max-width: min(calc(100vw - 372px), 855px);
  min-height: 348px;
  min-width: 348px;
`;

const PreviewListForm = styled.div`
  display: flex;
  height: 793px;
  width: 1090px;
  max-width: 1195px;
  min-width: 688px;
  min-height: 391px;
  max-height: 898px;
`;
