import styled from "styled-components";
import imgBanner from "./../../assets/img/banner.png";

const BannerEstilizado = styled.div`
  background-image: url(${imgBanner});
  background-size: cover;
  background-repeat: no-repeat;

  width: 100%;
  height: 330px;

  display: flex;
  align-items: center;
  flex-grow: 1;

  border-radius: 20px;

  animation: shadow-drop-center 0.6s linear both;

  @keyframes shadow-drop-center {
    0% {
      box-shadow: 0 0 0 0 transparent;
    }
    100% {
      box-shadow: 0 0 20px 0 rgba(255, 255, 255, 0.55);
    }
  }

  h1 {
    width: 300px;
    height: 144px;
    color: #fff;
    margin: 21px 21px 21px 64px;
    font-size: 40px;
    font-weight: 400;
    line-height: 48px;

    animation: blur-in 0.9s linear both;

    @keyframes blur-in {
      0% {
        filter: blur(12px);
        opacity: 0;
      }
      100% {
        filter: blur(0);
        opacity: 1;
      }
    }
  }
`;

const Banner = () => {
  return (
    <BannerEstilizado>
      <h1>A galeria mais completa de fotos do espaço!</h1>
    </BannerEstilizado>
  );
};

export default Banner;
