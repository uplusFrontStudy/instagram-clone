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

const PostModal = ({ visible, title, data, onCancle }) => {
  if (!visible) return null;
  if (!data) return null;

  const setting = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Modal visible={visible} title={title} onCancle={onCancle}>
      <Wrap>
        <StyledSlider {...setting}>
          {data &&
            data.postImagesUrl.map((postImage, i) => {
              return <PostImage src={postImage} alt="test" key={postImage} />;
            })}
        </StyledSlider>
      </Wrap>
    </Modal>
  );
};

export default PostModal;
