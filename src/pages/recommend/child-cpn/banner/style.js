import styled from "styled-components";

const BannerWrapper = styled.div`
  position: relative;
  height: 270px;
  overflow: hidden;

  .img-cover {
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    height: 100%;
    width: 100vw;
    filter: blur(100px);
  }

  .center {
    display: flex;
    justify-content: center;

    .left {
      width: 730px;

      img {
        width: 100%;
        height: 270px;
      }
    }

    .right {
      a {
        display: inline-block;
        width: 250px;
        height: 270px;
        background: url(${require("@/assets/img/download.png")});
      }
    }
  }

  .arrow {
    display: flex;
    align-items: center;
    position: absolute;
    top: 0;
    z-index: 2;
    width: 100vw;
    height: 270px;
  

    .btn {
      position: absolute;
      width: 37px;
      height: 63px;
      background-image: url(${require("@/assets/img/banner_sprite.png")});
      background-color: transparent;
      cursor: pointer;

      &:hover {
        background-color: rgba(0, 0, 0, 0.1);
      }
    }

    .left {
      left: 158px;
      background-position: 0 -360px;
    }

    .right {
      right: 168px;
      background-position: 0 -508px;
    }
  }
`

export {
  BannerWrapper
}
