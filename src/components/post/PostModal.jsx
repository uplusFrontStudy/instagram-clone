import React from 'react';
import Modal from '../common/Modal';
import Slider from 'react-slick';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Wrap = styled.div`
  width: 921px;
  height: 921px;
`;

const StyledSlider = styled(Slider)`
  .slick-slide div {
    outline: none;
  }
  .slick-dots {
    bottom: 10px;
  }

  .slick-prev {
    left: 5px;
    z-index: 1;
  }

  .slick-prev:before {
    font-size: 30px;
    color: #000000;
  }

  .slick-next {
    right: 15px;
  }

  .slick-next:before {
    font-size: 30px;
    color: #000000;
  }
`;

const PostImage = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  margin: auto;
`;

const PostModal = ({ visible, post, error, loading, onCancle }) => {
  if (!visible) return null;

  if (error) {
    if (error.response && error.response.status === 404) {
      return <Modal visible={visible}>존재하지 않는 포스트입니다.</Modal>;
    }
    return <Modal>오류 발생!</Modal>;
  }

  if (loading || !post) {
    return null;
  }

  const setting = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Modal visible={visible} onCancle={onCancle}>
      <Wrap>
        <StyledSlider {...setting}>
          {post &&
            post.postFilesUrl.map((postFile, i) => {
              return <PostImage src={postFile} alt="test" key={postFile} />;
            })}
        </StyledSlider>
      </Wrap>
    </Modal>
  );
};

export default PostModal;
