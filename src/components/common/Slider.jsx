import React from 'react';
import Slick from 'react-slick';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const StyledSlider = styled(Slick)`
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

const Slider = ({ postImagesUrl }) => {
  const setting = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <StyledSlider {...setting}>
      {postImagesUrl &&
        postImagesUrl.map((postImage, i) => {
          return <PostImage src={postImage} alt="test" key={postImage} />;
        })}
    </StyledSlider>
  );
};

export default Slider;
