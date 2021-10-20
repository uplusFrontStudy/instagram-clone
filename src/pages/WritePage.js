import React from 'react';
import styled from 'styled-components';
import Header from '../components/common/Header';
import Responsive from '../components/common/Responsive';
import WriteActionButtonContainer from '../containers/WriteActionButtonContainer';
import WriteContainer from '../containers/WriteContainer';
import WriteFilePreviewContainer from '../containers/WriteFilePreviewContainer';
import WriteFileUploadContainer from '../containers/WriteFileUploadContainer';
import plusImg from '../images/plus.png';

const WriteLayout = styled(Responsive)`
  margin: 60px auto 0;
  max-width: 935px;
`;

const WriteInner = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const PostCoverImage = styled.div`
  flex-basis: 320px;
  flex-grow: 0;
  display: block;
  margin-right: 60px;
  background-color: beige;
`;

const PostContent = styled.div`
  display: block;
  flex-grow: 1;
  max-width: 555px;
`;

const PostPreView = styled.div`
  display: flex;
  width: 100%;
  overflow: hidden;
`;

const Title = styled.h2`
  font-size: 32px;
  line-height: 40px;
  font-weight: 300;
`;

const Label = styled.label`
  color: #262626;
  display: block;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  margin-top: 28px;
  margin-bottom: 10px;
`;

const FileUploadBtn = styled.div`
  position: relative;
  width: 62px;
  height: 100%;
  margin-left: 10px;
  cursor: pointer;
`;

const Image = styled.img`
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
`;

function WritePage() {
  return (
    <>
      <Header />
      <WriteLayout>
        <WriteInner>
          <PostCoverImage>
            <WriteFileUploadContainer
              name="coverImage"
              accept=".jpg,.png,.jpeg"
            />
          </PostCoverImage>
          <PostContent>
            <Title> 새 피드 추가하기</Title>
            <Label>이미지 업로드</Label>
            <PostPreView>
              <WriteFilePreviewContainer />
              <FileUploadBtn>
                <WriteFileUploadContainer
                  name="postImages"
                  accept=".jpg,.png,.jpeg"
                  multiple
                />
                <Image src={plusImg} alt="plus" />
              </FileUploadBtn>
            </PostPreView>
            <WriteContainer />
            <WriteActionButtonContainer />
          </PostContent>
        </WriteInner>
      </WriteLayout>
    </>
  );
}

export default WritePage;
